import React from 'react';
import { FcRating } from "react-icons/fc";
import product1 from '../../../assets/sport-2.webp'
import product2 from '../../../assets/sport-6.webp'
import product3 from '../../../assets/bag.webp'
import { Link } from 'react-router-dom';

const Arrival = () => {
    return (
        <div className=' border rounded-2xl mx-2 lg:mx-10 lg:p-5 bg-gray-50'>
            <h1 className='text-2xl md:text-4xl font-semibold text-center my-10'>New Arrivals. <span className=' text-gray-400'>REY backpacks & bags</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={product1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Jump Rope Kids</h2>
                        <p className='text-gray=400'>classic</p>
                        <div className='flex justify-between'>
                            <p className='w-10 p-2 border border-green-500 text-green-500 text-center text-xl'>$45</p>
                            <p className='text-2xl text-gray-400 flex items-center'><FcRating></FcRating> 4.5(98 reviews)</p>
                        </div>
                        <div className="card-actions">
                        <Link to='/productsDetails'><button className="btn bg-green-100 hover:bg-green-100 text-black hover:text-black border-none w-full ">View Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={product2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Manhatten Toy</h2>
                        <p className='text-gray=400'>classic</p>
                        <div className='flex justify-between'>
                            <p className='w-10 p-2 border border-green-500 text-green-500 text-center text-xl'>$45</p>
                            <p className='text-2xl text-gray-400 flex items-center'><FcRating></FcRating> 4.5(98 reviews)</p>
                        </div>
                        <div className="card-actions">
                        <Link to='/productsDetails'><button className="btn bg-green-100 hover:bg-green-100 text-black hover:text-black border-none w-full ">View Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={product3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">wool Cashmare Jacket</h2>
                        <p className='text-gray=400'>classic</p>
                        <div className='flex justify-between'>
                            <p className='w-10 p-2 border border-green-500 text-green-500 text-center text-xl'>$45</p>
                            <p className='text-2xl text-gray-400 flex items-center'><FcRating></FcRating> 4.5(98 reviews)</p>
                        </div>
                        <div className="card-actions">
                        <Link to='/productsDetails'><button className="btn bg-green-100 hover:bg-green-100 text-black hover:text-black border-none w-full ">View Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={product1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Jump Rope Kids</h2>
                        <p className='text-gray=400'>classic</p>
                        <div className='flex justify-between'>
                            <p className='w-10 p-2 border border-green-500 text-green-500 text-center text-xl'>$45</p>
                            <p className='text-2xl text-gray-400 flex items-center'><FcRating></FcRating> 4.5(98 reviews)</p>
                        </div>
                        <div className="card-actions">
                        <Link to='/productsDetails'><button className="btn bg-green-100 hover:bg-green-100 text-black hover:text-black border-none w-full ">View Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={product2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Manhatten Toy</h2>
                        <p className='text-gray=400'>classic</p>
                        <div className='flex justify-between'>
                            <p className='w-10 p-2 border border-green-500 text-green-500 text-center text-xl'>$45</p>
                            <p className='text-2xl text-gray-400 flex items-center'><FcRating></FcRating> 4.5(98 reviews)</p>
                        </div>
                        <div className="card-actions">
                        <Link to='/productsDetails'><button className="btn bg-green-100 hover:bg-green-100 text-black hover:text-black border-none w-full ">View Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={product3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">wool Cashmare Jacket</h2>
                        <p className='text-gray=400'>classic</p>
                        <div className='flex justify-between'>
                            <p className='w-10 p-2 border border-green-500 text-green-500 text-center text-xl'>$45</p>
                            <p className='text-2xl text-gray-400 flex items-center'><FcRating></FcRating> 4.5(98 reviews)</p>
                        </div>
                        <div className="card-actions">
                            <Link to='/productsDetails'><button className="btn bg-green-100 hover:bg-green-100 text-black hover:text-black border-none w-full ">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-10'>
                <Link to='/product'> <button className='btn btn-outline btn-success'>Shop More </button></Link>
            </div>
        </div>
    );
};

export default Arrival;