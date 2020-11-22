import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import {
    BrowserRouter as Router,

    Link
} from "react-router-dom";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '50%',
        bottom: 'auto',

        marginRight: '-50%',
        transform: 'translate(-50%, -60%)'

    }
};

export const Product = () => {
    const [modal, setModal] = useState(false);

    const [list, setList] = useState([]);
    useEffect(() => {
        const URL_PRODUCT = 'http://localhost:3000/product/?_limit=8/ ';
        fetch(URL_PRODUCT)
            .then(response => response.json())
            .then(data => setList(data))
    }, []);


    return (
        <div className="container mx-auto ">
            <h1 className="text-center my-10 font-bold text-2xl">PRODUCT</h1>
            {/* <a href="#"> <img src="images/add.png" alt="" className="h-5 w-5" onClick={() => setModal(true)} /></a> */}

            <div className="grid grid-cols-4 gap-5">
                {list.map((post, index) => (
                    <div key={index} className="col-span-1 text-left">
                        <div className="overflow-hidden">
                            <a href="#">
                                <img src={post.image} alt="" onClick={() => setModal(true)} className="transform  duration-500 hover:scale-110" />
                            </a>
                        </div>
                        <a href="#">
                            <p className=" font-bold mt-5 mb-3 hover:text-teal-500"> {post.name}</p>
                        </a>

                        <span className="text-teal-500 font-bold">{post.price}</span>
                        <div className="flex float-right">

                        </div>
                    </div>
                ))}

                <Modal
                    style={customStyles}
                    isOpen={modal}
                    onRequestClose={() => setModal(false)}
                >

                    <div className="grid grid-cols-5 gap-10">

                        <div className="col-span-2">
                            <img src="images/product-f1.jpg" alt="" className="" />
                            <div className="grid grid-cols-4 gap-2 mt-5">
                                <img src="images/product-f1.jpg" alt="" className="h-20" />
                                <img src="images/product-f2.jpg" alt="" className="h-20" />
                                <img src="images/product-f3.jpg" alt="" className="h-20" />
                                <img src="images/product-f4.jpg" alt="" className="h-20" />
                            </div>
                        </div>

                        <div className="col-span-3">
                            <Link><img src="images/close.png" alt="" className="h-4 float-right" onClick={() => setModal(false)} /></Link>
                            <Link to="#">
                                <h1 className="text-2xl font-bold hover:text-yellow-500">Ornare Sed Consequat</h1>
                            </Link>
                            <div className="flex mt-3">
                                <img src="images/star.png" alt="" className="h-4" />
                                <img src="images/star.png" alt="" className="h-4 mx-2" />
                                <img src="images/star.png" alt="" className="h-4" />
                                <img src="images/star.png" alt="" className="h-4 mx-2" />
                                <img src="images/star.png" alt="" className="h-4" />

                            </div>
                            <p className="text-2xl font-bold text-yellow-700 mt-3">$160.00</p>
                            <p className="mt-6 text-gray-500">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
                                </p>
                            <div className="mt-5  flex">
                                <img src="images/letter-v.png" alt="" className="h-4 mr-3" /> <p className="text-sm"> 200 IN STOCK</p>
                            </div>
                            <div className="my-5">
                                <input type="button" value=" +  1   -" className="border border-gary-700 py-3 px-6" />

                                <input type="button" value="Add to cart" className="border border-gary-700 py-3 px-8 ml-6 bg-yellow-700 text-white hover:bg-black" />

                            </div>
                            <hr />
                            <div className="my-5 ">
                                <input type="button" value="Compare" className="border border-gary-700 py-3 px-8 hover:bg-yellow-700 hover:text-white" />
                                <input type="button" value="Wishlist" className="border border-gary-700 py-3 px-8 ml-6 hover:bg-yellow-700 hover:text-white" />

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



                </Modal>
            </div>


        </div>
    )
}
