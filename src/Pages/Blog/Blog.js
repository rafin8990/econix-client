import React from 'react';
import blogMain from '../../assets/Blog/blogmain.webp'
import blog1 from '../../assets/Blog/blog1.webp'
import blog2 from '../../assets/Blog/blog2.webp'
import blog3 from '../../assets/Blog/blog3.webp'
import ads from '../../assets/Blog/ads.webp'
import user from '../../assets/Blog/user.jpeg'
import Offer from '../HomePage/Offer/Offer';

const Blog = () => {
    return (
        <div className='w-[1440px] mx-auto'>
            <div className='lg:flex mt-10'>
                <div>
                    <div>
                        <img className=' w-96 h-96 rounded-2xl' src={blogMain} alt="" />
                    </div>
                    <div>
                        <h1 className='md:text-2xl'>Adipiscing Bibendum Est Ultricies Integer Quis Auctor Elit Sed Vulputate</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nemo!......</p>
                    </div>
                    <div className='flex items-center'>
                        <img className=' w-16 h-16 rounded-full' src={user} alt="" />
                        <p className='ml-5'>Malaki Chey</p>
                        <p className='text-gray-500 ml-5'>May 20, 2022</p>
                    </div>
                </div>
                <div>
                    <div className='md:flex justify-around items-center mt-5'>
                        <div>
                            <h3 className='md:text-xl'>Tellus Integer Feugiat Scelerisque Varius Morbi Enim Nunc Faucibus A</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorem voluptatibus</p>
                            <div className='flex items-center'>
                                <img className=' w-16 h-16 rounded-full' src={user} alt="" />
                                <p className='ml-5'>Malaki Chey</p>
                                <p className='text-gray-500 ml-5'>May 20, 2022</p>
                            </div>
                        </div>
                        <div>
                            <img className=' w-56 h-56 rounded-2xl' src={blog1} alt="" />
                        </div>
                    </div>
                    <div className='md:flex justify-around items-center mt-5'>
                        <div>
                            <h3 className='md:text-xl'>Tellus Integer Feugiat Scelerisque Varius Morbi Enim Nunc Faucibus A</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorem voluptatibus</p>
                            <div className='flex items-center'>
                                <img className=' w-16 h-16 rounded-full' src={user} alt="" />
                                <p className='ml-5'>Malaki Chey</p>
                                <p className='text-gray-500 ml-5'>May 20, 2022</p>
                            </div>
                        </div>
                        <div>
                            <img className=' w-56 h-56 rounded-2xl' src={blog2} alt="" />
                        </div>
                    </div>
                    <div className='md:flex justify-around items-center mt-5'>
                        <div>
                            <h3 className='md:text-xl'>Tellus Integer Feugiat Scelerisque Varius Morbi Enim Nunc Faucibus A</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorem voluptatibus</p>
                            <div className='flex items-center'>
                                <img className=' w-16 h-16 rounded-full' src={user} alt="" />
                                <p className='ml-5'>Malaki Chey</p>
                                <p className='text-gray-500 ml-5'>May 20, 2022</p>
                            </div>
                        </div>
                        <div>
                            <img className=' w-56 h-56 rounded-2xl' src={blog3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-10 lg:my-20'>
                <img src={ads} alt="" />
            </div>
            <div>
                <h1 className='text-4xl font-bold'>Latest Articles</h1>
                <div>
                    <div>
                        <div className='md:flex justify-around items-center mt-5'>
                            <div>
                                <h3 className='md:text-xl'>Tellus Integer Feugiat Scelerisque Varius Morbi Enim Nunc Faucibus A</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorem voluptatibus</p>
                                <div className='flex items-center'>
                                    <img className=' w-16 h-16 rounded-full' src={user} alt="" />
                                    <p className='ml-5'>Malaki Chey</p>
                                    <p className='text-gray-500 ml-5'>May 20, 2022</p>
                                </div>
                            </div>
                            <div>
                                <img className=' w-56 h-56 rounded-2xl' src={blog1} alt="" />
                            </div>
                        </div>
                        <div className='md:flex justify-around items-center mt-5'>
                            <div>
                                <h3 className='md:text-xl'>Tellus Integer Feugiat Scelerisque Varius Morbi Enim Nunc Faucibus A</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorem voluptatibus</p>
                                <div className='flex items-center'>
                                    <img className=' w-16 h-16 rounded-full' src={user} alt="" />
                                    <p className='ml-5'>Malaki Chey</p>
                                    <p className='text-gray-500 ml-5'>May 20, 2022</p>
                                </div>
                            </div>
                            <div>
                                <img className=' w-56 h-56 rounded-2xl' src={blog2} alt="" />
                            </div>
                        </div>
                        <div className='md:flex justify-around items-center mt-5'>
                            <div>
                                <h3 className='md:text-xl'>Tellus Integer Feugiat Scelerisque Varius Morbi Enim Nunc Faucibus A</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorem voluptatibus</p>
                                <div className='flex items-center'>
                                    <img className=' w-16 h-16 rounded-full' src={user} alt="" />
                                    <p className='ml-5'>Malaki Chey</p>
                                    <p className='text-gray-500 ml-5'>May 20, 2022</p>
                                </div>
                            </div>
                            <div>
                                <img className=' w-56 h-56 rounded-2xl' src={blog3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Offer></Offer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;