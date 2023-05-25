import React from 'react';

const AddCustomer = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl md:text-6xl font-bold text-center'>Add Customer</h1>

                <div className='flex justify-center my-10'>
                    <form className='w-96'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-2xl">Customer Name:</span>
                            </label>
                            <input type="Text" placeholder="Enter Customer Name" className="input input-bordered w-full text-xl " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-2xl">Customer Type:</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option selected>Normal</option>
                                <option>Admin</option>
                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-2xl">Customer Email:</span>
                            </label>
                            <input type="email" placeholder="Example@gmail.com" className="input input-bordered w-full text-xl " />
                        </div>
                        <button className='btn w-full rounded-2xl mt-10'>Add Customer</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCustomer;