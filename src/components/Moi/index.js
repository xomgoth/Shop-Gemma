import React from 'react'
import {
    BrowserRouter as Router,
    Link,

} from "react-router-dom";
import Phai from './Phai';
import Trai from './Trai';
const Moi = () => {
    return (
        <div>
            <div className="bg-gray-100 text-center">

                <h1 className="text-3xl text-bold pt-10 ">PRODUCT</h1>

                <p className="pb-16"> <Link to="/"> Home</Link> /
                <span className=""><Link to="/blogs"> Product </Link></span>/
                    <span className="text-yellow-500"><Link to="#"> Detail Product</Link></span>
                </p>

            </div>

            <div className="grid grid-cols-4 gap-10 mt-20 ">

                <Trai />
                <Phai />
            </div>
            <hr className="mt-10" />

        </div>
    )
}

export default Moi
