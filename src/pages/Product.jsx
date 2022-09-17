import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch()

  const addProduct = (product)=>{
    dispatch(addCart(product))
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6 py-5">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6 py-5">
              <img
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead">
                {product.rating && product.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6  my-4">${product.price}</h3>
              <p className="lead">{product.description}</p>
              <button className="btn btn-outline-dark" onClick={()=>addProduct(product)}>Add to Cart</button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="row">
            <div className="mx-4">
                <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
                <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
                <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
                <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div class="row">
            {similarProducts.map((item) => {
              return (
                <div class="card mx-4 text-center">
                  <img
                    class="card-img-top p-3"
                    src={item.image}
                    alt="Card"
                    height={300}
                    width={300}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{item.title.substring(0, 15)}...</h5>
                  </div>
                  {/* <ul class="list-group list-group-flush">
                    <li class="list-group-item lead">${product.price}</li>
                  </ul> */}
                  <div class="card-body">
                    <Link to={"/product/" + item.id} class="btn btn-dark m-1">
                      Buy Now
                    </Link>
                    <button class="btn btn-dark m-1" onClick={()=>addProduct(item)}>
                      Add to Cart
                    </button>
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
      <>
        <div className="container">
          <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
          <div className="row my-5 py-5">
            <h2 className="">You may also Like</h2>
            <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </>
    </>
  );
};

export default Product;
