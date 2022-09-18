import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer class="mb-0">
        <div class="container d-flex flex-wrap justify-content-center align-items-center py-3 my-4">
          <div class="col-md-4 d-flex align-items-center">
            <span class="mb-3 mb-md-0">
              Copyright &copy; {year}{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://sahibsingh.vercel.app"
                className="text-decoration-underline text-primary fw-2"
              >
                Sahib Singh
              </a>
            </span>
          </div>

          <ul
            class="nav col-md-4 justify-content-end list-unstyled d-flex"
            style={{ fontSize: "25px" }}
          >
            <li class="mx-3 ">
              <a
                class="text-dark"
                href="https://github.com/ssahibsingh"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
