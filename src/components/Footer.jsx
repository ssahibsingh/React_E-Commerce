import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">follow our social media pages </p>
            <div
              className="text-dark fs-4"
              href="https://web.facebook.com/profile.php?id=61550820483316"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-facebook"></i>
            </div>

            <div
              className="text-dark fs-4"
              href="https://www.instagram.com/vhickstore/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
