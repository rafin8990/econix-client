import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import { FaStar } from 'react-icons/fa'
import user from '../../assets/Blog/user.jpeg'
import 'react-accessible-accordion/dist/fancy-example.css';
import details1 from '../../assets/product details/detail1.webp'
import details2 from '../../assets/product details/detail2.webp'
import details3 from '../../assets/product details/detail3.webp'
import Special from '../HomePage/Special/Special';
import CartModal from '../CartModal/CartModal';

const ProductDetails = () => {
    const handleAdd=()=>{
        alert("Product Added To the Cart Successfully")
    }
    return (
        <div className='lg:w-[1440px] mx-auto mt-5'>
            <CartModal></CartModal>
            <div className='md:flex justify-around'>
                <div className='md:w-1/2'>
                    <div>
                        <img src={details1} alt="" />
                    </div>
                    <div className='flex w-1/2 mt-5'>
                        <div className='mr-3'><img src={details2} alt="" /></div>
                        <div className='ml-3'><img src={details3} alt="" /></div>
                    </div>
                </div>
                <div className='ml-5'>
                    <h1 className='text-4xl font-bold'>Heavy Weight Shoes</h1>
                    <div className='flex items-center'>
                        <p className='px-3 py-2 border border-green-500 text-green-500 rounded-2xl w-20 font-bold'>$121 </p>
                        <p className='ml-5'>| 4.9 Ratings. 192 Views New In</p>
                    </div>
                    <button onClick={handleAdd} className='btn px-10 rounded-2xl mt-10'>Add To Cart</button>

                    <div className='mt-5'>
                        <Accordion allowZeroExpanded>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Description
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Fabric + Care
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        <li>Made from a sheer Belgian power micromesh.</li>
                                        <li>74% Polyamide (Nylon) 26% Elastane (Spandex)</li>
                                        <li>Adjustable hook & eye closure and straps</li>
                                        <li>Hand wash in cold water, dry flat</li>
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How Its Fits
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        FAQ
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        <li>All full-priced, unworn items, with tags attached and in their original packaging are eligible for return or exchange within 30 days of placing your order.</li>
                                        <li>Please note, packs must be returned in full. We do not accept partial returns of packs.</li>
                                        <li>Want to know our full returns policies? Here you go.</li>
                                        <li>Want more info about shipping, materials or care instructions? Here!</li>
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className='mt-5 grid grid-cols-2 gap-5'>
                        <div className=' bg-red-100 rounded-2xl p-5'>
                            <h1 className='text-xl text-black'>Free Shipping</h1>
                            <p>On orders over $50.00</p>
                        </div>
                        <div className=' bg-blue-100 rounded-2xl p-5'>
                            <h1 className='text-xl text-black'>Very easy to return</h1>
                            <p>Just phone number.</p>
                        </div>
                        <div className=' bg-green-100 rounded-2xl p-5'>
                            <h1 className='text-xl text-black'>Nationwide Delivery</h1>
                            <p>Fast delivery nationwide.</p>
                        </div>
                        <div className=' bg-indigo-100 rounded-2xl p-5'>
                            <h1 className='text-xl text-black'>Refunds policy</h1>
                            <p>60 days return for any reason</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h1 className='text-2xl font-bold'>Product Details :</h1>
                <p className='text-gray-500 text-xl mt-5'>The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction.</p>
                <br />
                <p className='text-gray-500 text-xl'>The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.</p>
                <br />
                <p className='text-gray-500 text-xl'>
                    <li>Regular fit, mid-weight t-shirt</li>
                    <li>Natural color, 100% premium combed organic cotton</li>
                    <li>Quality cotton grown without the use of herbicides or pesticides - GOTS certified</li>
                    <li>Soft touch water based printed in the USA</li>
                </p>
            </div>
            <h1 className='mt-5 flex items-center text-2xl font-bold'> <FaStar></FaStar> 4,87 · 142 Reviews</h1>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='bg-gray-100 rounded-2xl p-5'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <div>
                                <img className=' w-16 h-16 rounded-full' src={user} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl'> Cody Fisher</h1>
                                <p className='text-gray-500'>May 20, 2021</p>
                            </div>
                        </div>
                        <div className='flex text-yellow-500 text-2xl'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl text-gray-500'>Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.</p>
                    </div>
                </div>
                <div className='bg-gray-100 rounded-2xl p-5'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <div>
                                <img className=' w-16 h-16 rounded-full' src={user} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl'> Cody Fisher</h1>
                                <p className='text-gray-500'>May 20, 2021</p>
                            </div>
                        </div>
                        <div className='flex text-yellow-500 text-2xl'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl text-gray-500'>Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.</p>
                    </div>
                </div>
                <div className='bg-gray-100 rounded-2xl p-5'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <div>
                                <img className=' w-16 h-16 rounded-full' src={user} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl'> Cody Fisher</h1>
                                <p className='text-gray-500'>May 20, 2021</p>
                            </div>
                        </div>
                        <div className='flex text-yellow-500 text-2xl'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl text-gray-500'>Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.</p>
                    </div>
                </div>
                <div className='bg-gray-100 rounded-2xl p-5'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <div>
                                <img className=' w-16 h-16 rounded-full' src={user} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl'> Cody Fisher</h1>
                                <p className='text-gray-500'>May 20, 2021</p>
                            </div>
                        </div>
                        <div className='flex text-yellow-500 text-2xl'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl text-gray-500'>Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.</p>
                    </div>
                </div>
                <div className='bg-gray-100 rounded-2xl p-5'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <div>
                                <img className=' w-16 h-16 rounded-full' src={user} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl'> Cody Fisher</h1>
                                <p className='text-gray-500'>May 20, 2021</p>
                            </div>
                        </div>
                        <div className='flex text-yellow-500 text-2xl'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl text-gray-500'>Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.</p>
                    </div>
                </div>
                <div className='bg-gray-100 rounded-2xl p-5'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <div>
                                <img className=' w-16 h-16 rounded-full' src={user} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl'> Cody Fisher</h1>
                                <p className='text-gray-500'>May 20, 2021</p>
                            </div>
                        </div>
                        <div className='flex text-yellow-500 text-2xl'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl text-gray-500'>Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.</p>
                    </div>
                </div>
            </div>
            <Special></Special>
        </div>
    );
};

export default ProductDetails;