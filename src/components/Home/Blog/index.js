import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,

    Link,
} from "react-router-dom";
export const Blog = () => {
    const [blog, setBlog] = useState([]);
    const URL_BLOG = 'http://localhost:1337/blogs?_limit=3';
    useEffect(() => {
        fetch(URL_BLOG)
            .then(response => response.json())
            .then(data => setBlog(data))
    }, []);
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-10 text-center">LATEST BLOGS</h1>

            <div className="grid grid-cols-3 gap-5">
                {blog && blog.map(post => (
                    <div className="col-span-1 " >
                        <div className="overflow-hidden">
                            <Link to="">
                                <img src={

                                    `http://localhost:1337${post.Image.url}`

                                } alt="" className="transform duration-500 hover:scale-110" />
                            </Link>
                        </div>
                        <Link to="">
                            <h1 className="text-xl font-bold my-3 hover:text-teal-500">{post.name}</h1>
                        </Link>

                        <span className=" underline hover:text-teal-500 ">
                            READ MORE
                            </span>

                    </div>
                ))}


            </div>

        </div>
    )
}
