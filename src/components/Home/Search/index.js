import React from 'react'

export const Search = () => {
    return (
        <div className="container mt-20 mx-auto bg-gray-100 flex">
            <div className="ml-20 py-20">
                <p className="font-bold text-2xl">
                    JOIN GEMMA NEWSLETTER
                </p>
                <span className=" text-gray-600 text-sm">  Subscribe our newsletter and get discount 30% off</span>
            </div>
            <div className=" py-20 ml-40 text-gray-600 text-sm text-left">
                <input type="text" value="" placeholder="Enter your email address" className=" py-4 px-32 " />
                <button class="bg-teal-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
                    SUBSCRIBE
                </button>
            </div>

        </div>
    )
}
