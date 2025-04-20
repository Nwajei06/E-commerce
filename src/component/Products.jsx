import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const getProducts = async () => {
      try {
        const res1 = await fetch('https://dummyjson.com/products');
        const res2 = await fetch('https://fakestoreapi.com/products');

        const json1 = await res1.json();
        const json2 = await res2.json();

        // Add source tag to each product
        const dummyProducts = json1.products.map(p => ({ ...p, source: 'dummyjson' }));
        const fakeStoreProducts = json2.map(p => ({ ...p, source: 'fakestore' }));

        // Combine and filter
        let combined = [...dummyProducts, ...fakeStoreProducts];
        combined = combined.filter(product => {
          const category = product.category.toLowerCase();
          return category !== 'groceries' && category !== 'furniture';
        });

        const shuffledProducts = combined.sort(() => Math.random() - 0.5);

        if (isMounted) {
          setData(shuffledProducts);
          setFilter(shuffledProducts);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const Loading = () => (
    <>
      {[1, 2, 3, 4].map(n => (
        <div className="text-center" key={n}>
          <Skeleton height={350} />
        </div>
      ))}
    </>
  );

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category.toLowerCase() === cat.toLowerCase());
    setFilter(updatedList);
  };

  const ShowProducts = () => (
    <>
      {filter.map((product) => (
        <div className="col-md-3 mb-4" key={`${product.source}-${product.id}`}>
          <div className="card h-100 text-center p-3">
            <img
              src={product.image || product.images?.[0] || 'https://via.placeholder.com/200'}
              className="card-img-top"
              alt={product.title}
              height="200px"
              style={{ objectFit: 'contain' }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title.substring(0, 15)}...</h5>
              <p className="card-text">${product.price}</p>
              <NavLink to={`/product/${product.source}/${product.id}`} className="btn btn-outline-dark">
                Buy Now
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="container my-5 py-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h1 className="display-6 fw-bolder">Latest Products</h1>
          <hr />
        </div>
      </div>

      {/* ⬇️ Filter Buttons */}
      <div className="row mb-4">
        <div className="col text-center">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("fragrances")}>Fragrances</button>
        </div>
      </div>

      {/* ⬇️ Products Display */}
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}

export default Products;
