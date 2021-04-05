import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';
const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://powerful-everglades-26594.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddOrder = () =>{
        console.log('order added',products[0])
    }
    return (
        <div className="style-product">
            {
                products.map(product => <Product product={product} handleAddOrder={handleAddOrder}></Product>)
            }
        </div>
    );
};

export default Home;