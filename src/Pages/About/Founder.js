import React from 'react';
import founder1 from '../../assets/About/founder1.webp'
import founder2 from '../../assets/About/founder2.webp'
import founder3 from '../../assets/About/founder3.webp'
import founder4 from '../../assets/About/founder4.webp'

const Founder = () => {
    return (
        <div className='lg:mt-20'>
            <h1 className='text-4xl font-bold'>⛱ Founder</h1>
            <p className='text-xl text-gray-500'>We’re impartial and independent, and every day we create distinctive, world-class programmes and content</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 mt-10'>
                <div>
                    <div>
                        <img className='h-[296px] rounded-xl' src={founder1} alt="" />
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-xl'>Niamh O'Shea</h1>
                        <p className='text-gray-500'>Co-founder and Chief Executive</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img className='h-[296px] rounded-xl' src={founder2} alt="" />
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-xl'>Danien Jame</h1>
                        <p className='text-gray-500'>Co-founder and Chief Executive</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img className='w-[384px] h-[296px]  rounded-xl' src={founder4} alt="" />
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-xl'>Dara Frazier</h1>
                        <p className='text-gray-500'>Co-Founder, Chief Strategy Officer</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img className='w-[384px] h-[296px]  rounded-xl' src={founder3} alt="" />
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-xl'>Orla Dwyer</h1>
                        <p className='text-gray-500'>Co-founder, Chairman</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Founder;