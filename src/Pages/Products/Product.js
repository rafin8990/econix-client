import React, { useEffect, useState } from 'react';
import GetProducts from './GetProducts';
import CartModal from '../CartModal/CartModal';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])
    return (
        <div className=''>
            <CartModal></CartModal>
            <div className='lg:w-[1440px] mx-auto md:w-1/2 md:my-20'>
                <h1 className='text-2xl lg:text-4xl font-bold'>Men And Women Collection</h1>
                <p className='text-gray-500 text-xl'>We not only help you design exceptional products, but also make it easy for you to share your designs with more like-minded people.</p>
            </div>
            <div className='divider'></div>
            <p className='text-2xl p-5 border border-gray-400 rounded-full w-60 my-2'>Short Order</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10'>
                {
                    products.map(product => <GetProducts
                        key={product._id}
                        product={product}
                    ></GetProducts>)
                }
            </div>
        </div>
    );
};

export default Product;