import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
const OnLeft = ({ cate }) => {

    return (
        <div className="col-span-1 ml-5">

            <h1 className="text-xl font-bold mb-2">CATEGORIES</h1>

            { cate.map(cate => (
                <div className="">
                    <p
                        className="py-5 ">
                        <Link to={`/category/${cate.id}`}
                            className="hover:text-yellow-500"
                        >
                            {cate.Name}
                        </Link>
                        <span className="float-right">(6)</span>
                    </p>
                    <hr />
                </div>
            ))}

            <h1 className="text-xl font-bold mt-2 mb-2">COLOR</h1>

            <div className="">
                <p className="py-5"> <Link to="#" className="hover:text-yellow-500">Gold</Link><span className="float-right">(6)</span></p>
                <hr />
                <p className="py-5"><Link to="#" className="hover:text-yellow-500"> Blue </Link><span className="float-right">(5)</span> </p>
                <hr />
                <p className="py-5"><Link to="#" className="hover:text-yellow-500">Black </Link><span className="float-right">(4)</span></p>
                <hr />
                <p className="py-5"><Link to="#" className="hover:text-yellow-500">Red </Link><span className="float-right">(3)</span></p>
                <hr />
                <p className="py-5"><Link to="#" className="hover:text-yellow-500">White </Link><span className="float-right">(2)</span></p>
            </div>
            <h1 className="text-xl font-bold mt-3 mb-2">TOP RATED PRODUCT</h1>
            <hr />
            <div className="">
                <div className="row-span-1 mt-8">
                    <div className="grid grid-cols-3 gap-4 ">

                        <Link to="#"> <img src="../images/product-1.jpg" alt="" /></Link>
                        <div className="col-span-2">
                            <p>
                                <Link to="#">Cras neque metus</Link>
                            </p>
                            <p className="text-sm">
                                $60.00
                             </p>
                        </div>

                    </div>
                    <div className="grid grid-cols-3 gap-4 my-8">

                        <Link to="#"> <img src="../images/product-2.jpg" alt="" /></Link>
                        <div className="col-span-2">
                            <p>
                                <Link to="#">Cras neque metus</Link>
                            </p>
                            <p className="text-sm">
                                $60.00
                            </p>
                        </div>

                    </div>
                    <div className="grid grid-cols-3 gap-4 ">

                        <Link to="#"> <img src="../images/product-3.jpg" alt="" /></Link>
                        <div className="col-span-2">
                            <p>
                                <Link to="#">Cras neque metus</Link>
                            </p>
                            <p className="text-sm">
                                $60.00
                            </p>
                        </div>

                    </div>

                </div>
            </div>

            <h1 className="text-xl font-bold mt-8 mb-2">PRODUCT TAGS</h1>
            <hr />
            <div className="">

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

export default OnLeft
