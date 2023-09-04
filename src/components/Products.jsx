import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";
import "./product.css";
import Data from "./productData.js";

const Products = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  const dispatch = useDispatch();

  const addProduct = (item) => {
    dispatch(addCart(item));
  };
  const ShowProducts = ({ filterItem, setItem }) => {
    return (
      <>
        <div
          style={{
            justifyContent: "space-evenly",
            display: "flex",
            padding: "50px",
          }}
        >
          <button
            className="btn-dark text-white  btn"
            onClick={() => setItem(Data)}
          >
            All
          </button>

          <button
            style={{
              color: "white",
              backgroundColor: "#32de84",
              border: "#32de84",
              borderRadius: "10px",
            }}
            className=" text-whites"
            onClick={() => filterItem("latest")}
          >
            Men's Jersey
          </button>
          <button
            className="text-white"
            onClick={() => filterItem("cms")}
            style={{
              color: "white",
              backgroundColor: "#32de84",
              border: "#32de84",
              borderRadius: "10px",
            }}
          >
            Footwear
          </button>
          <button
            className="text-white"
            onClick={() => filterItem("scripting")}
            style={{
              color: "white",
              backgroundColor: "#32de84",
              border: "#32de84",
              borderRadius: "10px",
            }}
          >
            Crocs
          </button>
          <button
            className="text-white"
            onClick={() => filterItem("scripting")}
            style={{
              color: "white",
              backgroundColor: "#32de84",
              border: "#32de84",
              borderRadius: "10px",
            }}
          >
            Slides
          </button>
        </div>
      </>
    );
  };

  const Card = ({ item }) => {
    const dispatch = useDispatch();

    const addProduct = (item) => {
      dispatch(addCart(item));
    };
    return (
      <>
        <div className="container-fluid">
          <div className="row justify-content-center">
            {item.map((Val) => {
              return (
                <div className="port1" key={Val.id}>
                  <div className="port2">
                    <img
                      src={Val.img}
                      alt={Val.title}
                      className="img-container img-container1 img-container2 "
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
                    <div className="card-body">
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
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          <ShowProducts
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          ></ShowProducts>
        </div>
        <Card item={item} />
      </div>
    </>
  );
};

export default Products;
