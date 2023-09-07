import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Footer, Navbar } from "../components";
import Data from "./productData.js";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(Data);

  const selectedProduct = item.find((Val) => Val.id === id);

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const Card = ({ item }) => {
    return (
      <>
        <div className="card">
          <div className="row justify-content-center">
            {item &&
              item.map((Val) => {
                return (
                  <div className="port1" key={Val.id}>
                    <div className="port2">
                      <img
                        src={Val.img}
                        alt={Val.title}
                        className="img-container "
                      />
                    </div>
                    <div className="port3">
                      <div
                        className="card-title fw-bold fs-4"
                        style={{ color: "#32de84" }}
                      >
                        {Val.title}
                      </div>
                      <div className="card-text">{Val.desc}</div>
                      <div>
                        <Link
                          to={"./product/" + Val.id}
                          className="btn btn-dark m-1"
                        >
                          Buy Now
                        </Link>
                        <button
                          className="btn btn-dark m-1"
                          onClick={() => addProduct(item)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="container my-5 py-2">
            <div>
              <div key={selectedProduct.id}>
                <div className="col-md-6 col-sm-12 py-3">
                  <img
                    className="img-fluid"
                    src={selectedProduct.img}
                    alt={selectedProduct.title}
                    width="400px"
                    height="400px"
                  />
                </div>
                <div className="col-md-6 col-md-6 py-5">
                  <h4 className="text-uppercase text-muted">
                    {selectedProduct.category}
                  </h4>
                  <h1 className="display-5">{selectedProduct.title}</h1>
                  <h3 className="display-6 my-4">${selectedProduct.price}</h3>
                  <p className="lead">{selectedProduct.desc}</p>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => addProduct(selectedProduct)}
                  >
                    Add to Cart
                  </button>
                  <Link to="/cart" className="btn btn-dark mx-3">
                    Go to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
            <h2 className="">You may also Like</h2>
            <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
              <Card item={item} />
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
