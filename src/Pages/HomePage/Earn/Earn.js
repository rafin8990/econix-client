import React from 'react';
import earnpic from '../../../assets/rightLargeImg.webp'

const Earn = () => {
    return (
        <div className='md:flex justify-around items-center'>
            <div className='lg:w-1/2 p-10'>
                <p className='text-xl font-bold'>Econix</p>
                <h1 className='text-2xl lg:text-7xl font-bold'>Earn free money <br /> with Ciseco</h1>
                <p>With Ciseco you will get freeship & savings combo...</p>
                <div className='flex  my-5'>
                    <button className='btn rounded-xl'>Savings Combo</button>
                    <button className='btn btn-outline rounded-xl ml-5'>Savings Combo</button>
                </div>
            </div>
            <div className='p-10'>
                <img src={earnpic} alt="" />
            </div>
        </div>
    );
};

export default Earn;