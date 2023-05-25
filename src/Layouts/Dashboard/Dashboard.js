import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>


            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 ">
                        <li><Link to='/dashboard'>All Customer</Link></li>
                        <li>
                            <Link to='/dashboard/addcustomer'> Add Customer</Link>
                        </li>
                        {/* <li>
                            <Link to='/dashboard/adddoctor'> Add a Doctor</Link>
                        </li> */}
                        <li>
                            <Link to='/dashboard/addproduct'> Add Product</Link>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;