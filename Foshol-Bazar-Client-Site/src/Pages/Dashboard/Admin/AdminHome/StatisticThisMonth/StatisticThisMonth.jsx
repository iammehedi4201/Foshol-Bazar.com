import React from 'react';
import { Tab } from "@headlessui/react";
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const StatisticThisMonth = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: sellproducts_stats = [], isLoading: sellproductsStatsLoading } = useQuery({
        queryKey: ["sellproducts-stats"],
        queryFn: async () => {
            const response = await axiosSecure.get("/sellproducts-stats")
            return response.data;
        }
    })

    const { data: topCustomar_stats = [], isLoading: topCustomarStatsLoading } = useQuery({
        queryKey: ["topCustomar-stats"],
        queryFn: async () => {
            const response = await axiosSecure.get("/topCustomar-stats")
            return response.data;
        }
    })


    return (
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm shadow-cyan-900 dark:border-gray-700 sm:p-6 dark:bg-[#1d1c22] ">
            <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">Statistics this month
                <button data-popover-target="popover-description" data-popover-placement="bottom-end" type="button"><svg className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg><span className="sr-only">Show information</span></button>
            </h3>
            <div data-popover id="popover-description" role="tooltip" className="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400" data-popper-placement="bottom-end" style={{ position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate(-310px, 81px)' }}>
                <div className="p-3 space-y-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Statistics</h3>
                    <p>Statistics is a branch of applied mathematics that involves the collection, description, analysis, and inference of conclusions from quantitative data.</p>
                    <a href="#" className="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700">Read more <svg className="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg></a>
                </div>
                <div data-popper-arrow style={{ position: 'absolute', left: '0px', transform: 'translate(271px, 0px)' }} />
            </div>

            {/* <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">Select tab</label>
                <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option></option>
                    <option>Services</option>
                    <option>FAQ</option>
                </select>
            </div> */}

            <Tab.Group>
                <Tab.List className="flex gap-5 flex-col sm:flex-row ">
                    <Tab className="w-full sm:w-1/2  btn bg-orange-600 outline-0 border-0 hover:bg-orange-700 text-white">
                        Top Products
                    </Tab>
                    <Tab className="w-ful sm:w-1/2 btn text-white  bg-orange-600 outline-0 border-0  hover:bg-orange-700  ">
                        Top Customers
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel className="text-white w-full">

                        {/* this for top products */}
                        <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                            <div className="pt-4" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                                    {
                                        sellproducts_stats.map(product => <li
                                            key={product?.productName}
                                            className="py-3 sm:py-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center min-w-0">
                                                    <img className="flex-shrink-0 w-10 h-10" src={product?.photoUrl[0]} alt="imac image" />
                                                    <div className="ml-3">
                                                        <p className="font-medium text-gray-900 truncate dark:text-white">
                                                            {product?.productName}
                                                        </p>
                                                        <div className="flex items-center flex-1 text-sm text-green-500 dark:text-green-400">
                                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" />
                                                            </svg>
                                                            {product?.count}
                                                            <span className="ml-2 text-gray-500">vs last month</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    ${product?.totalSelledPrice}
                                                </div>
                                            </div>
                                        </li>)
                                    }



                                </ul>
                            </div>


                        </div>
                    </Tab.Panel>
                    <Tab.Panel className="text-white w-full">
                        {/* //this is for top customer */}
                        <div className=" pt-4" id="about" role="tabpanel" aria-labelledby="about-tab">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                                {
                                    topCustomar_stats.map(customar => <li
                                        key={customar?.customarEmail}
                                        className="py-3 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png" alt="Neil image" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-gray-900 truncate dark:text-white">
                                                    {customar?.customarName}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    {customar?.customarEmail}
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                ${customar?.totalSpent}
                                            </div>
                                        </div>
                                    </li>)
                                }


                            </ul>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>


            {/* Card Footer */}
            <div className="flex items-center justify-between pt-3 mt-5 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
                <div>
                    <button className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" type="button" data-dropdown-toggle="stats-dropdown">Last 7 days <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
                    {/* Dropdown menu */}
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="stats-dropdown" data-popper-placement="bottom" style={{ position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(893px, 301px)' }}>
                        <div className="px-4 py-3" role="none">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white" role="none">
                                Sep 16, 2021 - Sep 22, 2021
                            </p>
                        </div>
                        <ul className="py-1" role="none">
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Yesterday</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Today</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 7 days</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 30 days</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 90 days</a>
                            </li>
                        </ul>
                        <div className="py-1" role="none">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Custom...</a>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <a href="#" className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                        Full Report
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default StatisticThisMonth;