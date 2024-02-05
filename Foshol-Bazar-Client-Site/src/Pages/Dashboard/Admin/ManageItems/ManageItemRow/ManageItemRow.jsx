import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageItemRow = ({ product, setSelectedProduct, productsRefetch }) => {
    const [axiosSecure] = useAxiosSecure();
    const { name, price, categories, rating, img } = product

    const handleEditProduct = async (product) => {
        await setSelectedProduct(product)
    }

    const handleDelete = async (product) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await axiosSecure.delete(`/products/${product._id}`)
                    .then(response => {
                        if (response.data.deletedCount > 0) {
                            productsRefetch()
                            Swal.fire(
                                'Deleted!',
                                `${product?.name} has been deleted.`,
                                'success'
                            )
                        }
                    })
            }
        })

    }


    return (
        <tr className="bg-black border-4 border-slate-800 hover:bg-slate-800 ">
            <td className="w-full sm:w-32 p-4 ">
                <img className='w-full' src={img} alt={name} />
            </td>
            <td className="px-6 py-4 font-bold text-gray-100 shadow-md shadow-cyan-600 text-center ">
                {name}
            </td>
            <td className="px-6 py-4 font-bold text-gray-100 shadow-md shadow-cyan-600 text-center ">
                {categories}
            </td>
            <td className="px-6 py-4 font-bold text-gray-100 shadow-md shadow-cyan-600 text-center ">
                {price}
            </td>
            <td className="px-6 py-4 font-bold  text-gray-100 shadow-md shadow-cyan-600 text-center ">
                {rating}
            </td>
            <td className="px-6 py-4 flex sm:flex-row flex-wrap  justify-center sm:justify-normal ">
                <label htmlFor='my_modal_58' onClick={() => handleEditProduct(product)} className="btn font-medium text-white bg-yellow-700 hover:bg-yellow-900 mx-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </label>
                <button onClick={() => handleDelete(product)} className="btn font-medium text-white bg-red-700 hover:bg-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                    </svg>
                </button>
            </td>
        </tr>
    );
};

export default ManageItemRow;