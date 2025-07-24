import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart");
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/products`);
        const products = response.data.data || []; // Access nested data array
        
        setData(products);
        setFilter(products);
        
        const uniqueCategories = [...new Set(products.map(item => item.category))];
        setCategories(uniqueCategories);
      } catch (err) {
        toast.error("Failed to fetch products");
        console.error("API Error:", {
          status: err.response?.status,
          data: err.response?.data
        });
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilter(data);
    } else {
      const filtered = data.filter(item => item.category === activeCategory);
      setFilter(filtered);
    }
  }, [activeCategory, data]);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {[...Array(6)].map((_, index) => (
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" key={index}>
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  const ShowProducts = () => {
    if (!filter || filter.length === 0) {
      return <div className="text-center py-5">No products found</div>;
    }

    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className={`btn btn-outline-dark btn-sm m-2 ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`btn btn-outline-dark btn-sm m-2 ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row">
          {filter.map((product) => (
            <div
              key={product._id}
              className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
            >
              <div className="card text-center h-100">
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt={product.title}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                  <li className="list-group-item">
                    Rating: {product.rating?.rate} ({product.rating?.count} reviews)
                  </li>
                </ul>
                <div className="card-body">
                  <Link
                    to={`/product/${product._id}`}
                    className="btn btn-dark m-1"
                  >
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => addProduct(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
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
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;