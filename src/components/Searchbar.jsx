import React, { useState } from 'react'

const Searchbar = ({products,onSearch}) => {
    const [searchedProduct,setsearchedProduct] = useState('');
    const handleInput = (e)=>{
        const searchitem = e.target.value;
        setsearchedProduct(searchitem);


    }
    const handleSearch = ()=>{
        const filterdProduct = products.filter((item)=>item.title.toLowerCase().includes(searchedProduct.toLowerCase()));
        onSearch(filterdProduct);
    }
  return (
    <div>
        <input type="text" placeholder='Enter product to search' value={searchedProduct} onChange={handleInput} />
        <button  onClick={handleSearch} >search</button>
    </div>
  )
}

export default Searchbar