import React from 'react';

const AllUser = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-5'>All User List </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th>Serial No:</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Type</th>
                            <th>Approve</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>abc@def.com</td>
                            <td>Normal User</td>
                            <td><button className='btn btn-success btn-sm'>Make Admin</button></td>
                            <td><button className='btn btn-sm'>Delete User</button></td>
                        </tr>
                        {/* row 2 */}
                        <tr className="active">
                            <th>2</th>
                            <td>Cy Ganderton</td>
                            <td>abc@def.com</td>
                            <td>Normal User</td>
                            <td><button className='btn btn-success btn-sm'>Make Admin</button></td>
                            <td><button className='btn  btn-sm'>Delete User</button></td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Cy Ganderton</td>
                            <td>abc@def.com</td>
                            <td>Normal User</td>
                            <td><button className='btn btn-success btn-sm'>Make Admin</button></td>
                            <td><button className='btn btn-sm'>Delete User</button></td>
                        </tr>
                        <tr className="active">
                            <th>4</th>
                            <td>Cy Ganderton</td>
                            <td>abc@def.com</td>
                            <td>Normal User</td>
                            <td><button className='btn btn-success btn-sm'>Make Admin</button></td>
                            <td><button className='btn btn-sm'>Delete User</button></td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>Cy Ganderton</td>
                            <td>abc@def.com</td>
                            <td>Normal User</td>
                            <td><button className='btn btn-success btn-sm'>Make Admin</button></td>
                            <td><button className='btn btn-sm'>Delete User</button></td>
                        </tr>
                        <tr className="active">
                            <th>6</th>
                            <td>Cy Ganderton</td>
                            <td>abc@def.com</td>
                            <td>Normal User</td>
                            <td><button className='btn btn-success btn-sm'>Make Admin</button></td>
                            <td><button className='btn btn-sm'>Delete User</button></td>
                        </tr>
                        <tr >
                            <th>7</th>
                            <td>Cy Ganderton</td>
                            <td>abc@def.com</td>
                            <td>Normal User</td>
                            <td><button className='btn btn-success btn-sm'>Make Admin</button></td>
                            <td><button className='btn  btn-sm'>Delete User</button></td>
                        </tr>
                        <tr className="active">
                            <th>8</th>
                            <td>Cy Ganderton</td>
                            <td>abc@def.com</td>
                            <td>Normal User</td>
                            <td><button className='btn btn-success btn-sm'>Make Admin</button></td>
                            <td><button className='btn btn-sm'>Delete User</button></td>
                        </tr>
                        <tr>
                            <th>9</th>
                            <td>Cy Ganderton</td>
                            <td>abc@def.com</td>
                            <td>Normal User</td>
                            <td><button className='btn btn-success btn-sm'>Make Admin</button></td>
                            <td><button className='btn  btn-sm'>Delete User</button></td>
                        </tr>
                        <tr  className="active">
                            <th>10</th>
                            <td>Cy Ganderton</td>
                            <td>abc@def.com</td>
                            <td>Normal User</td>
                            <td><button className='btn btn-success btn-sm'>Make Admin</button></td>
                            <td><button className='btn btn-sm'>Delete User</button></td>
                        </tr>
                        <tr>
                            <th>11</th>
                            <td>Cy Ganderton</td>
                            <td>abc@def.com</td>
                            <td>Normal User</td>
                            <td><button className='btn btn-success btn-sm'>Make Admin</button></td>
                            <td><button className='btn  btn-sm'>Delete User</button></td>
                        </tr>
                        <tr  className="active">
                            <th>12</th>
                            <td>Cy Ganderton</td>
                            <td>abc@def.com</td>
                            <td>Normal User</td>
                            <td><button className='btn btn-success btn-sm'>Make Admin</button></td>
                            <td><button className='btn  btn-sm'>Delete User</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;