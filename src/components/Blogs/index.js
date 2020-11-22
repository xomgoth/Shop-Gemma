import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Left from './Left';
import Right from './Right';

const Blogs = () => {
    return (
        <div>
            <div className="bg-gray-100 text-center">

                <h1 className="text-3xl text-bold pt-10 ">BLOG</h1>

                <p className="pb-16"> <Link to="/"> Home</Link> /
                <span className="text-yellow-500"><Link to="/blogs"> Blog</Link></span>
                </p>

            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-10 mt-20">
                    <Left />
                    <Right />
                </div>
            </div>

        </div>
    )
}

export default Blogs
