import React from 'react';


function Header({ Logout, name, img }) {
    return (
        <div className="container mx-auto">
            <div className=" grid grid-cols-3 gap-5">
                <div className="col-span-1 ">
                    <p className="flex my-8">
                        <img src="images/en.png" alt="" className="h-4 mt-1" /><a href="#"><span className="ml-2">ENGLISH </span></a>
                        <a href="#"><span className="ml-10">$ USD</span></a>
                    </p>
                </div>
                <div className="col-span-1  ">
                    <a href="#"> <img src="../images/lo.png" alt="" className="my-8 mx-auto" /></a>

                </div>
                <div className="col-span-1 flex justify-end my-8">
                    <h1 className="text-blue-500 my-1">{name}</h1>
                    <img src={img} alt="" className=" h-8 w-8 mr-5 rounded-full ml-3 " onClick={Logout} />
                    {/* <a href="#">
                        <img src="../images/user.jpg" alt="" className="w-8 h-8 mr-5"  />
                    </a> */}
                    <a href="#">
                        <img src="../images/cart.jpg" alt="" className="w-8 h-8 mr-5" />
                    </a>
                    <a href="#">
                        <img src="../images/search.jpg" alt="" className="w-8 h-8" />
                    </a>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Header;