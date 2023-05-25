import React from 'react';

const AddProducts = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl md:text-6xl font-bold text-center my-5'>Add Products</h1>

                <div className='flex justify-center my-10'>
                    <form className='w-96'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-2xl">Product Name:</span>
                            </label>
                            <input type="Text" placeholder="Enter Customer Name" className="input input-bordered w-full text-xl " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-2xl">Product Price:</span>
                            </label>
                            <input type="Text" placeholder="Enter price" className="input input-bordered w-full text-xl " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-2xl">Mobile Number:</span>
                            </label>
                            <input type="Text" placeholder="Enter mobile" className="input input-bordered w-full text-xl " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-2xl">Product Details:</span>
                            </label>
                            <textarea className="textarea textarea-bordered text-2xl" placeholder="Enter Details"></textarea>
                            
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-2xl">Product Image:</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-2xl">Customer Email:</span>
                            </label>
                            <input type="email" placeholder="Example@gmail.com" className="input input-bordered w-full text-xl " />
                        </div>
                        <button className='btn w-full rounded-2xl mt-10'>Add Products</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;