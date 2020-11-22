import React from 'react'

export const EndFooter = () => {

    return (
        <div className="bg-gray-800 mt-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-2">
                    <div className="col-span-1">
                        <p className="my-5 text-left text-gray-600">
                            Copyright © 2019
                            <a href="#">
                                <span className="text-bold text-gray-200 hover:text-teal-500"> GEMMA</span>
                            </a>
                            . All Rights Reserved
                            </p>
                    </div>
                    <div className="col-span-1">
                        <img src="images/payment.png" alt="" className="my-5 float-right" />
                    </div>
                </div>
            </div>
        </div>
    )
}
