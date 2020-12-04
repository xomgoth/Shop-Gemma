import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Pagination from '../../Pagination';
const OnRight = () => {
    let { id } = useParams();
    const url = 'http://localhost:1337';
    const Url_Cate = 'http://localhost:1337/categories';

    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch(`${Url_Cate}/${id}`)
            .then(response => response.json())
            .then(data => setCategory(data.products))
    }, [id])
    return (
        <div className="col-span-3 mx-5">
            <div className="grid grid-cols-4 gap-5">

                {category.map((post, index) => {
                    return <div key={index} className="col-span-1 text-left">
                        <div className="overflow-hidden">
                            <Link to="#">

                                <img src={


                                    `${url}${post.Image[0].url}`

                                }
                                    alt={`${post.id}`} className="transform  duration-500 hover:scale-110" />
                            </Link>
                        </div>
                        <Link to={`/moi/${post.id}`}>
                            <p className=" font-bold mt-5 mb-3 hover:text-teal-500" > {post.Name}</p>
                        </Link>

                        <span className="text-teal-500 font-bold">${post.Price}</span>
                        <div className="flex float-right">

                        </div>
                    </div>
                })}


            </div>
            <div className="border border-gray-300 mt-20 flex justify-center ">

                <button
                    className="border px-4 py-3 mr-10 my-3"

                >
                    <img src="../images/prev.png" alt="" className="h-3 " />
                </button>
                <button className="border px-4 py-2 my-3" >1</button>
                <button className="border px-4 py-2 mx-10 my-3">2</button>
                <button className="border px-4 py-2 mr-10 my-3">3</button>
                <button
                    className="border px-4 py-3 my-3"

                >
                    <img src="../images/next.png" alt="" className="h-3" />
                </button>

            </div>
        </div>
    )
}

export default OnRight
