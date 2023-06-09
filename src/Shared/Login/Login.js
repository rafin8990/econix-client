import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1 className='text-2xl md:text-6xl font-bold text-center'>Login</h1>
            <div className='flex justify-center mt-10'>
                <div >
                    <div className='btn bg-green-100 hover:bg-green-100 border-none text-black w-96'>
                        <p className='mr-2'><FaFacebook></FaFacebook></p> <button>Continue With FaceBook</button>
                    </div>
                    <br />
                    <div className='btn bg-green-100 hover:bg-green-100 border-none text-black w-96 mt-5'>
                        <p className='mr-2'><FaGoogle></FaGoogle></p> <button>Continue With Google</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-10'>
                <form className='w-96'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-2xl">Email:</span>
                        </label>
                        <input type="email" placeholder="Example@gmail.com" className="input input-bordered w-full text-xl " />
                    </div>
                    <div className="form-control w-full mt-5 ">
                        <label className="label">
                            <span className="label-text text-2xl">Password:</span>
                        </label>
                        <input type="password" placeholder="Enter Your Password" className="input input-bordered w-full text-xl " />
                        <label className='mt-3'>
                            <p>New To Econix? <Link to='/register' className='text-green-500'>Please Register First</Link></p>
                        </label>
                    </div>
                    <button className='btn w-full rounded-2xl mt-10'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;