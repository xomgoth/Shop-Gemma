import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Right = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        const URL_BLOG = 'http://localhost:1337/blogs';

        fetch(URL_BLOG)
            .then(response => response.json())
            .then(data => setBlog(data))
    }, []);
    return (
        <div className="col-span-3">

            {blog.map((post, index) => {
                return (
                    <div className="grid grid-cols-7 gap-5 mb-10" key={index}>
                        <div className="col-span-3 overflow-hidden">
                            <Link to="#"> <img src={
                                `http://localhost:1337${post.Image.url}`

                            } alt="" className="transform  duration-500 hover:scale-110" /></Link>
                        </div>

                        <div className="col-span-4">
                            <h1 className="text-3xl font-medium hover:text-yellow-500 transition delay-700 duration-300 ">
                                <Link>{post.Name}</Link>
                            </h1>
                            <p>Written by:  <span className="text-yellow-500">Admin</span></p>
                            <p className="mt-6  font-normal">
                                {post.Desc}
                            </p>
                            <button class="border-yellow-500 border text-yellow-500 hover:bg-yellow-500 hover:text-white text-white font-bold py-2 px-4 rounded mt-6">
                                READ MORE
                        </button>
                        </div>
                    </div>
                )
            })}
            <div className="border border-gray-300 mt-20 flex justify-center ">

                <button class="border-gray-300 border  hover:bg-yellow-500 hover:text-white  py-1 px-3 rounded my-4 ">
                    <img src="images/left-arrow.png" alt="" className="h-2" />
                </button>
                <button class="border-gray-300 border bg-yellow-500  hover:text-white  py-1 px-3 rounded my-4 mx-5 ">
                    1
                </button>
                <button class="border-gray-300 border  hover:bg-yellow-500 hover:text-white  py-1 px-3 rounded my-4">
                    2
                </button>
                <button class="border-gray-300 border  hover:bg-yellow-500 hover:text-white  py-1 px-3 rounded my-4 mx-5">
                    3
                </button>
                <button class="border-gray-300 border  hover:bg-yellow-500 hover:text-white  py-1 px-3 rounded my-4">
                    <img src="images/next.png" alt="" className="h-2" />
                </button>

            </div>
        </div>

    )
}

export default Right
