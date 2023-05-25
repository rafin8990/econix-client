import React from 'react';
import cartpic from '../../assets/beauty-product.jpg'
import CartModal from '../CartModal/CartModal';

const CheckOut = () => {
    return (
        <div className='text-center'>
            <CartModal></CartModal>
            <h1 className='text-4xl font-bold'>Check Out</h1>
            <p>Homepage / Product / Check Out</p>

            <div className='md:flex justify-center mt-5'>
                <div>
                    <h1 className='text-xl text-center my-5'>Contact Info</h1>
                    <form className='p-5 border shadow-md my-5 flex justify-center'>
                        <div>
                            <div className='flex'>
                                <div>
                                    <p>First Name</p>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </div>
                                <div className='ml-5'>
                                    <p>Last Name</p>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className='flex mt-5'>
                                <div>
                                    <p>Adress</p>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </div>
                                <div className='ml-5'>
                                    <p>Address Code</p>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className='flex mt-5'>
                                <div>
                                    <p>City </p>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </div>
                                <div className='ml-5'>
                                    <p>Country</p>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className='flex mt-5'>
                                <div>
                                    <p>State/Province </p>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </div>
                                <div className='ml-5'>
                                    <p>Postal code</p>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className='mt-5 flex'>
                                <p>Address Type:</p>
                                <select className='ml-5' name="" id="">
                                    <option value="Home">Home</option>
                                    <option value="Office">Office</option>
                                </select>
                            </div>

                            <button className='btn btn-success mt-5 w-full'>Confirm And Go to Payment</button>
                        </div>

                    </form>
                </div>
                <div className='divider divider-horizontal'></div>
                <div className='ml-5'>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center'>
                            <div>
                                <img className=' w-32 rounded-2xl' src={cartpic} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-md'>Rey Nylon Backpack</h1>
                                <p>Natural | Beauty</p>
                                <p>QTY: 01</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-green-500 border border-green-500 p-3 w-16 rounded-xl'>$74</p>
                            <p className='text-blue-600'>remove</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center'>
                            <div>
                                <img className=' w-32 rounded-2xl' src={cartpic} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-md'>Rey Nylon Backpack</h1>
                                <p>Natural | Beauty</p>
                                <p>QTY: 01</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-green-500 border border-green-500 p-3 w-16 rounded-xl'>$74</p>
                            <p className='text-blue-600'>remove</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center'>
                            <div>
                                <img className=' w-32 rounded-2xl' src={cartpic} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-md'>Rey Nylon Backpack</h1>
                                <p>Natural | Beauty</p>
                                <p>QTY: 01</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-green-500 border border-green-500 p-3 w-16 rounded-xl'>$74</p>
                            <p className='text-blue-600'>remove</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center'>
                            <div>
                                <img className=' w-32 rounded-2xl' src={cartpic} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-md'>Rey Nylon Backpack</h1>
                                <p>Natural | Beauty</p>
                                <p>QTY: 01</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-green-500 border border-green-500 p-3 w-16 rounded-xl'>$74</p>
                            <p className='text-blue-600'>remove</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center'>
                            <div>
                                <img className=' w-32 rounded-2xl' src={cartpic} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-md'>Rey Nylon Backpack</h1>
                                <p>Natural | Beauty</p>
                                <p>QTY: 01</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-green-500 border border-green-500 p-3 w-16 rounded-xl'>$74</p>
                            <p className='text-blue-600'>remove</p>
                        </div>
                    </div>
                    <div>
                        Discount Code: <br />
                        <input className='input input-bordered max-w-sm' type="text" />
                        <div>
                            <div className='flex justify-between'>
                                <p className='text-lg'>SubTotal:</p>
                                <p>$222</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-lg'>Shipping estimate:</p>
                                <p>$5.00</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-lg'>Tax estimate:</p>
                                <p>$24.90</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-lg'>Order total:</p>
                                <p>$276.00</p>
                            </div>
                            <div className=''>
                                <button className='btn w-full my-3'>Confirm Order</button>
                            </div>
                            <p className='text-center'>Or</p>
                            <div className=''>
                                <button className='btn bg-red-500 hover:bg-red-500 border-none w-full my-3'>Delete Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;