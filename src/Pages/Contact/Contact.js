import React from 'react';
import Earn from '../HomePage/Earn/Earn';
import { FaFacebook, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='lg:w-[1440px] mx-auto'>
            <h1 className='text-2xl md:text-6xl font-bold text-center my-10'>Contact</h1>
            <div className='md:flex justify-around items-center'>
                <div className='lg:w-1/2'>
                    <div>
                        <p className='text-xl text-black'>Adress:</p>
                        <p className='text-xl'>Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                    </div>
                    <div className='mt-5'>
                        <p className='text-xl text-black'>Mobile:</p>
                        <p className='text-xl'>000-123-456-7890</p>
                    </div>
                    <div className='mt-5'>
                        <p className='text-xl text-black'>💌Email:</p>
                        <p className='text-xl'>nc.example@example.com</p>
                    </div>
                    <div className='mt-5'>
                        <p className='text-xl text-black'>🌏 SOCIALS</p>
                        <div className='flex'>
                            <p className='text-xl ml-2'><FaFacebook></FaFacebook></p>
                            <p className='text-xl ml-2'><FaTwitter></FaTwitter></p>
                            <p className='text-xl ml-2'><FaYoutube></FaYoutube></p>
                            <p className='text-xl ml-2'> <FaTelegram></FaTelegram></p>
                        </div>
                    </div>
                </div>
                <div className='p-5 lg:w-1/2'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name:</span>
                        </label>
                        <input type="text" placeholder="Example Doe" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email:</span>
                        </label>
                        <input type="email" placeholder="Example@gmail.com" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Message:</span>
                        </label>
                        <input type="text" className="textarea textarea-bordered h-24 " />
                    </div>
                </div>
            </div>
            <Earn></Earn>
        </div>
    );
};

export default Contact;