import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Header.css'
import { Autoplay, Navigation, Pagination } from 'swiper';
import slider1 from '../../../assets/hero-right.webp'
import slider2 from '../../../assets/hero-right-2.webp'
import slider3 from '../../../assets/hero-right-3.webp'



const Header = () => {
    return (
        <div className=" bg-[url('/src/assets/Moon.bf27dc577d1acccaba48430d353dbbe0.svg')]">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex justify-around items-center bg-[url('/src/assets/Moon.bf27dc577d1acccaba48430d353dbbe0.svg')] ">
                        <div>
                            <h3 className='text-xl text-gray-400'>In this season, find the best 🔥</h3>
                            <h1 className='text-2xl md:text-7xl font-extrabold font-serif my-4 md:my-10'>Exclusive collection <br /> for everyone</h1>
                            <button className='btn bg-blue-800 text-white md:px-10 py-5 mb-10'>Explore Now</button>
                        </div>
                        <div className='w-1/2'>
                            <img src={slider1} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-around items-center bg-[url('/src/assets/Moon.bf27dc577d1acccaba48430d353dbbe0.svg')] ">
                        <div>
                            <h3 className='text-xl text-gray-400'>In this season, find the best 🔥</h3>
                            <h1 className='text-2xl md:text-7xl font-extrabold font-serif my-4 md:my-10'>Exclusive collection <br /> for everyone</h1>
                            <button className='btn bg-blue-800 text-white md:px-10 py-5 mb-10'>Explore Now</button>
                        </div>
                        <div className='w-1/3'>
                            <img src={slider2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-around items-center bg-[url('/src/assets/Moon.bf27dc577d1acccaba48430d353dbbe0.svg')] ">
                        <div>
                            <h3 className='text-xl text-gray-400'>In this season, find the best 🔥</h3>
                            <h1 className='text-2xl md:text-7xl font-extrabold font-serif my-4 md:my-10'>Exclusive collection <br /> for everyone</h1>
                            <button className='btn bg-blue-800 text-white md:px-10 py-5 mb-10'>Explore Now</button>
                        </div>
                        <div className='w-1/3'>
                            <img src={slider3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;