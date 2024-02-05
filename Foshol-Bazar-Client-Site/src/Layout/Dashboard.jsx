import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo-removebg-preview.png'
import DashboardNavbar from '../Shared/DashboardNavbar/DashboardNavbar';
import useAdmin from '../Hooks/useAdmin';
import useCart from '../Hooks/useCart';
import { BiSolidCoupon } from "react-icons/bi";

import './Dashboard.css'


const Dashboard = () => {
    const [isAdmin, isAdminLoading] = useAdmin();
    console.log("isAdmin from dashboard :-", isAdmin);
    const [loadedCartItems] = useCart();
    return (
        <div className='bg-[#1d1c22] w-full min-h-screen'>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-2">

                    {/* Page content here */}
                    <div className='w-full min-h-screen'>
                        <DashboardNavbar></DashboardNavbar>
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side w-full z-20 shadow-md shadow-cyan-500">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className=" h-full px-5  py-8 overflow-y-auto bg-[#023e48]">
                        <h1 className='font-bold text-4xl uppercase mb-10  bg-slate-300  text-orange-500 rounded-lg shadow-2xl lg:hidden '>
                            <img src={logo} alt="" />
                        </h1>

                        <div className='w-full font-bold text-3xl  mb-10  bg-[#023e48]  text-orange-500 rounded-lg shadow-2xl hidden lg:block uppercase text-center p-5'>
                            DashBoard
                        </div>

                        {
                            isAdmin ? <>
                                {/* This for Admin  */}
                                <ul className="space-y-2 font-medium ">
                                    <li className='flex justify-between items-center '>
                                        <div>
                                            <NavLink to="/dashboard/adminhome" className="flex items-center  p-2 text-gray-100 rounded-lg   dark:hover:bg-gray-900 group hover:text-white">
                                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                                </svg>
                                                <span className="ml-3 font-bold uppercase"> Admin Dashboard</span>
                                            </NavLink>
                                        </div>
                                        <label htmlFor="my-drawer-2" className="btn text-white btn-primary btn-xs lg:hidden ml-10" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </label>

                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/addproducts" className="flex items-center p-2 text-gray-100 hover:text-white rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 8.0001C12 3.58201 9.98338 0 7.5 0C5.01568 0 3 3.58201 3 8.0001C3 9.92279 4.21201 11.5518 5.90818 12.1953L5.4999 21.9999C5.4999 23.1045 6.39539 24 7.5 24C8.60461 24 9.5001 23.1045 9.5001 21.9999L9.09182 12.1962C10.7892 11.5518 12 9.92279 12 8.0001Z" fill="currentColor" />
                                                <path d="M21 7.2501L20.7501 0H19.5L19.2501 7.2501H18.2499L18 0H16.5L16.2501 7.2501H15.2499L15 0H13.7499L13.5 7.2501C13.5 8.77529 14.4141 10.0818 15.7227 10.668L15.2499 21.9999C15.2499 23.1045 16.1454 24 17.25 24C18.3546 24 19.2501 23.1045 19.2501 21.9999L18.7773 10.668C20.0859 10.0818 21 8.77529 21 7.2501Z" fill="currentColor" />
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap font-bold uppercase">Add Products</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageitems" className="flex items-center p-2 text-gray-100 hover:text-white rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M21.7918 3.01252H8.234C7.01619 3.01252 6.02539 4.00331 6.02539 5.22263C6.02539 6.44044 7.01619 7.43124 8.234 7.43124H21.7917C23.0096 7.43124 24.0004 6.44044 24.0004 5.22263C24.0004 4.00327 23.0096 3.01252 21.7918 3.01252Z" fill="currentColor" />
                                                <path d="M2.20941 3.01252C0.991172 3.01252 0 4.00364 0 5.22188C0 6.44011 0.991172 7.43124 2.20941 7.43124C3.42764 7.43124 4.41877 6.44011 4.41877 5.22188C4.41877 4.00364 3.42764 3.01252 2.20941 3.01252Z" fill="currentColor" />
                                                <path d="M2.20941 9.79064C0.991172 9.79064 0 10.7818 0 12C0 13.2182 0.991172 14.2094 2.20941 14.2094C3.42764 14.2094 4.41877 13.2182 4.41877 12C4.41877 10.7818 3.42764 9.79064 2.20941 9.79064Z" fill="currentColor" />
                                                <path d="M2.20941 16.5688C0.991172 16.5688 0 17.5599 0 18.7781C0 19.9964 0.991172 20.9875 2.20941 20.9875C3.42764 20.9875 4.41877 19.9964 4.41877 18.7781C4.41877 17.5599 3.42764 16.5688 2.20941 16.5688Z" fill="currentColor" />
                                                <path d="M21.7918 9.79064H8.234C7.01619 9.79064 6.02539 10.7814 6.02539 12.0008C6.02539 13.2186 7.01619 14.2094 8.234 14.2094H21.7917C23.0096 14.2094 24.0004 13.2186 24.0004 12.0008C24.0004 10.7814 23.0096 9.79064 21.7918 9.79064Z" fill="currentColor" />
                                                <path d="M21.7918 16.5688H8.234C7.01619 16.5688 6.02539 17.5596 6.02539 18.7789C6.02539 19.9967 7.01619 20.9875 8.234 20.9875H21.7917C23.0096 20.9875 24.0004 19.9967 24.0004 18.7789C24.0004 17.5596 23.0096 16.5688 21.7918 16.5688Z" fill="currentColor" />
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap font-bold uppercase">Manage Items</span>
                                            {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span> */}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageorders" className="flex items-center p-2 text-gray-100 hover:text-white rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M20.1752 18.525V2.325C20.1752 1.875 19.8752 1.575 19.4252 1.575L6.0752 1.5C4.8002 1.5 3.8252 2.55 3.8252 3.75V20.1C3.8252 21.45 4.8752 22.5 6.2252 22.5H19.4252C19.6502 22.5 19.9502 22.35 20.1002 22.125C20.2502 21.9 20.2502 21.6 20.1002 21.375C19.6502 20.475 19.6502 19.65 20.1002 18.75C20.1002 18.75 20.1752 18.675 20.1752 18.525ZM8.9252 6H15.0752C15.5252 6 15.8252 6.3 15.8252 6.75C15.8252 7.2 15.5252 7.5 15.0752 7.5H8.9252C8.47519 7.5 8.1752 7.2 8.1752 6.75C8.1752 6.3 8.5502 6 8.9252 6ZM8.9252 9.075H15.0752C15.5252 9.075 15.8252 9.375 15.8252 9.825C15.8252 10.275 15.5252 10.575 15.0752 10.575H8.9252C8.47519 10.575 8.1752 10.275 8.1752 9.825C8.1752 9.375 8.5502 9.075 8.9252 9.075ZM8.9252 12.075H15.0752C15.5252 12.075 15.8252 12.375 15.8252 12.825C15.8252 13.275 15.5252 13.575 15.0752 13.575H8.9252C8.47519 13.575 8.1752 13.275 8.1752 12.825C8.1752 12.375 8.5502 12.075 8.9252 12.075ZM18.3752 21H6.2252C5.7002 21 5.3252 20.625 5.3252 20.1C5.3252 19.575 5.7002 19.2 6.2252 19.2H18.3752C18.2252 19.8 18.2252 20.4 18.3752 21Z" fill="currentColor" />
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap font-bold uppercase">Manage Orders</span>
                                            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-black bg-blue-100 rounded-full  ">0</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/alluser" className="flex items-center p-2 text-gray-100 hover:text-white rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <g clipPath="url(#clip0_42_1818)">
                                                    <path d="M12 9.68583C14.2523 9.68583 16.0781 7.85999 16.0781 5.6077C16.0781 3.35542 14.2523 1.52958 12 1.52958C9.74771 1.52958 7.92188 3.35542 7.92188 5.6077C7.92188 7.85999 9.74771 9.68583 12 9.68583Z" fill="currentColor" />
                                                    <path d="M20.25 9.68578C21.6739 9.68578 22.8281 8.53152 22.8281 7.10766C22.8281 5.6838 21.6739 4.52953 20.25 4.52953C18.8261 4.52953 17.6719 5.6838 17.6719 7.10766C17.6719 8.53152 18.8261 9.68578 20.25 9.68578Z" fill="currentColor" />
                                                    <path d="M3.75 9.68578C5.17386 9.68578 6.32812 8.53152 6.32812 7.10766C6.32812 5.6838 5.17386 4.52953 3.75 4.52953C2.32614 4.52953 1.17188 5.6838 1.17188 7.10766C1.17188 8.53152 2.32614 9.68578 3.75 9.68578Z" fill="currentColor" />
                                                    <path d="M6.29016 12.001C5.27531 11.1695 4.35623 11.2796 3.18281 11.2796C1.42781 11.2796 0 12.699 0 14.4432V19.5624C0 20.3199 0.618281 20.9358 1.37859 20.9358C4.66106 20.9358 4.26562 20.9952 4.26562 20.7943C4.26562 17.1668 3.83597 14.5066 6.29016 12.001Z" fill="currentColor" />
                                                    <path d="M13.1162 11.2983C11.0667 11.1273 9.28518 11.3003 7.74857 12.5686C5.17715 14.6283 5.67201 17.4015 5.67201 20.7942C5.67201 21.6918 6.40232 22.4358 7.31357 22.4358C17.208 22.4358 17.6018 22.755 18.1886 21.4556C18.381 21.0162 18.3283 21.1559 18.3283 16.9523C18.3283 13.6136 15.4373 11.2983 13.1162 11.2983Z" fill="currentColor" />
                                                    <path d="M20.8173 11.2795C19.6375 11.2795 18.7234 11.1706 17.71 12.0009C20.1458 14.4879 19.7345 16.9666 19.7345 20.7942C19.7345 20.9964 19.4062 20.9358 22.5723 20.9358C23.3598 20.9358 24.0001 20.2978 24.0001 19.5136V14.4431C24.0001 12.6989 22.5723 11.2795 20.8173 11.2795Z" fill="currentColor" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_42_1818">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap font-bold uppercase">All users</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageCoupons" className="flex items-center p-2 text-gray-100 hover:text-white rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <BiSolidCoupon></BiSolidCoupon>
                                            <span className="flex-1 ml-3 whitespace-nowrap font-bold uppercase">Create Coupons</span>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/login" className="flex items-center p-2 text-gray-100 hover:text-white rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap font-bold ">Sign In</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/signup" className="flex items-center p-2 text-gray-100
                                        hover:text-white rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                                <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                                <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap font-bold">Sign Up</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </> : <>
                                {/* This for user */}

                                <ul className="space-y-2 font-medium ">
                                    <li className='flex justify-between items-center'>
                                        <div>
                                            <NavLink to="/dashboard/userhome" className="flex items-center  p-2 text-gray-100 rounded-lg   dark:hover:bg-gray-900 group hover:text-white">
                                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                                </svg>
                                                <span className="ml-3 font-bold uppercase"> User Dashboard</span>
                                            </NavLink>
                                        </div>
                                        <label htmlFor="my-drawer-2" className="btn text-white btn-primary btn-xs lg:hidden ml-10" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </label>

                                    </li>
                                    {/* <li>
                                        <NavLink to="/dashboard/reservation" className="flex items-center p-2 text-gray-100 hover:text-white rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M20.8941 1.41187H18.7765V3.52951C18.7765 3.95304 18.4235 4.23539 18.0706 4.23539C17.7176 4.23539 17.3647 3.95304 17.3647 3.52951V1.41187H6.07058V3.52951C6.07058 3.95304 5.71764 4.23539 5.3647 4.23539C5.01175 4.23539 4.65881 3.95304 4.65881 3.52951V1.41187H2.54117C1.48234 1.41187 0.705872 2.32951 0.705872 3.52951V6.07069H23.2941V3.52951C23.2941 2.32951 22.0235 1.41187 20.8941 1.41187ZM0.705872 7.55304V20.4707C0.705872 21.7413 1.48234 22.5883 2.61175 22.5883H20.9647C22.0941 22.5883 23.3647 21.6707 23.3647 20.4707V7.55304H0.705872ZM6.98822 19.4119H5.29411C5.01175 19.4119 4.7294 19.2001 4.7294 18.8472V17.0825C4.7294 16.8001 4.94117 16.5177 5.29411 16.5177H7.05881C7.34117 16.5177 7.62352 16.7295 7.62352 17.0825V18.8472C7.55293 19.2001 7.34117 19.4119 6.98822 19.4119ZM6.98822 13.0589H5.29411C5.01175 13.0589 4.7294 12.8472 4.7294 12.4942V10.7295C4.7294 10.4472 4.94117 10.1648 5.29411 10.1648H7.05881C7.34117 10.1648 7.62352 10.3766 7.62352 10.7295V12.4942C7.55293 12.8472 7.34117 13.0589 6.98822 13.0589ZM12.6353 19.4119H10.8706C10.5882 19.4119 10.3059 19.2001 10.3059 18.8472V17.0825C10.3059 16.8001 10.5176 16.5177 10.8706 16.5177H12.6353C12.9176 16.5177 13.2 16.7295 13.2 17.0825V18.8472C13.2 19.2001 12.9882 19.4119 12.6353 19.4119ZM12.6353 13.0589H10.8706C10.5882 13.0589 10.3059 12.8472 10.3059 12.4942V10.7295C10.3059 10.4472 10.5176 10.1648 10.8706 10.1648H12.6353C12.9176 10.1648 13.2 10.3766 13.2 10.7295V12.4942C13.2 12.8472 12.9882 13.0589 12.6353 13.0589ZM18.2823 19.4119H16.5176C16.2353 19.4119 15.9529 19.2001 15.9529 18.8472V17.0825C15.9529 16.8001 16.1647 16.5177 16.5176 16.5177H18.2823C18.5647 16.5177 18.847 16.7295 18.847 17.0825V18.8472C18.847 19.2001 18.6353 19.4119 18.2823 19.4119ZM18.2823 13.0589H16.5176C16.2353 13.0589 15.9529 12.8472 15.9529 12.4942V10.7295C15.9529 10.4472 16.1647 10.1648 16.5176 10.1648H18.2823C18.5647 10.1648 18.847 10.3766 18.847 10.7295V12.4942C18.847 12.8472 18.6353 13.0589 18.2823 13.0589Z" fill="currentColor " />
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap font-bold uppercase">reservation</span>
                                        </NavLink>
                                    </li> */}
                                    <li>
                                        <NavLink to="/dashboard/paymenthistory" className="flex items-center p-2 text-gray-100 hover:text-white rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <g clipPath="url(#clip0_42_9)">
                                                    <path d="M22.3635 19.6364H18.5453C16.1393 19.6364 14.1818 17.6789 14.1818 15.2728C14.1818 12.8668 16.1393 10.9093 18.5453 10.9093H22.3635C22.665 10.9093 22.9089 10.6653 22.9089 10.3638V8.7275C22.9089 7.5837 22.0217 6.6535 20.9008 6.56329L17.7682 1.09179C17.4779 0.585754 17.0092 0.224073 16.4483 0.0738875C15.89 -0.0752748 15.3062 0.00306481 14.8066 0.293873L4.06798 6.5457H2.18195C0.978682 6.5457 0.000152588 7.52418 0.000152588 8.7275V21.8182C0.000152588 23.0215 0.978631 24 2.18195 24H20.7271C21.9304 24 22.9089 23.0215 22.9089 21.8182V20.1819C22.9089 19.8804 22.665 19.6364 22.3635 19.6364ZM18.4447 4.4698L19.6332 6.5457H14.8791L18.4447 4.4698ZM6.23613 6.5457L15.3557 1.23666C15.6024 1.0923 15.8905 1.05395 16.1659 1.12748C16.4445 1.20204 16.6768 1.38209 16.8211 1.63403L16.8223 1.63603L8.3895 6.5457H6.23613Z" fill="currentColor" />
                                                    <path d="M22.3635 12.0002H18.5453C16.7406 12.0002 15.2726 13.4682 15.2726 15.2729C15.2726 17.0776 16.7406 18.5456 18.5453 18.5456H22.3635C23.2658 18.5456 23.9998 17.8116 23.9998 16.9093V13.6366C23.9998 12.7342 23.2658 12.0002 22.3635 12.0002ZM18.5453 16.3638C17.944 16.3638 17.4544 15.8743 17.4544 15.2729C17.4544 14.6716 17.944 14.182 18.5453 14.182C19.1467 14.182 19.6362 14.6716 19.6362 15.2729C19.6362 15.8743 19.1467 16.3638 18.5453 16.3638Z" fill="currentColor" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_42_9">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap font-bold uppercase">Payment history</span>
                                            {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span> */}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/mycart" className="flex items-center p-2 text-gray-100 hover:text-white rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                                <g clipPath="url(#clip0_42_17)">
                                                    <path d="M10.5937 22.5469C11.7587 22.5469 12.7031 21.6025 12.7031 20.4375C12.7031 19.2725 11.7587 18.3281 10.5937 18.3281C9.42871 18.3281 8.48431 19.2725 8.48431 20.4375C8.48431 21.6025 9.42871 22.5469 10.5937 22.5469Z" fill="currentColor" />
                                                    <path d="M17.6718 22.5469C18.8368 22.5469 19.7812 21.6025 19.7812 20.4375C19.7812 19.2725 18.8368 18.3281 17.6718 18.3281C16.5068 18.3281 15.5624 19.2725 15.5624 20.4375C15.5624 21.6025 16.5068 22.5469 17.6718 22.5469Z" fill="currentColor" />
                                                    <path d="M0.703121 2.85941H3.63528L7.02985 14.7428L6.7636 15.2753C6.06254 16.6759 7.08024 18.3281 8.6505 18.3281H20.4843C20.8729 18.3281 21.1874 18.0136 21.1874 17.625C21.1874 17.2363 20.8729 16.9218 20.4843 16.9218H8.6505C8.12836 16.9218 7.78711 16.372 8.02153 15.9042L8.21587 15.5156H20.4843C20.798 15.5156 21.0741 15.3076 21.1606 15.0054L23.9731 5.16171C24.0335 4.94956 23.991 4.72156 23.8584 4.54512C23.7252 4.36934 23.5172 4.26566 23.2968 4.26566H5.49948L4.84169 1.96331C4.75516 1.6612 4.47916 1.45312 4.16533 1.45312H0.703121C0.314483 1.45312 0 1.76761 0 2.15625C0 2.54488 0.314483 2.85941 0.703121 2.85941Z" fill="currentColor" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_42_17">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap font-bold uppercase">my cart</span>
                                            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-black bg-blue-100 rounded-full  ">{loadedCartItems.length || 0}</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/addreview" className="flex items-center p-2 text-gray-100 hover:text-white rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <g clipPath="url(#clip0_42_24)">
                                                    <path d="M14.4968 5.11667L15.9048 3.74417C16.0051 3.6465 16.0761 3.5227 16.1097 3.38679C16.1433 3.25088 16.1382 3.10828 16.0949 2.97513C16.0517 2.84198 15.972 2.72359 15.865 2.63336C15.7579 2.54314 15.6278 2.48468 15.4892 2.46459L13.5428 2.18192L12.6727 0.418144C12.6036 0.301186 12.5053 0.20426 12.3873 0.136926C12.2693 0.0695931 12.1358 0.0341797 12 0.0341797C11.8641 0.0341797 11.7306 0.0695931 11.6127 0.136926C11.4947 0.20426 11.3963 0.301186 11.3272 0.418144L10.4572 2.18184L8.51082 2.46452C8.37227 2.4846 8.24211 2.54306 8.13506 2.63329C8.02801 2.72352 7.94835 2.8419 7.9051 2.97505C7.86185 3.10821 7.85673 3.25081 7.89032 3.38672C7.92391 3.52263 7.99487 3.64642 8.09517 3.74409L9.50322 5.11659L9.17067 7.05527C9.14699 7.19323 9.16238 7.33506 9.21511 7.46472C9.26785 7.59439 9.35581 7.70671 9.46906 7.78898C9.58231 7.87124 9.71632 7.92018 9.85594 7.93024C9.99555 7.9403 10.1352 7.91109 10.2591 7.84592L12 6.93047L13.7409 7.84599C13.8648 7.91117 14.0045 7.94038 14.1441 7.93032C14.2837 7.92025 14.4177 7.87132 14.531 7.78905C14.6442 7.70678 14.7322 7.59446 14.7849 7.4648C14.8376 7.33514 14.853 7.1933 14.8293 7.05534L14.4968 5.11667Z" fill="currentColor" />
                                                    <path d="M23.9634 5.1921C23.9201 5.05898 23.8404 4.94062 23.7334 4.8504C23.6264 4.76018 23.4962 4.70171 23.3577 4.68158L21.4116 4.39883L20.5408 2.6352C20.4718 2.51818 20.3734 2.42119 20.2555 2.3538C20.1375 2.28642 20.0041 2.25098 19.8682 2.25098C19.7324 2.25098 19.5989 2.28642 19.4809 2.3538C19.363 2.42119 19.2646 2.51818 19.1956 2.6352L18.3256 4.39883L16.3796 4.68158C16.2411 4.70166 16.111 4.76009 16.004 4.85027C15.8969 4.94044 15.8173 5.05877 15.774 5.19186C15.7307 5.32496 15.7255 5.4675 15.759 5.60339C15.7925 5.73927 15.8634 5.86307 15.9636 5.96078L17.372 7.33328L17.0395 9.27203C17.0157 9.40996 17.0311 9.55179 17.0838 9.68145C17.1365 9.81112 17.2244 9.92346 17.3376 10.0058C17.4508 10.0881 17.5848 10.137 17.7244 10.1472C17.864 10.1573 18.0036 10.1282 18.1275 10.0631L19.8681 9.14805L21.6091 10.0631C21.7329 10.1282 21.8726 10.1574 22.0122 10.1474C22.1518 10.1373 22.2858 10.0884 22.3991 10.0061C22.5123 9.92384 22.6003 9.81152 22.653 9.68186C22.7058 9.55219 22.7212 9.41036 22.6975 9.2724L22.365 7.33365L23.7731 5.96115C23.8735 5.8635 23.9445 5.73972 23.9781 5.6038C24.0117 5.46789 24.0066 5.32528 23.9634 5.1921Z" fill="currentColor" />
                                                    <path d="M7.62044 4.68151L5.67441 4.39876L4.80441 2.63514C4.74248 2.50964 4.64667 2.40397 4.52781 2.33008C4.40896 2.2562 4.2718 2.21704 4.13185 2.21704C3.9919 2.21704 3.85474 2.2562 3.73589 2.33008C3.61703 2.40397 3.52122 2.50964 3.45929 2.63514L2.58839 4.39876L0.642287 4.68151C0.50375 4.70161 0.373601 4.76007 0.266566 4.85029C0.159531 4.94051 0.079883 5.05889 0.0366327 5.19203C-0.00661756 5.32516 -0.0117434 5.46775 0.0218353 5.60365C0.055414 5.73955 0.126357 5.86334 0.226637 5.96101L1.63499 7.33359L1.30244 9.27234C1.27875 9.4103 1.29414 9.55213 1.34688 9.68179C1.39961 9.81146 1.48758 9.92378 1.60083 10.006C1.71407 10.0883 1.84809 10.1372 1.9877 10.1473C2.12732 10.1574 2.26696 10.1282 2.39084 10.063L4.13181 9.14799L5.87241 10.063C5.99629 10.1282 6.13593 10.1574 6.27555 10.1473C6.41516 10.1372 6.54917 10.0883 6.66242 10.006C6.77567 9.92378 6.86364 9.81146 6.91637 9.68179C6.9691 9.55213 6.9845 9.4103 6.96081 9.27234L6.62826 7.33359L8.03669 5.96109C8.13689 5.86338 8.20775 5.73958 8.24125 5.6037C8.27476 5.46781 8.26958 5.32526 8.2263 5.19217C8.18301 5.05908 8.10335 4.94075 7.99632 4.85058C7.88929 4.7604 7.75894 4.70159 7.62044 4.68151Z" fill="currentColor" />
                                                    <path d="M19.5 11.25H4.5C3.90346 11.2507 3.33155 11.4879 2.90973 11.9097C2.48792 12.3315 2.25066 12.9035 2.25 13.5V19.5C2.25066 20.0965 2.48792 20.6685 2.90973 21.0903C3.33155 21.5121 3.90346 21.7493 4.5 21.75H9.43943L11.4698 23.7803C11.5394 23.8499 11.622 23.9052 11.713 23.9429C11.804 23.9806 11.9015 24 12 24C12.0985 24 12.196 23.9806 12.287 23.9429C12.378 23.9052 12.4606 23.8499 12.5303 23.7803L14.5606 21.75H19.5C20.0965 21.7493 20.6685 21.5121 21.0903 21.0903C21.5121 20.6685 21.7493 20.0965 21.75 19.5V13.5C21.7493 12.9035 21.5121 12.3315 21.0903 11.9097C20.6685 11.4879 20.0965 11.2507 19.5 11.25ZM18 18.75H6C5.80109 18.75 5.61032 18.671 5.46967 18.5303C5.32902 18.3897 5.25 18.1989 5.25 18C5.25 17.8011 5.32902 17.6103 5.46967 17.4697C5.61032 17.329 5.80109 17.25 6 17.25H18C18.1989 17.25 18.3897 17.329 18.5303 17.4697C18.671 17.6103 18.75 17.8011 18.75 18C18.75 18.1989 18.671 18.3897 18.5303 18.5303C18.3897 18.671 18.1989 18.75 18 18.75ZM18 15.75H6C5.80109 15.75 5.61032 15.671 5.46967 15.5303C5.32902 15.3897 5.25 15.1989 5.25 15C5.25 14.8011 5.32902 14.6103 5.46967 14.4697C5.61032 14.329 5.80109 14.25 6 14.25H18C18.1989 14.25 18.3897 14.329 18.5303 14.4697C18.671 14.6103 18.75 14.8011 18.75 15C18.75 15.1989 18.671 15.3897 18.5303 15.5303C18.3897 15.671 18.1989 15.75 18 15.75Z" fill="currentColor" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_42_24">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap font-bold uppercase">Add review</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/orderhistory" className="flex items-center p-2 text-gray-100 hover:text-white rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M22.4917 18.8633C22.4744 18.9877 22.4252 19.1055 22.349 19.2054C22.2728 19.3052 22.1721 19.3837 22.0567 19.4333L15.3068 22.4333C15.2105 22.4774 15.1059 22.5002 15 22.5001C14.856 22.502 14.7147 22.4602 14.595 22.3801C14.4894 22.3123 14.4025 22.2191 14.3422 22.1091C14.2819 21.999 14.2502 21.8756 14.25 21.7501V12.7501C14.2503 12.6058 14.2922 12.4647 14.3707 12.3436C14.4492 12.2226 14.5609 12.1267 14.6925 12.0676C14.8232 12.0063 14.9691 11.985 15.1119 12.0063C15.2546 12.0277 15.3879 12.0907 15.495 12.1876L22.245 18.1876C22.3395 18.2705 22.4116 18.3759 22.4547 18.4939C22.4978 18.612 22.5105 18.739 22.4917 18.8633Z" fill="currentColor" />
                                                <path d="M13.5 12.75C13.5004 12.4608 13.5843 12.1779 13.7417 11.9354C13.8991 11.6928 14.1233 11.5009 14.3873 11.3827C14.5793 11.2941 14.7885 11.2487 15 11.25C15.3669 11.2501 15.7208 11.3858 15.9938 11.631L19.5 14.7435V5.25C19.4982 4.65381 19.2606 4.08255 18.839 3.66098C18.4175 3.23941 17.8462 3.00178 17.25 3H15.75V2.25C15.75 2.05109 15.671 1.86032 15.5303 1.71967C15.3897 1.57902 15.1989 1.5 15 1.5C14.8011 1.5 14.6103 1.57902 14.4697 1.71967C14.329 1.86032 14.25 2.05109 14.25 2.25V3H6.75V2.25C6.75 2.05109 6.67098 1.86032 6.53033 1.71967C6.38968 1.57902 6.19891 1.5 6 1.5C5.80109 1.5 5.61032 1.57902 5.46967 1.71967C5.32902 1.86032 5.25 2.05109 5.25 2.25V3H3.75C3.15381 3.00178 2.58255 3.23941 2.16098 3.66098C1.73941 4.08255 1.50178 4.65381 1.5 5.25V17.25C1.50178 17.8462 1.73941 18.4175 2.16098 18.839C2.58255 19.2606 3.15381 19.4982 3.75 19.5H13.5V12.75ZM3 7.5V5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H5.25V5.25C5.25 5.44891 5.32902 5.63968 5.46967 5.78033C5.61032 5.92098 5.80109 6 6 6C6.19891 6 6.38968 5.92098 6.53033 5.78033C6.67098 5.63968 6.75 5.44891 6.75 5.25V4.5H14.25V5.25C14.25 5.44891 14.329 5.63968 14.4697 5.78033C14.6103 5.92098 14.8011 6 15 6C15.1989 6 15.3897 5.92098 15.5303 5.78033C15.671 5.63968 15.75 5.44891 15.75 5.25V4.5H17.25C17.4489 4.5 17.6397 4.57902 17.7803 4.71967C17.921 4.86032 18 5.05109 18 5.25V7.5H3ZM12 12C12 12.1989 11.921 12.3897 11.7803 12.5303C11.6397 12.671 11.4489 12.75 11.25 12.75H10.5C10.3011 12.75 10.1103 12.671 9.96967 12.5303C9.82902 12.3897 9.75 12.1989 9.75 12C9.75 11.8011 9.82902 11.6103 9.96967 11.4697C10.1103 11.329 10.3011 11.25 10.5 11.25H11.25C11.4489 11.25 11.6397 11.329 11.7803 11.4697C11.921 11.6103 12 11.8011 12 12ZM6.75 15.75H6C5.80109 15.75 5.61032 15.671 5.46967 15.5303C5.32902 15.3897 5.25 15.1989 5.25 15C5.25 14.8011 5.32902 14.6103 5.46967 14.4697C5.61032 14.329 5.80109 14.25 6 14.25H6.75C6.94891 14.25 7.13968 14.329 7.28033 14.4697C7.42098 14.6103 7.5 14.8011 7.5 15C7.5 15.1989 7.42098 15.3897 7.28033 15.5303C7.13968 15.671 6.94891 15.75 6.75 15.75ZM6.75 12.75H6C5.80109 12.75 5.61032 12.671 5.46967 12.5303C5.32902 12.3897 5.25 12.1989 5.25 12C5.25 11.8011 5.32902 11.6103 5.46967 11.4697C5.61032 11.329 5.80109 11.25 6 11.25H6.75C6.94891 11.25 7.13968 11.329 7.28033 11.4697C7.42098 11.6103 7.5 11.8011 7.5 12C7.5 12.1989 7.42098 12.3897 7.28033 12.5303C7.13968 12.671 6.94891 12.75 6.75 12.75ZM11.25 15.75H10.5C10.3011 15.75 10.1103 15.671 9.96967 15.5303C9.82902 15.3897 9.75 15.1989 9.75 15C9.75 14.8011 9.82902 14.6103 9.96967 14.4697C10.1103 14.329 10.3011 14.25 10.5 14.25H11.25C11.4489 14.25 11.6397 14.329 11.7803 14.4697C11.921 14.6103 12 14.8011 12 15C12 15.1989 11.921 15.3897 11.7803 15.5303C11.6397 15.671 11.4489 15.75 11.25 15.75Z" fill="currentColor" />
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap font-bold uppercase">Order Histroy</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/home" className="flex items-center p-2 text-gray-100 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/home" className="flex items-center p-2 text-gray-100 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                                <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                                <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </>
                        }

                        {/* ------------------------------------ */}

                        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                            <li>
                                <NavLink to="/" className="flex items-center p-2 text-gray-100 hover:text-white transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700  group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clipPath="url(#clip0_42_48)">
                                            <path d="M23.3529 10.4388C23.3523 10.4383 23.3518 10.4377 23.3512 10.4372L13.5611 0.647461C13.1439 0.22998 12.589 0 11.9989 0C11.4087 0 10.8539 0.229797 10.4365 0.647278L0.651483 10.4321C0.648187 10.4354 0.644892 10.4388 0.641596 10.4421C-0.215338 11.304 -0.213873 12.7024 0.645807 13.5621C1.03857 13.955 1.55731 14.1826 2.11193 14.2064C2.13445 14.2086 2.15716 14.2097 2.18005 14.2097H2.57025V21.4144C2.57025 22.84 3.73022 24 5.15624 24H8.98644C9.37463 24 9.68957 23.6852 9.68957 23.2969V17.6484C9.68957 16.9979 10.2187 16.4687 10.8693 16.4687H13.1285C13.779 16.4687 14.3082 16.9979 14.3082 17.6484V23.2969C14.3082 23.6852 14.623 24 15.0113 24H18.8415C20.2676 24 21.4275 22.84 21.4275 21.4144V14.2097H21.7894C22.3793 14.2097 22.9341 13.9799 23.3518 13.5624C24.2124 12.7013 24.2128 11.3005 23.3529 10.4388Z" fill="currentColor" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_42_48">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span className="ml-4 font-bold uppercase ">Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/products" className="flex items-center p-2 text-gray-100 hover:text-white transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700  group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 0.75C10.8065 0.75 9.66193 1.22411 8.81802 2.06802C7.97411 2.91193 7.5 4.05653 7.5 5.25V6H6.8775C6.24609 5.99934 5.63874 6.24222 5.18191 6.6781C4.72508 7.11398 4.45396 7.70925 4.425 8.34L3.8325 20.6775C3.81731 21.0093 3.86946 21.3407 3.98579 21.6517C4.10213 21.9628 4.28025 22.2471 4.50941 22.4875C4.73857 22.7278 5.01404 22.9193 5.3192 23.0504C5.62436 23.1814 5.95289 23.2493 6.285 23.25H17.715C18.0471 23.2493 18.3756 23.1814 18.6808 23.0504C18.986 22.9193 19.2614 22.7278 19.4906 22.4875C19.7198 22.2471 19.8979 21.9628 20.0142 21.6517C20.1305 21.3407 20.1827 21.0093 20.1675 20.6775L19.575 8.34C19.546 7.70925 19.2749 7.11398 18.8181 6.6781C18.3613 6.24222 17.7539 5.99934 17.1225 6H16.5V5.25C16.5 4.05653 16.0259 2.91193 15.182 2.06802C14.3381 1.22411 13.1935 0.75 12 0.75ZM9 5.25C9 4.45435 9.31607 3.69129 9.87868 3.12868C10.4413 2.56607 11.2043 2.25 12 2.25C12.7956 2.25 13.5587 2.56607 14.1213 3.12868C14.6839 3.69129 15 4.45435 15 5.25V6H9V5.25ZM7.77 9.1425C7.77 8.99416 7.81399 8.84916 7.8964 8.72582C7.97881 8.60249 8.09594 8.50636 8.23299 8.44959C8.37003 8.39283 8.52083 8.37797 8.66632 8.40691C8.8118 8.43585 8.94544 8.50728 9.05033 8.61217C9.15522 8.71706 9.22665 8.8507 9.25559 8.99618C9.28453 9.14167 9.26967 9.29247 9.21291 9.42951C9.15614 9.56656 9.06001 9.68369 8.93668 9.7661C8.81334 9.84851 8.66834 9.8925 8.52 9.8925C8.32109 9.8925 8.13032 9.81348 7.98967 9.67283C7.84902 9.53218 7.77 9.34141 7.77 9.1425ZM14.73 9.1425C14.73 8.99416 14.774 8.84916 14.8564 8.72582C14.9388 8.60249 15.0559 8.50636 15.193 8.44959C15.33 8.39283 15.4808 8.37797 15.6263 8.40691C15.7718 8.43585 15.9054 8.50728 16.0103 8.61217C16.1152 8.71706 16.1866 8.8507 16.2156 8.99618C16.2445 9.14167 16.2297 9.29247 16.1729 9.42951C16.1161 9.56656 16.02 9.68369 15.8967 9.7661C15.7733 9.84851 15.6283 9.8925 15.48 9.8925C15.2811 9.8925 15.0903 9.81348 14.9497 9.67283C14.809 9.53218 14.73 9.34141 14.73 9.1425Z" fill="currentColor" />
                                    </svg>
                                    <span className="ml-3 font-bold uppercase">shop</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/home" className="flex items-center p-2 text-gray-100 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700  group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12.6942 15.032C12.4675 15.1736 12.2125 15.2303 11.9858 15.2303C11.7591 15.2303 11.5041 15.1736 11.2774 15.032L0 8.14648V17.2988C0 19.2539 1.58678 20.8407 3.54191 20.8407H20.4581C22.4132 20.8407 24 19.2539 24 17.2988V8.14648L12.6942 15.032Z" fill="#151515" />
                                        <path d="M20.4581 3.15942H3.54191C1.87013 3.15942 0.453366 4.34951 0.113342 5.93628L12.0142 13.1901L23.8867 5.93628C23.5466 4.34951 22.1299 3.15942 20.4581 3.15942Z" fill="currentColor" />
                                    </svg>
                                    <span className="ml-3 font-bold uppercase">contact</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;