import React, { useState, useEffect } from 'react'
import Left from './OnLeft'
import Right from './Right'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";



const Shop = () => {
    const [cate, setCate] = useState([]);

    const Url = 'http://localhost:1337/categories';
    useEffect(() => {
        fetch(Url)
            .then(response => response.json())
            .then(data => setCate(data))
    }, [])
    return (
        <div>
            <div className="bg-gray-100 text-center">

                <h1 className="text-3xl text-bold pt-10 ">PRODUCT</h1>

                <p className="pb-16"> <Link to="/"> Home</Link> /
                <span className="text-yellow-500"><Link to="/blogs"> Product</Link></span>
                </p>

            </div>


            <div className="grid grid-cols-4 gap-10 mt-10 ">

                <Left cate={cate} />
                <Right />
            </div>


        </div>
    )
}

export default Shop
