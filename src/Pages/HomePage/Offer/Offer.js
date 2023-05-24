import React from 'react';
import offer from '../../../assets/promo3.webp'

const Offer = () => {
    return (
        <div className='lg:w-[1440px] mx-auto lg:my-20'>
            <div className="md:flex justify-between items-center bg-[url('/src/assets/BackgroundLine.fbaf1dad.svg')] border rounded-2xl ">
                <div className='w-1/2 p-5'>
                    <h1 className='text-2xl lg:text-6xl font-bold'>Don't miss out on <br /> special offers 🥇</h1>
                    <p className='text-gray-400 mt-5'>Register to receive news about the latest, savings combos, discount codes...</p>
                    <p className='text-blue-500'>1. Savings combos</p>
                    <p className='text-orange-500'>2. Freeship</p>
                    <p className='text-purple-500'>3. Premium magazines</p>
                    <div className='mt-5'>
                        <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" />
                        <button className='btn btn-success'>Submit</button>
                    </div>
                </div>
                <div>
                    <img src={offer} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Offer;