import React from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex flex-column min-vh-100">
        <div className="container my-3 py-3 flex-grow-1">
          <h1 className="text-center">About Us</h1>
          <hr />
          <p className="lead text-center">
            Carthago All Service GmbH was founded in Frankfurt am Main in 2018 – with the aim of offering specialized services in the areas of hotels, e-commerce and IT consulting. A dynamic company that is active throughout Germany has emerged from a clear vision and great commitment.
            <br /><br />
            Our work is characterized by flexibility, reliability and tailor-made solutions. In the hotel industry, we take on service and support tasks that relieve daily operations and ensure that everything runs smoothly. In the e-commerce area, we offer operational support and advice for efficient online sales structures. In addition, as part of our IT consulting services, we develop individual strategies to optimize digital processes and use innovative technologies in a targeted manner.
            <br /><br />
            Carthago All Service GmbH stands for quality, discretion and partnership. Our aim is to sustainably support our customers with well thought-out solutions and professional implementation.
            <br /><br />
            <strong>Carthago All Service GmbH – Your partner for service, innovation and success.</strong>
          </p>
            <br/>
            <br/>
          <div className="mt-5">
            <h2 className="text-center fw-bold">What We Do</h2>
            <br />
            <p className="text-center lead">Services that we offer our customers</p>
            <div className="row text-center mt-4">
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold">IT solutions</h5>
                <p>Innovative IT solutions for maximum productivity. Advanced systems for your specific business requirements.</p>
              </div>
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold">Project takeover</h5>
                <p>Efficient IT projects through outsourcing. Let us take over your projects and concentrate on your core business.</p>
              </div>
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold">Security systems</h5>
                <p>Innovative security systems for comprehensive protection. Advanced solutions for your individual security needs.</p>
              </div>
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold">Reception service</h5>
                <p>Reception service for optimal visitor support. Efficient and friendly support for your company.</p>
              </div>
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold">Doorman</h5>
                <p>Doorman service for controlled and friendly reception. Security presence and support for a positive ambience in your entrance.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
