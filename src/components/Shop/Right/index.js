import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import {
    BrowserRouter as Router,
    Link,

} from "react-router-dom";

import Pagination from '../Pagination';


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

const Right = () => {
    const [modal, setModal] = useState(false);
    const [list, setList] = useState([]);
    const [totalProduct, setTotalProduct] = useState(0);

    const [filter, setFilter] = useState({
        start: 1,
        limit: 10,
        page: 1,


    })

    useEffect(() => {
        fetch('http://localhost:1337/products/count')
            .then(res => res.json())
            .then(data => setTotalProduct(data))
    }, [])


    useEffect(() => {
        const URL_PRODUCT = `http://localhost:1337/products?_start=${filter.start}&_limit=${filter.limit}`;

        function fetchData() {
            fetch(URL_PRODUCT)
                .then(response => response.json())
                .then(data => setList(data))
        }

        fetchData();
    }, [filter]);



    function handlePageChange(newStart) {
        let customStart;
        if (newStart < filter.start) {
            customStart = filter.start - filter.limit
        } else if (newStart > filter.start) {
            customStart = filter.start + filter.limit
        }

        setFilter({
            ...filter,
            start: customStart,
            page: newStart
        })
    }

    const [search, setSearch] = useState("");

    const filterProduct = list.filter(product => product.Name.toLowerCase().includes(search.toLocaleLowerCase()))




    return (

        <div className="col-span-3 mr-5">

            <div className="py-2" >

                <label htmlFor="" className="ml-64"> SEARCH : </label>

                <input type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="search...." className=" py-2 mb-8 w-64 pl-4 border border-gray-500 ml-4 italic rounded " />

                <h2 className="float-right py-2">Showing 1–10 Of 10 Results</h2>
            </div>

            <div className="grid grid-cols-4 gap-5">

                {filterProduct.map((post, index) => {
                    return <div key={index} className="col-span-1 text-left">
                        <div className="overflow-hidden">
                            <Link to="#">

                                <img src={
                                    post.Image.map(item => {

                                        return `http://localhost:1337${item.url}`;
                                    })
                                }
                                    alt={`${post.id}`} onClick={() => setModal(true)} className="transform  duration-500 hover:scale-110" />
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

                <Pagination page={filter.page} limit={filter.limit} onPageChange={handlePageChange} totalProduct={totalProduct} />

            </div>



            <Modal
                style={customStyles}
                isOpen={modal}
                onRequestClose={() => setModal(false)}
            >

                <div className="grid grid-cols-5 gap-10 " >

                    <div className="col-span-2">
                        <img src="images/product-f2.jpg" alt="" className="" />
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
                        <div className="mt-5 flex">
                            <img src="images/letter-v.png" alt="" className="h-4 mr-3" /> <p className="text-sm"> 200 IN STOCK</p>
                        </div>
                        <div className="my-5">
                            <input type="button" value=" +  1   -" className="border border-gary-700 py-3 px-6" />

                            <input type="button" value="Add to cart" className="border border-gary-700 py-3 px-8 ml-6 bg-yellow-700 text-white hover:bg-black" />

                        </div>
                        <hr />
                        <div className="my-5">
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

    )
}

export default Right
