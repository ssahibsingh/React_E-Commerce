import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">
              Follow our social media pages for more.{" "}
            </p>
            <div className="text-dark fs-4" target="_blank" rel="noreferrer">
              <a href="https://web.facebook.com/profile.php?id=61550820483316">
                <i className="fa fa-facebook"></i>
              </a>
            </div>

            <div className="text-dark fs-4" target="_blank" rel="noreferrer">
              <a href="https://www.instagram.com/vhickstore/">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
