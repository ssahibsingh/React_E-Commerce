import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) =>{
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
//   }
    // return setFilter(data.filter((item) => item.category === cat));
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons col-12 d-flex justify-content-center py-5">
          <button className="btn btn-outline-dark mx-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark mx-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark mx-2" onClick={()=>filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark mx-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark mx-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
        </div>

        {filter.map((product) => {
          return (
            <>
              <div id={product.id} className="col-md-4 mb-4">
                <div class="card text-center h-100" key={product.id}>
                  <img
                    class="card-img-top p-3"
                    src={product.image}
                    alt="Card"
                    height={300}
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p class="card-text">
                      {product.description.substring(0, 90)}...
                    </p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item lead">$ {product.price}</li>
                    {/* <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li> */}
                  </ul>
                  <div class="card-body">
                    <a href="/" class="btn btn-dark m-1">
                      Buy Now
                    </a>
                    <a href="/" class="btn btn-dark m-1">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
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
