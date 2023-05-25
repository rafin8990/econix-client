import React from 'react';
import cartpic from '../../assets/beauty-product.jpg'
import { Link } from 'react-router-dom';

const CartModal = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <h1 className='text-xl text-gray-500'>Shopping Cart</h1>
                        <div>
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
                                <div className='flex justify-between mt-5'>
                                    <p>Subtotal:</p>
                                    <p>$222</p>
                                </div>
                                <p className='text-gray-500'>Shipping and taxes calculated at checkout.</p>
                                <Link to='/checkout'>
                                    <button className='mt-5 text-xl btn w-full'>Check Out</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;