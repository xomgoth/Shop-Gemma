import React from 'react';

import {
    Link
} from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <div className="bg-gray-100 text-center">
                <h1 className="text-3xl text-bold pt-10 ">Contact</h1>

                <p className="pb-16"> <Link to="/"> Home</Link> /
                <span className="text-yellow-500"><Link to="/contact"> Contact Us</Link></span>
                </p>

            </div>

            <div className="container mx-auto mt-20">
                <div className="grid grid-cols-2 gap-10">

                    <div className="col-span-1">
                        <h1 className="text-2xl font-bold mb-5">TELL US YOUR PROJECT</h1>
                        <div className="grid grid-cols-2 gap-5 ">
                            <div className="col-span-1 ">
                                <input type="text" placeholder="Name *" className="bg-gray-100 border border-black-900 rounded w-full py-2 italic pl-5" value="" />
                                <input type="text" placeholder="Email *" className=" bg-gray-100 border border-black-900 rounded w-full  py-2 mt-10 italic pl-5" value="" />
                            </div>
                            <div className="col-span-1 ">
                                <input type="text" placeholder="Phone *" className=" bg-gray-100 border border-black-900 rounded w-full py-2 italic pl-5" value="" />
                                <input type="text" placeholder="Subject *" className=" bg-gray-100 border border-black-900 rounded w-full  py-2 mt-10 italic pl-5" value="" />
                            </div>

                        </div>
                        <textarea name="" id="" rows="7" className="bg-gray-100 border border-black-900 rounded w-full  py-2 mt-10 italic pl-5" placeholder="Message *">

                        </textarea>

                        <button className=" mt-4 bg-yellow-600 px-8 py-2 rounded-md ">
                            SEND MESSAGE
                        </button>
                    </div>

                    <div className="col-span-1">
                        <h1 className="text-2xl font-bold mb-3">CONTACT US</h1>
                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
                        littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.
                        </p>
                        <div className="flex mt-10 mb-5">
                            <img src="images/home.png" alt="" className="h-5 mr-2" /><p>169-C, Technohub, Dubai.</p>
                        </div>
                        <hr />
                        <div className="flex my-5">
                            <img src="images/phone.png" alt="" className="h-5 mr-2" /><p>+880123456789</p>
                        </div>
                        <hr />
                        <div className="flex mt-5">
                            <img src="images/email.png" alt="" className="h-5 mr-2" /><p>example@gmail.com</p>
                        </div>
                        <p className="text-xl font-semibold mt-5">Working hours</p>
                        <span>Monday – Saturday: 08AM – 22PM</span>
                    </div>

                </div>


            </div>
            <div className="mt-20">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d238463.36753689905!2d105.752328!3d20.952912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134532bef4bcdb7%3A0xbcc7a679fcba07f6!2zSMOgIMSQw7RuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1606108789433!5m2!1svi!2sus"
                    width="100%" height="600px" frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
        </div>
    )
}

export default Contact
