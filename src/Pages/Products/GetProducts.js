import React from 'react';
import { FcRating } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const GetProducts = ({ product }) => {
    const { img, name, price, ratings, } = product;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-gray=400'>classic</p>
                    <div className='flex justify-between'>
                        <p className='w-10 p-2 border border-green-500 text-green-500 text-center text-xl'>${price}</p>
                        <p className='text-2xl text-gray-400 flex items-center'><FcRating></FcRating> {ratings}(98 reviews)</p>
                    </div>
                    <div className="card-actions">
                        <Link to='/productsDetails'>
                            <button className="btn bg-green-100 hover:bg-green-100 text-black hover:text-black border-none w-full ">View details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetProducts;