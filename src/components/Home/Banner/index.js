import React from 'react'
import {
    BrowserRouter as Router,

    Link,
} from "react-router-dom";
export const Banner = () => {
    return (
        <div className="grid grid-cols-4  ">
            <div className="col-span-1 overflow-hidden relative  ">

                <Link>
                    <img src="images/slider1.jpg" alt="" className="transform relative duration-500 hover:scale-110 " />
                </Link>

            </div>
            <div className="col-span-1 overflow-hidden relative">

                <Link>
                    <img src="images/slider2.jpg" alt="" className="transform  duration-500 hover:scale-110" />
                </Link>

            </div>

            <div className="col-span-1 overflow-hidden relative">

                <Link>
                    <img src="images/slider3.jpg" alt="" className="transform  duration-500 hover:scale-110" />
                </Link>

            </div>
            <div className="col-span-1 overflow-hidden relative">

                <Link>
                    <img src="images/slider4.jpg" alt="" className="transform  duration-500 hover:scale-110" />
                </Link>

            </div>

        </div>
    )
}
