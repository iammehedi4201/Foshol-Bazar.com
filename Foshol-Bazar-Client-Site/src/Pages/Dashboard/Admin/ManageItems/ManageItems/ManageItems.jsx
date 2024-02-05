import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../../../Shared/PageHeader/pageHeader';
import useProducts from '../../../../../Hooks/useProducts';
import ManageItemRow from '../ManageItemRow/ManageItemRow';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import ReactPaginate from 'react-paginate';

const ManageItems = () => {
    const itemsPerpage = 5;
    const [currentPage, setCurrentPage] = useState(0)
    const [axiosSecure] = useAxiosSecure();
    const [products, isProductLoading, productsRefetch] = useProducts();
    const [selectedProduct, setSelectedProduct] = useState([])
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await axiosSecure.put(`/products/${selectedProduct?._id}`, data)
                .then(response => {
                    if (response.data.modifiedCount > 0) {
                        toast.success(`${selectedProduct.name} is update Successfully`)
                        productsRefetch();
                        reset();
                    }
                })

        } catch (error) {
            throw error
        }
    }

    if (isProductLoading) {
        return <div className="bg-black w-full min-h-screen flex items-center justify-center">
            <span className="loading loading-infinity loading-lg text-white"></span>
        </div>
    }

    //Calculate the number of pages 
    const pageCount = Math.ceil(products.length / itemsPerpage)

    //Function to handle page change 
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected)
    }

    //slice the menu item based on the current page 
    const sliceProducts = products.slice(
        currentPage * itemsPerpage,
        (currentPage + 1) * itemsPerpage
    )

    return (
        <div>
            <Helmet>
                <title>Foshol Bazar || Manage Items</title>
            </Helmet>
            <PageHeader
                sectionBackText={'Manage Items'}
                bgColor={"cyan"}
            ></PageHeader>
            <section className='w-full p-4 sm:p-8 lg:p-8 shadow-md shadow-cyan-900'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                        {/* Table headers go here */}
                        <thead className="text-sm text-gray-100 uppercase  bg-cyan-900">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3 uppercase text-center">
                                    Product Name
                                </th>
                                <th scope="col" className="px-6 py-3  font-semibold uppercase text-center">
                                    categories
                                </th>
                                <th scope="col" className="px-6 py-3  font-semibold uppercase text-center">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3  font-semibold uppercase text-center">
                                    rating
                                </th>
                                <th scope="col" className="px-6 py-3  font-semibold uppercase text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sliceProducts.map(product => <ManageItemRow
                                    key={product._id}
                                    product={product}
                                    setSelectedProduct={setSelectedProduct}
                                    productsRefetch={productsRefetch}
                                ></ManageItemRow>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className="pagination-container ">
                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName={'pagination flex space-x-4 justify-center mt-4'}
                        pageClassName={'hidden sm:flex rounded-lg border bg-cyan-500 hover:bg-cyan-800 text-white font-samibold transition duration-300 ease-in-out px-4 py-2 border-cyan-500 '}
                        activeClassName={'border-slate-500 text-white bg-slate-500'}
                        previousClassName={'rounded-lg border bg-cyan-500 hover:bg-cyan-800 text-white font-samibold transition duration-300 ease-in-out  px-4 py-2 border-cyan-500'}
                        nextClassName={'rounded-lg border bg-cyan-500 hover:bg-cyan-800 text-white font-samibold  transition duration-300 ease-in-out px-4 py-2 border-cyan-500'}
                        breakClassName={'rounded-full border text-white px-4 py-2 border-cyan-500 hidden sm:flex'}
                    />
                </div>
            </section>
            {/* Edit User Modal */}
            <input type="checkbox" id="my_modal_58" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box Edit-modal-box relative shadow-md shadow-cyan-800">
                    {/* if there is a button in form, it will close the modal */}
                    {/* Modal content */}
                    <div className="relative  bg-[#1d1c22] rounded-lg shadow ">
                        {/* Modal header */}
                        <h3 className="text-3xl font-semibold dark:text-white text-center py-5">Edit user</h3>
                        {/* Modal body */}
                        <div className="modal-action">
                            <label htmlFor="my_modal_58" className="btn btn-md btn-circle btn-error absolute right-2 top-2">
                                ✕
                            </label>
                        </div>
                        <div className="p-6 space-y-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Product Name
                                        </label>
                                        <input
                                            type="text"
                                            {...register("name")}
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            defaultValue={selectedProduct?.name}

                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Categories
                                        </label>
                                        <input
                                            type="text"
                                            {...register("categories")}
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            defaultValue={selectedProduct?.categories}
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            {...register("price")}
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            defaultValue={selectedProduct?.price}
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Rating
                                        </label>
                                        <input
                                            type="number"
                                            {...register("rating")}
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            defaultValue={selectedProduct?.rating}
                                        />
                                    </div>
                                    <div className="col-span-6">
                                        <label
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            PhotoUrl
                                        </label>
                                        <input
                                            type="text"
                                            {...register("img")}
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            defaultValue={selectedProduct?.img}
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
                                            rows={4}
                                            {...register("description")}
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            defaultValue={selectedProduct?.description}
                                        />
                                    </div>
                                </div>
                                {/* Modal footer */}
                                <div className="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                                    <button type="submit" className='btn btn-success btn-block font-bold  text-lg'>
                                        <label htmlFor="my_modal_58">Update Info</label>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ManageItems;