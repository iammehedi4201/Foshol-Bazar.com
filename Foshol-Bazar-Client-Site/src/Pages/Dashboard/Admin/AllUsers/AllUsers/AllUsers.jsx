import React, { useState } from 'react';
import useUsers from '../../../../../Hooks/useUsers';
import UserRow from '../UserRow/UserRow';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../../../Shared/PageHeader/pageHeader';
import './AllUsers.css'

const AllUsers = () => {
    const [users, isUserLoading] = useUsers();

    //loading state :
    if (isUserLoading) {
        <div className=" w-full min-h-screen flex items-center justify-center">
            <span className="loading loading-infinity loading-lg text-white"></span>
        </div>
    }

    return (
        <main className="min-h-screen">
            <Helmet>
                <title>Foshol Bazar || All Users </title>
            </Helmet>

            <PageHeader
                sectionBackText={"All Users"}
                bgColor={"cyan"}
            ></PageHeader>

            <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
                <div className="w-full mb-1 p-5">
                    <div className="sm:flex">
                        <div className="items-center mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                            <form className="lg:pr-3" action="#" method="GET">
                                <label htmlFor="users-search" className="sr-only">
                                    Search
                                </label>
                                <div className="relative mt-1 lg:w-64 xl:w-96">
                                    <input
                                        type="text"
                                        name="email"
                                        id="users-search"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Search for users"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                            <button
                                type="button"
                                data-modal-toggle="add-user-modal"
                                className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                <svg
                                    className="w-5 h-5 mr-2 -ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Add user
                            </button>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                            >
                                <svg
                                    className="w-5 h-5 mr-2 -ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Export
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col z-10 ">
                <div className="overflow-x-auto relative">
                    <table className="w-full divide-y divide-gray-200 dark:divide-gray-600">
                        <thead className="bg-cyan-900">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center"></div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-medium text-left text-gray-100 uppercase "
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-medium text-left text-gray-100 uppercase "
                                >
                                    Email
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-medium text-left text-gray-100 uppercase "
                                >
                                    Role
                                </th>

                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-medium text-left text-gray-100 uppercase "
                                >
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            {users.map((user, index) => (
                                <UserRow
                                    key={user._id}
                                    index={index + 1}
                                    user={user}
                                ></UserRow>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

            <div className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center mb-4 sm:mb-0">
                    <a
                        href="#"
                        className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <svg
                            className="w-7 h-7"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <svg
                            className="w-7 h-7"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">1-20</span> of{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">2290</span>
                    </span>
                </div>
                <div className="flex items-center space-x-3">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Next
                        <svg
                            className="w-5 h-5 ml-1 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
            {/* Edit User Modal */}
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box Edit-modal-box relative shadow-md shadow-cyan-800">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        {/* Modal content */}
                        <div className="relative  bg-[#1d1c22] rounded-lg shadow ">
                            {/* Modal header */}
                            <h3 className="text-3xl font-semibold dark:text-white text-center py-5">Edit user</h3>
                            {/* Modal body */}
                            <button className="btn btn-md btn-circle btn-error absolute right-2 top-2">✕</button>
                            <div className="p-6 space-y-6">
                                <form action="#">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="first-name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                defaultValue="Bonnie"
                                                id="first-name"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Bonnie"
                                                required
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="last-name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                name="last-name"
                                                defaultValue="Green"
                                                id="last-name"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Green"
                                                required
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="email"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                defaultValue="bonnie@flowbite.com"
                                                id="email"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="example@company.com"
                                                required
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="position"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Position
                                            </label>
                                            <input
                                                type="text"
                                                name="position"
                                                defaultValue="React Developer"
                                                id="position"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="e.g. React developer"
                                                required
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="current-password"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Current Password
                                            </label>
                                            <input
                                                type="password"
                                                name="current-password"
                                                defaultValue="••••••••"
                                                id="current-password"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="••••••••"
                                                required
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="new-password"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                New Password
                                            </label>
                                            <input
                                                type="password"
                                                name="new-password"
                                                defaultValue="••••••••"
                                                id="new-password"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="••••••••"
                                                required
                                            />
                                        </div>
                                        <div className="col-span-6">
                                            <label
                                                htmlFor="biography"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Biography
                                            </label>
                                            <textarea
                                                id="biography"
                                                rows={4}
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="👨‍💻Full-stack web developer. Open-source contributor."
                                                defaultValue={"👨‍💻Full-stack web developer. Open-source contributor."}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Modal footer */}
                            <div className="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                                <button type="submit" className='btn btn-success btn-block font-bold  text-lg'>Save All</button>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>

            {/* Add User Modal */}

        </main>
    );
};

export default AllUsers;