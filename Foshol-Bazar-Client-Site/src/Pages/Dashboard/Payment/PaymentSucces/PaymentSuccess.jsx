import React from 'react';
import './PaymentSuccess.css'
import useCart from '../../../../Hooks/useCart';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
const PaymentSuccess = () => {
    const [axiosSecure] = useAxiosSecure();
    const [, , cartRefetch] = useCart()
    const params = useParams();
    useEffect(() => {
        const deletefunciotn = async () => {
            const response = await axiosSecure.delete(`/cartsItems/${params.tran_Id}`)
            if (response.data.deletedCount > 0) {
                cartRefetch();
                toast.success("Successfull")
            }
        }
        deletefunciotn();

    }, [params.tran_Id])

    return (
        <div className='min-h-screen flex flex-col  justify-center mx-auto w-full sm:w-1/2'>
            <div className='shadow-md shadow-cyan-500  p-8 sm:p-8 lg:p-20 '>
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
                <h1 className='text-orange-500 text-center mt-6 italic text-2xl  sm:text-5xl'>Payment Successfull</h1>
            </div>

        </div>
    );
};

export default PaymentSuccess;