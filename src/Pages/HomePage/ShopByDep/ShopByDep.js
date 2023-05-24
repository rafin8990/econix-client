import React from 'react';
import shop1 from '../../../assets/sports-kits.webp'
import shop2 from '../../../assets/beauty-product.jpg'
import shop3 from '../../../assets/catsfood.jpg'
import shop4 from '../../../assets/man.avif'
import { Link } from 'react-router-dom';

const ShopByDep = () => {
    return (
        <div>
            <h1 className='text-2xl lg:text-4xl text-center font-semibold my-10'>Shop By Department</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'>
                <Link to='/productDetails'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={shop1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Sports Kits</h2>
                            <p className='text-gray=400'>20+ categories</p>
                        </div>
                    </div>
                </Link>
                <Link to='/productDetails'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={shop2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Cats Food</h2>
                            <p className='text-gray=400'>20+ categories</p>
                        </div>
                    </div>
                </Link>
                <Link to='/productDetails'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={shop3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Travel kits</h2>
                            <p className='text-gray=400'>20+ categories</p>
                        </div>
                    </div>
                </Link>
                <Link to='/productDetails'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={shop4} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">FOOTBALL</h2>
                            <p className='text-gray=400'>20+ categories</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ShopByDep;