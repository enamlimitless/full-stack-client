import React from 'react';

const DeleteProduct = (props) => {
    const {productName, productPrice, productWeight, _id} = props.product || {}
    console.log(props.product.productName)

    const deleteProduct = id => {
        fetch(`http://localhost:5050/delete/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted',result)
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                   <span>{productName}</span>
                   <span>{productWeight}</span>
                   <span>{productPrice}</span>
                   <button onClick={() => deleteProduct(_id)}>Delete</button>
                   <p>{_id}</p>
                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;