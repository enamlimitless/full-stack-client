import React, { useEffect, useState } from 'react';
import DeleteProduct from '../DeleteProduct/DeleteProduct';

const Delete = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://powerful-everglades-26594.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    console.log(products)
    return (
        <div>
            {
                products.map(product => <DeleteProduct product={product}></DeleteProduct>)
            }
        </div>
    );
};

export default Delete;