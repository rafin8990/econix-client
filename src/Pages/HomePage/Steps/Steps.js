import React from 'react';
import step1 from '../../../assets/steps/HIW1img.webp'
import step2 from '../../../assets/steps/HIW2img.webp'
import step3 from '../../../assets/steps/HIW3img.webp'
import step4 from '../../../assets/steps/HIW4img.webp'

const Steps = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-10 my-32'>
            <div className='p-5 border rounded-xl'>
                <img src={step1} alt="" />
                <p className='bg-green-100 w-16 rounded-e-lg'>Step1</p>
                <p className='font-bold'>Filter & Discover</p>
                <p className='text-gray-400'>Smart filtering and suggestions make it easy to find</p>
            </div>
            <div className='p-5 border rounded-xl'>
                <img src={step2} alt="" />
                <p className='bg-green-100 w-16 rounded-e-lg'>Step2</p>
                <p className='font-bold'>Add to bag</p>
                <p className='text-gray-400'>Easily select the correct items and add them to the cart</p>
            </div>
            <div className='p-5 border rounded-xl'>
                <img src={step3} alt="" />
                <p className='bg-green-100 w-16 rounded-e-lg'>Step3</p>
                <p className='font-bold'>Fast shipping</p>
                <p className='text-gray-400'>The carrier will confirm and ship quickly to you</p>
            </div>
            <div className='p-5 border rounded-xl'>
                <img src={step4} alt="" />
                <p className='bg-green-100 w-16 rounded-e-lg'>Step4</p>
                <p className='font-bold'>Enjoy the product</p>
                <p className='text-gray-400'>Have fun and enjoy your 5-star quality products</p>
            </div>
        </div>
    );
};

export default Steps;