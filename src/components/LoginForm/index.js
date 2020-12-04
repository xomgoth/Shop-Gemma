import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
    const { Login, error } = props;
    const [details, setDetails] = useState({

        email: "",
        password: ""
    });

    const handleSubmit = (e) => {

        e.preventDefault();
        Login(details);

    }

    return (
        <div className="login mx-auto my-24">

            <div className="mt-20 ">
                <img src="images/lo.png" alt="" className="mx-auto mb-8  " />

            </div>

            <form action="" onSubmit={handleSubmit} className=" rounded border-blue-500 border-opacity-25 border-t-2 shadow-2xl ">

                <div className=" mb-5 mt-10">
                    <label htmlFor="email" className="ml-5"> Email <span className="text-red-600">*</span></label> <br />
                    <input type="email" name="email" id="email" className="item border h-10 mx-5 rounded italic pl-3"
                        required
                        placeholder="email..."
                        onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email}
                    />
                </div>
                <div >
                    <label htmlFor="password" className="ml-5"> Password <span className="text-red-600">*</span> </label> <br />
                    <input type="password" name="password" id="password" className="item border h-10 mx-5 rounded italic pl-3"

                        required
                        placeholder="password..."
                        onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}
                    />
                </div>
                <input type="submit" value="LOGIN" className="my-8 ml-5 px-3 h-10 rounded font-bold text-white item  bg-blue-500 " />
            </form>
            <Link>
                <h1 className="text-center mt-5 text-sm">Forgot your password ?</h1>
            </Link>
        </div>
    )
}

export default LoginForm
