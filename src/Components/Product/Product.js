import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log('hander',props.handleAddOrder)
    const {productName, productWeight, productPrice, imageUrl} = props.product || {};
    
    return (
       <div>
           <div className="container">
               <div className="row">
                    <div className="card" style={{width: "22rem"}}>
                        <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span className="card-link pd-name">{productName}</span>
                        <span className="card-link pd-weight">{productWeight}</span><br/>
                        <span className="card-link pd-price mx-3">{productPrice}</span>
                        <button onClick={() => props.handleAddOrder(props.product[0])} className="pd-btn mx-4">Buy Now</button>
                    </div>
                    </div>
                </div>
           </div>
       </div>
    );
};

export default Product;