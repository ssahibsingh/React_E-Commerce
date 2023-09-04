import React from "react";
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to VhickStore – Your Ultimate Destination for Stylish Jerseys,
          Comfy Crocs, and Trendy Men's Shoes!
          <br></br>
          <br></br>
          At VhickStore, we are passionate about providing you with the latest
          in fashion and comfort. Our mission is to offer a curated selection of
          high-quality products that not only elevate your style but also make
          you feel confident and at ease.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://i.pinimg.com/564x/eb/a8/89/eba889b9b863b4d3f8b7ebfa15199eff.jpg"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Jerseys</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://i.pinimg.com/564x/f4/78/f5/f478f5fb88c81953e637c5dbf2627f0c.jpg"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Footwears</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://i.pinimg.com/564x/1a/c7/23/1ac723d6c7e725cc076893d757d8236f.jpg"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">crocs</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://i.pinimg.com/564x/5b/46/4e/5b464e942862cede539413d96c7a2964.jpg"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">slides</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
