import React from 'react';

const Fact = () => {
    return (
        <div className='lg:mt-20'>
            <h1 className='text-4xl font-bold'>🚀 Fast Facts</h1>
            <p className='text-xl text-gray-500'>We’re impartial and independent, and every day we create distinctive, world-class programmes and content</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                <div className=' bg-green-50 p-5  rounded-xl'>
                    <h1 className='text-4xl font-bold mb-4'>10 Million</h1>
                    <p>Articles have been public around the world (as of Sept. 30, 2021)</p>
                </div>
                <div className=' bg-green-50 p-5  rounded-xl'>
                    <h1 className='text-4xl font-bold mb-4'>100,000</h1>
                    <p>Registered users account (as of Sept. 30, 2021)</p>
                </div>
                <div className=' bg-green-50 p-5  rounded-xl'>
                    <h1 className='text-4xl font-bold mb-4'>220+</h1>
                    <p>220+</p>
                </div>
            </div>
        </div>
    );
};

export default Fact;