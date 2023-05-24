import React from 'react';
import discover1 from '../../../assets/Basketball.png'
import discover2 from '../../../assets/perfume.png'
import discover3 from '../../../assets/dog.png'
import { Link } from 'react-router-dom';


const Discover = () => {
    return (
        <div className='mt-10 mx-5 lg:mx-10'>
            <h1 className='text-2xl md:text-4xl font-semibold text-center my-10'>Discover More . <span className=' text-gray-400'>Good things are waiting for you</span></h1>

            <div className='my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='flex justify-between items-center bg-green-100 p-10 rounded-lg'>
                    <div>
                        <p className='text-xl text-gray-400'>Explore New Arival</p>
                        <h2 className='text-2xl font-bold'>Shop the Letest From The Top Brands</h2>
                        <Link><button className='btn btn-outline border-none bg-white text-black my-3'>Show More</button></Link>
                    </div>
                    <div className='w-1/2'>
                        <img src={discover1} alt="" />
                    </div>
                </div>
                <div className='flex justify-between items-center bg-purple-100 p-10 rounded-lg'>
                    <div>
                        <p className='text-xl text-gray-400'>Explore New Arival</p>
                        <h2 className='text-2xl font-bold'>Give the Gift Of Choice</h2>
                        <Link><button className='btn btn-outline border-none bg-white text-black my-3'>Show More</button></Link>
                    </div>
                    <div className='w-1/2'>
                        <img src={discover3} alt="" />
                    </div>
                </div>
                <div className='flex justify-between items-center bg-yellow-100 p-10 rounded-lg'>
                    <div>
                        <p className='text-xl text-gray-400'>Explore New Arival</p>
                        <h2 className='text-2xl font-bold'>Up to 80% off retrai</h2>
                        <Link><button className='btn btn-outline border-none bg-white text-black my-3'>Show More</button></Link>
                    </div>
                    <div className='w-1/2'>
                        <img src={discover2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;