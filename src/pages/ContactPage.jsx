import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex flex-column min-vh-100">
        <div className="container flex-grow-1 py-5">
          <div className="row gx-5 align-items-center">
            {/* Left side content */}
            <div className="col-md-6">
              <p className="text-uppercase fw-bold small" style={{ letterSpacing: "0.15em" }}>
                Do you have a <strong>QUESTION?</strong>
              </p>
              <h1 className="display-4 fw-bold mb-4">Send a direct message</h1>
              <p className="mb-5" style={{ maxWidth: "450px" }}>
                Bring win-win survival strategies to the table to ensure proactive dominance. Ultimately, a new normalcy emerges, which has developed from Generation X and is on the way to an optimized cloud solution.
              </p>

              <h5 className="fw-bold mb-3">Follow us on social networks</h5>
              <p style={{ maxWidth: "400px" }}>
                Real-time content created by users will provide multiple points of contact for offshoring.
              </p>
              <div className="d-flex gap-3 fs-3">
                <a
                  href="https://www.facebook.com/carthagodienst"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/carthago.all.service.gmbh/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-danger"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="bg-white p-4 shadow rounded">
                <form>
                  <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                      name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                      email<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="Message" className="form-label">
                      message
                    </label>
                    <textarea
                      rows={5}
                      className="form-control"
                      id="Message"
                      placeholder="Enter your message"
                    />
                  </div>
                  <button
                    className="btn"
                    style={{ backgroundColor: "#e39b2c", color: "black", fontWeight: "bold" }}
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
