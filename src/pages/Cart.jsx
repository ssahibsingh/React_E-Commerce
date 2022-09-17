import React from "react";
import { Navbar } from "../components";
import { useSelector } from "react-redux";
const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  console.log(state);
  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
          </div>
        </div>
      </div>
    );
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.00;
    state.map((item) => {
      return (subtotal += item.price);
    });
    return (
      <>
        <section class="h-100 gradient-custom">
          <div class="container py-5">
            <div class="row d-flex justify-content-center my-4">
              <div class="col-md-8">
                <div class="card mb-4">
                  <div class="card-header py-3">
                    <h5 class="mb-0">Item List</h5>
                  </div>
                  <div class="card-body">
                    {state.map((item) => {
                      return (
                        <>
                          <div class="row d-flex align-items-center">
                            <div class="col-lg-3 col-md-12">
                              <div
                                class="bg-image hover-overlay hover-zoom ripple rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src={item.image}
                                  class="w-100"
                                  alt={item.title}
                                />
                                {/* <a href="#!">
                                  <div
                                    class="mask"
                                    style={{
                                      backgroundColor:
                                        "rgba(251, 251, 251, 0.2)",
                                    }}
                                  ></div>
                                </a> */}
                              </div>
                            </div>

                            <div class="col-lg-5 col-md-6">
                              <p><strong>{item.title}</strong></p>
                              {/* <p>Color: blue</p>
                              <p>Size: M</p> */}
                              <button
                                class="btn btn-outline-dark border-0 btn-sm mx-1"
                                data-mdb-toggle="tooltip"
                                title="Remove item"
                              >
                                <i class="fas fa-trash"></i>
                              </button>
                            </div>

                            <div class="col-lg-4 col-md-6">
                              <div
                                class="d-flex mb-4"
                                style={{ maxWidth: "300px" }}
                              >
                                <button
                                  class="btn px-3"
                                >
                                  <i class="fas fa-minus"></i>
                                </button>

                                <p className="mx-5">{item.qty}</p>

                                <button
                                  class="btn px-3"
                                >
                                  <i class="fas fa-plus"></i>
                                </button>
                              </div>

                              <p class="text-start text-md-center">
                                <strong>${item.price}</strong>
                              </p>
                            </div>
                          </div>

                          <hr class="my-4" />
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4">
                  <div class="card-header py-3 bg-white">
                    <h5 class="mb-0">Order Summary</h5>
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products ({state.length})<span>${subtotal}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>${shipping}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>${subtotal + shipping}</strong>
                        </span>
                      </li>
                    </ul>

                    <button class="btn btn-dark btn-lg btn-block">
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
    </>
  );
};

export default Cart;
