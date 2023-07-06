import React from 'react'
import ReactDOM from 'react-dom'
import './modal.css'
import { Link } from 'react-router-dom'


const Modal = ({show, closeModal, getProduct}) => {
    const {image, title, description, price, rating, id} = getProduct
    if(!show) return null;

  return ReactDOM.createPortal (
    <div className="modal">
        <div className='overlay' onClick={closeModal}></div>
        <div className='content'>
            <div className='content-display'>
                <img src={image} alt={title} className='image'/>
                <div style={{width: '40%'}}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div>
                        <p>Price: ${price}</p>
                        <p>Rate: {rating.rate}</p> 
                        <p>Count: {rating.count}</p>
                    </div>
                    <Link className='buy-btn' to={"/product/" + id}>Buy Now</Link>
                </div>
            </div>
            <button onClick={closeModal}>Close</button>
        </div>
    </div>,
    document.getElementById('portalModal')
  )
}

export default Modal