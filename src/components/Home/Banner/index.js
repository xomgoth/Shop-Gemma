import React from 'react'

export const Banner = () => {
    return (
        <div className="grid grid-cols-4  ">
            <div className="col-span-1 overflow-hidden  ">
                <a href="#"  >
                    <img src="images/slider1.jpg" alt="" className="transform  duration-500 hover:scale-110" />
                </a>
            </div>
            <div className="col-span-1 overflow-hidden">
                <a href="#">
                    <img src="images/slider2.jpg" alt="" className="transform  duration-500 hover:scale-110" />
                </a>
            </div>
            <div className="col-span-1 overflow-hidden">
                <a href="#">
                    <img src="images/slider3.jpg" alt="" className="transform  duration-500 hover:scale-110" />
                </a>
            </div>
            <div className="col-span-1 overflow-hidden">
                <a href="#">
                    <img src="images/slider4.jpg" alt="" className="transform  duration-500 hover:scale-110" />
                </a>
            </div>
        </div>
    )
}
