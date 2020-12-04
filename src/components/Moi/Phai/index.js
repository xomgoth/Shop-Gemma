import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Link,
    useParams
} from "react-router-dom";
const Phai = () => {
    let { id } = useParams();
    const URL = 'http://localhost:1337/products'
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`${URL}/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }, []);

    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1337/products?_limit=4")
            .then(response => response.json())
            .then(data => setList(data))
    }, [id]);

    return (
        <div className="col-span-3">

            <div className="grid grid-cols-5 gap-10 " >

                <div className="col-span-2">
                    <img src={
                        post.Image && post.Image.map(item => {
                            return `http://localhost:1337${item.url}`
                        })
                    }

                        alt="" className="w-full" />
                    <div className="grid grid-cols-4 gap-2 mt-5">
                        <img src="../images/product-f1.jpg" alt="" className="h-20" />
                        <img src="../images/product-f2.jpg" alt="" className="h-20" />
                        <img src="../images/product-f3.jpg" alt="" className="h-20" />
                        <img src="../images/product-f4.jpg" alt="" className="h-20" />
                    </div>
                </div>



                <div className="col-span-3">
                    <Link><img src="images/close.png" alt="" className="h-4 float-right" /></Link>
                    <Link to="#">
                        <h1 className="text-2xl font-bold hover:text-yellow-500">{post.Name}</h1>
                    </Link>
                    <div className="flex mt-3">
                        <img src="../images/star.png" alt="" className="h-4" />
                        <img src="../images/star.png" alt="" className="h-4 mx-2" />
                        <img src="../images/star.png" alt="" className="h-4" />
                        <img src="../images/star.png" alt="" className="h-4 mx-2" />
                        <img src="../images/star.png" alt="" className="h-4" />

                    </div>
                    <p className="text-2xl font-bold text-yellow-700 mt-3">${post.Price}</p>
                    <p className="mt-6 text-gray-500">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
                                </p>
                    <div className="mt-5 flex">
                        <img src="images/letter-v.png" alt="" className="h-4 mr-3" /> <p className="text-sm"> 200 IN STOCK</p>
                    </div>
                    <div className="my-5">
                        <input type="button" value=" +  1   -" className="border  py-3 px-6" />

                        <input type="button" value="Add to cart" className="border  py-3 px-8 ml-6 bg-yellow-700 text-white hover:bg-black" />

                    </div>

                    <div className="flex mb-10">

                        <h1 className="my-auto">SIZE :</h1>
                        <select name="" id="" className="border px-6 py-2 rouned-xl ml-5  bg-gray-100" >
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                        </select>
                    </div>
                    <div className="flex mb-10">

                        <h1 className="my-auto">COLOR :</h1>
                        <select name="" id="" className="border px-8 py-2 rouned-xl ml-5 bg-gray-100" >
                            <option value="">Gold</option>
                            <option value="">Blue</option>
                            <option value="">Gray</option>
                            <option value="">Red</option>
                        </select>
                    </div>
                    <hr />
                    <div className="my-5">
                        <input type="button" value="Compare" className="border  py-3 px-8 hover:bg-yellow-700 hover:text-white" />
                        <input type="button" value="Wishlist" className="border  py-3 px-8 ml-6 hover:bg-yellow-700 hover:text-white" />

                    </div>
                    <hr />
                    <div className="mt-6 flex">
                        <button className="flex boder bg-blue-600 text-white">
                            <img src="images/facebook.png" alt="" className="h-4 ml-2 my-1" /><p className=" mx-2 my-auto text-sm">Like</p>
                        </button>
                        <button className="flex boder bg-blue-500 text-white ml-3">
                            <img src="images/twitter.png" alt="" className="h-4 ml-2 my-1" /><p className=" mx-2 my-auto text-sm">Tweet</p>
                        </button>
                        <button className="flex boder bg-red-700 text-white ml-3">
                            <img src="images/pinterest.png" alt="" className="h-4 ml-2 my-1" /><p className=" mx-2 my-auto text-sm">Save</p>
                        </button>
                        <button className="flex boder bg-red-600 text-white ml-3">
                            <img src="images/gg.png" alt="" className="h-5 ml-2 my-1" /><p className=" mx-2 my-auto text-sm">Share</p>
                        </button>
                    </div>

                </div>

            </div>
            <h1 className="text-center font-bold  text-3xl mt-10">RELATED PRODUCT</h1>
            <div className="grid grid-cols-4 gap-10 mr-10 mt-10">

                {list.map((item, index) => (
                    <div key={index} className="col-span-1 text-left">
                        <div className="overflow-hidden">
                            <Link to="#">

                                <img src={
                                    item.Image.map(item => {

                                        return `http://localhost:1337${item.url}`;
                                    })
                                }
                                    alt="" className="transform  duration-500 hover:scale-110" />
                            </Link>
                        </div>
                        <Link to={`../moi/${item.id}`}>
                            <p className=" font-bold mt-5 mb-3 hover:text-teal-500" > {item.Name}</p>
                        </Link>

                        <span className="text-teal-500 font-bold">${item.Price}</span>
                        <div className="flex float-right">

                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Phai
