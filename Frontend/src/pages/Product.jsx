import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams, useNavigate } from "react-router-dom";
//import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
//import { Footer, Navbar } from "../components";
import axios from "axios";
import toast from "react-hot-toast";

const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingSimilar, setLoadingSimilar] = useState(true);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart");
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return process.env.REACT_APP_API_BASE_URL + '/images/placeholder-product.jpg';
    if (imagePath.startsWith('http')) return imagePath;
    return `${process.env.REACT_APP_API_BASE_URL}${imagePath}`; 
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productResponse = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/products/${id}`);
        const productData = productResponse.data.data || productResponse.data;
        
        if (!productData) {
          throw new Error("Product not found");
        }

        setProduct(productData);
        
        try {
          const similarResponse = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/products?category=${productData.category}&limit=4`
          );
          const similarData = similarResponse.data.data || similarResponse.data;
          setSimilarProducts(
            similarData.filter(p => p._id !== id && p._id !== productData._id)
          );
        } catch (similarError) {
          console.error("Failed to fetch similar products:", similarError);
          setSimilarProducts([]);
        }
      } catch (err) {
        toast.error("Failed to fetch product details");
        console.error("Error fetching product:", err);
        navigate('/products');
      } finally {
        setLoading(false);
        setLoadingSimilar(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  // Loading Component
  const Loading = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 py-3">
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
  );

  // LoadingSimilar Component
  const LoadingSimilar = () => (
    <div className="my-4 py-4">
      <div className="d-flex">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="mx-4">
            <Skeleton height={400} width={250} />
          </div>
        ))}
      </div>
    </div>
  );

  const ShowProduct = () => {
    if (!product) {
      return <div className="text-center py-5">Product not found</div>;
    }

    return (
      <div className="container my-5 py-2">
        <div className="row">
          <div className="col-md-6 col-sm-12 py-3">
            <img
              className="img-fluid"
              src={product.image}
              alt={product.title}
              width="400px"
              height="400px"
              onError={(e) => {
                e.target.src = getImageUrl('/images/placeholder-product.jpg');
              }}
            />
          </div>
          <div className="col-md-6 col-md-6 py-5">
            <h4 className="text-uppercase text-muted">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            {product.rating && (
              <p className="lead">
                {product.rating.rate} <i className="fa fa-star"></i>
                <small className="text-muted"> ({product.rating.count} reviews)</small>
              </p>
            )}
            <h3 className="display-6 my-4">${product.price}</h3>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-dark"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-dark mx-3">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowSimilarProduct = () => {
    if (similarProducts.length === 0) return null;

    return (
      <div className="py-4 my-4">
        <h2 className="text-center mb-4">You may also Like</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {similarProducts.map((item) => (
            <div key={item._id} className="card mx-2 mb-4" style={{ width: '18rem' }}>
              <img
                className="card-img-top p-3"
                src={getImageUrl(item.image)}
                alt={item.title}
                height={200}
                onError={(e) => {
                  e.target.src = getImageUrl('/images/placeholder-product.jpg');
                }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">
                  {item.title.substring(0, 20)}...
                </h5>
                <p className="card-text">${item.price}</p>
                <div className="d-flex justify-content-center">
                  <Link
                    to={`/product/${item._id}`}
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
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        {loading ? <Loading /> : <ShowProduct />}
        {loadingSimilar ? <LoadingSimilar /> : <ShowSimilarProduct />}
      </div>
      
    </>
  );
};

export default Product;