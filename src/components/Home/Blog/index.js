import React, { useState, useEffect } from 'react'

export const Blog = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        const URL_BLOG = 'http://localhost:3000/blog/?_limit=3/';

        fetch(URL_BLOG)
            .then(response => response.json())
            .then(data => setBlog(data))
    }, []);
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-10 text-center">LATEST BLOGS</h1>
            <div className="grid grid-cols-3 gap-5">
                {blog.map((blog) => (
                    <div className="col-span-1 ">
                        <div className="overflow-hidden">
                            <a href="#">
                                <img src={blog.image} alt="" className="transform duration-500 hover:scale-110" />
                            </a>
                        </div>
                        <a href="#">
                            <h1 className="text-xl font-bold my-3 hover:text-teal-500">{blog.name}</h1>
                        </a>
                        <a href="#">
                            <span className=" underline hover:text-teal-500 ">
                                {blog.read}
                            </span>
                        </a>
                    </div>
                ))}
            </div>
            {/* <img src="images/banner1.jpg" alt="" className="mx-auto" /> */}
        </div>
    )
}
