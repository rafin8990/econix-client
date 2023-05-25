import React from 'react';
import aboutpic from '../../assets/About/hero-right1.webp'
import Founder from './Founder';
import Offer from '../HomePage/Offer/Offer';
import Fact from './Fact';
import CartModal from '../CartModal/CartModal';

const About = () => {
    return (
        <div className='lg:w-[1440px] mx-auto'>
            <CartModal></CartModal>
            <div className='md:flex items-center'>
                <div className='md:w-1/2'>
                    <h1 className='text-4xl font-bold'>👋 About Us</h1>
                    <p className='text-xl'>We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world.</p>
                </div>
                <div className='w-1/2'>
                    <img src={aboutpic} alt="" />
                </div>
            </div>
            <Founder></Founder>
            <Fact></Fact>
            <Offer></Offer>
        </div>
    );
};

export default About;