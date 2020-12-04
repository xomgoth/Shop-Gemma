import React, { useEffect, useState } from 'react'

import {
    BrowserRouter as Router,
    Link,

} from "react-router-dom";
import OnLeft from '../OnLeft';
import OnRight from './OnRight';
const Cate = () => {
    const [cate, setCate] = useState([]);

    const Url = 'http://localhost:1337/categories';
    useEffect(() => {
        fetch(Url)
            .then(response => response.json())
            .then(data => setCate(data))
    }, [])
    return (
        <div>
            <div className="bg-gray-100 text-center">

                <h1 className="text-3xl text-bold pt-10 ">PRODUCT</h1>

                <p className="pb-16"> <Link to="/"> Home</Link> /
                <span className="text-yellow-500"><Link to="/blogs"> Product</Link></span>
                </p>

            </div>
            <div className="grid grid-cols-4 gap-10 mt-10 ">
                <OnLeft cate={cate} />
                <OnRight />
            </div>
        </div>
    )
}

export default Cate
