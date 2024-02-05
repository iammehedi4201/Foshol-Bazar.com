import React, { useContext, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import logo from '../../assets/logo-removebg-preview.png'
import { AuthContext } from '../../Providers/AuthProvider';
const DashboardNavbar = () => {

    const [isOpen, setOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)

    return (
        <div className="navbar bg-neutral">
            <div className="flex-1">
                <label onClick={() => setOpen(false)} htmlFor="my-drawer-2" className=" text-white lg:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </label>
                <div className='w-28 h-16 btn text-orange-500 rounded-lg hidden lg:block bg-[#023e48]'>
                    <img className='w-full h-full object-cover' src={logo} alt="" />
                </div>
            </div>
            <div className="flex-0">
                <div className="flex space-x-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-40 md:w-auto" />
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
                <div className="dropdown dropdown-end ml-2 z-20">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                {user?.displayName}
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><button onClick={async () => {
                            await logOut()
                        }}>Logout</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;