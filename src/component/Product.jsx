import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useCart } from '../CartContext';



function Product() {
    const { addToCart } = useCart();
  const { source, id } = useParams(); // ⬅️ grab both source and id
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      let url;

      if (source === 'fakestore') {
        url = `https://fakestoreapi.com/products/${id}`;
      } else if (source === 'dummyjson') {
        url = `https://dummyjson.com/products/${id}`;
      } else {
        console.error("Unknown product source");
        return;
      }

      try {
        const res = await fetch(url);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }

      setLoading(false);
    };

    getProduct();
  }, [source, id]);

  const Loading = () => (
    <>
      <div className="col-md-6">
        <Skeleton height={400} />
      </div>
      <div className="col-md-6" style={{ lineHeight: 2 }}>
        <Skeleton height={50} width={300} />
        <Skeleton height={75} />
        <Skeleton height={25} width={150} />
        <Skeleton height={50} />
        <Skeleton height={150} />
        <Skeleton height={50} width={100} />
        <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
      </div>
    </>
  );

  const ShowProduct = () => (
    <>
      <div className="col-md-6">
        <img
          src={product.image || product.images?.[0]}
          alt={product.title}
          height="400px"
          width="350px"
        />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">{product.category}</h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead fw-bolder">
          Rating: {product.rating?.rate || product.rating}
          <i className="fa fa-star"></i>
        </p>
        <h3 className="display-6 fw-bold my-4">${product.price}</h3>
        <p className="lead">{product.description}</p>
        <button className="btn btn-outline-dark" onClick={() => addToCart(product)}>Add to Cart</button>
        <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
          Go to Cart
        </NavLink>
      </div>
    </>
  );

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}

export default Product;
