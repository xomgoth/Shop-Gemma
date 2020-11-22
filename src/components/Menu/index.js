import React from 'react'
import {
    BrowserRouter as Router,

    Link,
} from "react-router-dom";
export const Menu = () => {
    return (
        <div className="container mx-auto">
            <ul className="flex justify-center my-5">

                <li className="mr-10 hover:text-teal-500">
                    <Link to="/">HOME</Link>
                </li>


                <li className="mx-10 hover:text-teal-500">
                    <Link to="/shop">PRODUCT</Link>
                </li>


                <li className="mx-10 hover:text-teal-500">
                    <Link to="/blogs">BLOG</Link>
                </li>


                <li className="hover:text-teal-500">
                    <Link to="/contact">CONTACT US</Link>
                </li>

            </ul>

        </div>
    )
}
