import React from 'react';
import special from '../../../assets/promo2.webp'

const Special = () => {
    return (
        <div className="lg:w-[1440px] mx-auto bg-[url('/src/assets/Moon.d5aa06ae.svg')] md:flex justify-between items-center shadow-lg p-5 mt-20">
            <div>
                <img src={special} alt="" />
            </div>
            <div>
                <p className='font-bold text-xl'>Econix</p>
                <h1 className='text-2xl lg:text-7xl font-bold'>Special offer<br />in kids products</h1>
                <p className='text-gray-400'>Fashion is a form of self-expression and autonomy at a particular period and place.</p>
                <button className='btn rounded-2xl mt-3'>Discover More</button>
            </div>
        </div>
    );
};

export default Special;