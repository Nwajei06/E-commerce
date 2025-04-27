import React from 'react';
import '../App.css';

function Contact() {
    return (
        <div className="container-div m-3">
            {/* Flex parent */}
            <div className=" classes d-flex flex-row flex-md-row align-items-start gap-6">

                {/* LEFT: Contact Form */}
                <div className="flex-fill" style={{ maxWidth: '600px' }}>
                    <h1>Contact</h1>
                    <ul className="list-inline small">
                        <li className="list-inline-item">name</li>
                        <li className="list-inline-item">email</li>
                        <li className="list-inline-item">subject</li>
                        <li className="list-inline-item">message</li>
                    </ul>

                    <div className="mb-3">
                        <input className="form-control border border-2 border border-dark" type="text" placeholder="Name" />
                    </div>

                    <div className="mb-3">
                        {/* <label className="form-label">Email</label> */}
                        <input className="form-control border border-2 border border-dark" type="email" placeholder="Email" />
                    </div>

                    <div className="mb-3">
                        {/* <label className="form-label">Subject</label> */}
                        <input className="form-control border border-2 border border-dark" type="text" placeholder="Subject" />
                    </div>

                    <div className="mb-3">
                        {/* <label>Message</label> */}
                        <textarea className="form-control " rows="4" placeholder="Message"></textarea>
                    </div>
          <button className="btn w-60 btn-outline-dark me-2 bg-dark text-white fa fa-paper-plane border border-dark d-flex gap-2 " >Send</button>
<br /><br />
          <img
                        src="/assets/dtwo.jfif"
                        alt="Visual One"
                        style={{
                            width: '150px',
                            height: '200px',
                            objectFit: 'cover',
                            // borderRadius: '10px'
                        }}
                    />
                </div>

                <div className="d-flex flex-column align-items-center mx-1">
                    <img
                        src="/assets/dtwo.jfif"
                        alt="Visual One"
                        style={{
                            width: '150px',
                            height: '200px',
                            objectFit: 'cover',
                            // borderRadius: '10px'
                        }}
                    /> <br />
                    <img
                        src="/assets/ach.jfif"
                        alt="Visual Two"
                        style={{
                            width: '135px',
                            height: '300px',
                            objectFit: 'cover',
                            // borderRadius: '10px'
                        }}

                    />
                        <section className="text-center my-2">
      {/* <h2 className="mb-4">Follow Me</h2> */}
      <div className="d-flex justify-content-center gap-4 fs-3">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-info">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-danger">
          <i className="fab fa-instagram"></i> 
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-dark">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>

                </div>

            </div>
        </div>

    );
}

export default Contact;
