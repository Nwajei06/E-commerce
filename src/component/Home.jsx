import React from 'react'
import Products from './Products'
// import '../App.css';

function Home() {
  return (
    <div>

        
<div id='hero-className' className="card bg-dark text-white border-0 d-flex ">
                {/* <img id='hero' src="/assets/bg.png" className="card-img" alt="Background" height='550px'/> */}
                <img
  src="/assets/bg.png"
  alt="Hero"
  className="img-fluid w-100"
  style={{
    height: '500px',
    objectFit: 'contain',
    objectPosition: '80% center' // <-- moves the focus to the right
  }}
/>

                <div className="card-img-overlay  d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className=" bvn card-title display-3 fw-bolder mb-0" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">
                        CHECK OUT ALL THE TRENDS
                    </p>

                    </div>
                 
                </div>
            </div>
            <Products/>
    </div>
  )
}

export default Home