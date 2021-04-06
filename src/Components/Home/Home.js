import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Product from '../Product/Product';
import './Home.css';
const Home = () => {
    const [userDetail, setUserDetail] = useContext(UserContext)
    const [products, setProducts] = useState([]);
    const productDetail = {...products.productName}; 
    console.log('Hello im product',productDetail)
    useEffect(() => {
        fetch('https://powerful-everglades-26594.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddOrder = () =>{
        console.log('order added',products)
        const orderDetail = {...productDetail, ...userDetail, Date: Date()}
        fetch('http://localhost:5050/order',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(orderDetail)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
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