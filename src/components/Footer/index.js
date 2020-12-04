import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Link,
    useParams
} from "react-router-dom";
export const Footer = () => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        const URL_ICONPRODUCT = 'http://localhost:1337/products?_limit=3';
        fetch(URL_ICONPRODUCT)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, []);
    return (
        <div className="container mx-auto mt-20">
            <div className="grid grid-cols-4 gap-2">

                <div className="col-span-1 text-left text-gray-600">

                    <img src="images/logo.png" alt="" className="mt-2" />
                    <div className="flex mt-10">
                        <img src="images/home.png" alt="" className="h-5 mr-2" /><p>169-C, Technohub, Dubai.</p>
                    </div>
                    <div className="flex my-5">
                        <img src="images/phone.png" alt="" className="h-5 mr-2" /><p>+880123456789</p>
                    </div>
                    <div className="flex">
                        <img src="images/email.png" alt="" className="h-5 mr-2" /><p>example@gmail.com</p>
                    </div>

                </div>

                <div className="col-span-1 text-left text-gray-700">
                    <h1 className=" text-lg">INFORMATION</h1>
                    <a href="#" className="hover:text-teal-500">
                        <p className="mt-12"> About Us</p>
                    </a>
                    <a href="#" className="hover:text-teal-500" >
                        <p className="my-5"> Delivery Infomation</p>
                    </a>
                    <a href="#" className="hover:text-teal-500">
                        <p> Terms & Conditions</p>
                    </a>
                    <a href="#" className="hover:text-teal-500">
                        <p className="my-5"> Frequently Questions</p>
                    </a>
                    <a href="#" className="hover:text-teal-500">
                        <p> Services</p>
                    </a>
                </div>

                <div className="col-span-1 text-left text-gray-700">
                    <h1 className=" text-lg"> FEATURED PRODUCT</h1>
                    <div className="grid grid-rows-3 gap-5 mt-12">
                        {product.map((product) => (
                            <div className="row-span-1 flex">
                                <img src={
                                    product.Image.map(item => {
                                        return `http://localhost:1337${item.url}`;
                                    })
                                } alt="" className="h-20" />
                                <div className="ml-5 font-bold">

                                    <p className="hover:text-teal-500"> <Link to="#">{product.Name} </Link> </p>

                                    <span className="text-teal-500">${product.Price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-1 text-left text-gray-700">
                    <h1 className=" text-lg"> BEST SELLERS</h1>
                    <div className="grid grid-rows-3 gap-5 mt-12">
                        {product.map((product) => (
                            <div className="row-span-1 flex">
                                <img src={product.Image.map(item => {
                                    return `http://localhost:1337${item.url}`;
                                })
                                } alt="" className="h-20" />
                                <div className="ml-5 font-bold">
                                    <a href="#">
                                        <p className="hover:text-teal-500">{product.Name}</p>
                                    </a>
                                    <span className="text-teal-500">${product.Price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

