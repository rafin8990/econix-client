import React from 'react';
import details1 from '../../assets/product details/detail1.webp'
import details2 from '../../assets/product details/detail2.webp'
import details3 from '../../assets/product details/detail3.webp'

const ProductDetails = () => {
    return (
        <div>
            <div>
                <div>
                    <img src={details1} alt="" />
                </div>
                <div className='flex'>
                    <div className='mr-3'><img src={details2} alt="" /></div>
                    <div className='ml-3'><img src={details3} alt="" /></div>
                </div>
            </div>
            <div>
                <h1 className='text-4xl font-bold'>Heavy Weight Shoes</h1>
                <p className='px-3 py-2 border border-green-500 text-green-500 rounded-2xl w-20 font-bold'>$121 </p>
        
            </div>
        </div>
    );
};

export default ProductDetails;