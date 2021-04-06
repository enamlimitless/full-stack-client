import React, { useState } from 'react';
import './AddProduct.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setimageUrl] = useState(null);
    const onSubmit = data => {
        const eventData = {
            productName: data.productName,
            productWeight: data.weight,
            productPrice: data.price,
            imageUrl: imageUrl
        }
        const url = 'https://powerful-everglades-26594.herokuapp.com/products'
        console.log(eventData)
        fetch(url, {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(eventData)
        })
        .then(res => console.log(res))
    };
    const handleImageUpload = e =>{
        console.log(e.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'fa3407960c0525b7f56f015f7f5ae5f5')
        imageData.append('image', e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setimageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    console.log(watch,errors)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-lg-6">
                        <input className="form-control" name="productName"  ref={register} placeholder="Product Name" />
                        <br/>
                        <input className="form-control" name="weight" ref={register} placeholder="Product Weight" />
                        </div>
                        <br/>      
                        <div className="col-lg-6">
                        <input className="form-control" name="price" type="text" ref={register} placeholder="Product Price" />
                        <input className="form-control" name="file" type="file" onChange={handleImageUpload} ref={register} />
                        </div>
                        <input className="pd-btn" type="submit" />
                </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;