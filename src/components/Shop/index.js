import React from 'react'
import Left from './Left'
import Right from './Right'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Shop = () => {
    return (
        <div>
            <div className="bg-gray-100 text-center">

                <h1 className="text-3xl text-bold pt-10 ">PRODUCT</h1>

                <p className="pb-16"> <Link to="/"> Home</Link> /
                <span className="text-yellow-500"><Link to="/blogs"> Product</Link></span>
                </p>

            </div>


            <div className="grid grid-cols-4 gap-10 mt-10 ">

                <Left />
                <Right />
            </div>


        </div>
    )
}

export default Shop
