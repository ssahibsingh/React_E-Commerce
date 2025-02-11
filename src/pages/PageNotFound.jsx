import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import { useEffect } from "react";
import analytics from "../lib/segment";

const PageNotFound = () => {
  useEffect(() => {
    analytics.page(); // Track page views on load
  }, []);
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5 bg-light text-center">
              <h4 className="p-3 display-5">404: Page Not Found</h4>
              <Link to="/" className="btn  btn-outline-dark mx-4">
                <i className="fa fa-arrow-left"></i> Go Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
