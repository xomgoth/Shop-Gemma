import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Left = () => {
    return (

        <div className="col-span-1">

            <h1 className="text-xl font-bold  mb-2">SEARCH</h1>
            <hr />
            <div className="flex">
                <input type="text" placeholder="Search" className=" border border-black-900   py-3 px-5  mt-8" value="" ></input>
                <Link>
                    <div className=" border border-black-900 mt-8  hover:bg-yellow-500 " >

                        <img src="images/search.jpg" alt="" className="h-6 my-3  mx-3" />

                    </div>
                </Link>
            </div>


            <h1 className="text-xl font-bold mt-8 mb-2">CATEGORIES</h1>
            <hr />
            <div className="">
                <p className="py-5"> <Link to="#" className="hover:text-yellow-500">Barber (10)</Link></p>
                <p className=""><Link to="#" className="hover:text-yellow-500"> Fashion (08)</Link> </p>
                <p className="py-5"><Link to="#" className="hover:text-yellow-500">Handbag (07)</Link></p>
                <p className=""><Link to="#" className="hover:text-yellow-500">Jewelry (14)</Link></p>
                <p className="py-5"><Link to="#" className="hover:text-yellow-500">Jewelry (14)</Link></p>
            </div>
            <h1 className="text-xl font-bold mt-2 mb-2">BLOG ARCHIVES</h1>
            <hr />
            <div className="">
                <p className="py-5"><Link to="#" className="hover:text-yellow-500">January (10)</Link></p>
                <p className=""><Link to="#" className="hover:text-yellow-500">February (08)</Link> </p>
                <p className="py-5"><Link to="#" className="hover:text-yellow-500">March (07)</Link></p>
                <p className=""><Link to="#" className="hover:text-yellow-500">April (14)</Link></p>
                <p className="py-5"><Link to="#" className="hover:text-yellow-500">May (10)</Link></p>
            </div>
            <h1 className="text-xl font-bold mt-3 mb-2">RECENT POST</h1>
            <hr />
            <div className="">
                <div className="row-span-1 mt-8">
                    <div className="grid grid-cols-3 gap-4 ">

                        <Link to="#"> <img src="images/be1.jpg" alt="" /></Link>
                        <div className="col-span-2">
                            <p>
                                <Link to="#">Auctor Gravida Enim</Link>
                            </p>
                            <p className="text-sm">
                                March 10 2019
                                        </p>
                        </div>

                    </div>
                    <div className="grid grid-cols-3 gap-4 my-8">

                        <Link to="#"> <img src="images/be1.jpg" alt="" /></Link>
                        <div className="col-span-2">
                            <p>
                                <Link to="#">Auctor Gravida Enim</Link>
                            </p>
                            <p className="text-sm">
                                March 10 2019
                                        </p>
                        </div>

                    </div>
                    <div className="grid grid-cols-3 gap-4 ">

                        <Link to="#"> <img src="images/be1.jpg" alt="" /></Link>
                        <div className="col-span-2">
                            <p>
                                <Link to="#">Auctor Gravida Enim</Link>
                            </p>
                            <p className="text-sm">
                                March 10 2019
                                        </p>
                        </div>

                    </div>

                </div>
            </div>

            <h1 className="text-xl font-bold mt-8 mb-2">TAGS</h1>
            <hr />
            <div>
                <div className="flex mt-10">

                    <p className="mr-5"><Link to="#" className="hover:text-yellow-500">CAMERA</Link></p>
                    <p className="mr-5"><Link to="#" className="hover:text-yellow-500">COMPUTER</Link></p>
                    <p className="mr-5"><Link to="#" className="hover:text-yellow-500">BAG</Link></p>

                </div><div className="flex mt-5">

                    <p className="mr-5"><Link to="#" className="hover:text-yellow-500">WATCH</Link></p>
                    <p className="mr-5"><Link to="#" className="hover:text-yellow-500">SMARTPHONE</Link></p>
                    <p className="mr-5"><Link to="#" className="hover:text-yellow-500">SHOES</Link></p>
                </div>

            </div>
        </div>

    )
}

export default Left
