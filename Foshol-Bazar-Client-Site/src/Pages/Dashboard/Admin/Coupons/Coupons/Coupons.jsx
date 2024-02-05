import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useCoupons from '../../../../../Hooks/useCoupons';
import CouponsRow from '../CouponsRow/CouponsRow';
const Coupons = () => {
    const [coupons, isCouponLoading, couponRefetch] = useCoupons();
    console.log(coupons);
    const [axiosSecure] = useAxiosSecure();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const response = await axiosSecure.post('/coupons', data)
            .then(response => {
                couponRefetch();
                if (response.data.insertedId || response.data.modifiedCount > 0) {
                    toast.success("Coupon Created Successfully")
                }
            })
    }

    return (
        <div className='my-10'>
            <form onSubmit={handleSubmit(onSubmit)} class="relative flex flex-col text-gray-100 bg-black  w-full rounded-xl bg-clip-border shadow-md shadow-cyan-900">
                <div class="relative grid mx-4 mb-4 -mt-2 overflow-hidden  shadow-lg h-24 place-items-center rounded-xl bg-gradient-to-tr from-cyan-900 to-cyan-400 bg-clip-border ">
                    <h3 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
                        Create Coupons
                    </h3>
                </div>
                <div class="flex flex-col sm:flex-row gap-4 p-6">
                    <div className='flex-1'>
                        <div class="relative h-16 w-full min-w-[200px]">
                            <input
                                type='text'
                                {...register("coupon", { required: true })}
                                class="bg-white text-black w-full h-full px-3 py-3 font-sans text-md font-normal transition-all  border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeHolder="Enter you coupons Name "
                            />
                            {errors.coupon?.type === 'required' && <p role="alert" className='text-red-700'>field is required</p>}
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div class="relative h-16 w-full min-w-[200px]">
                            <input
                                type='date'
                                {...register("expiryDate", { required: true })}
                                className="bg-white text-black w-full h-full px-3 py-3 font-sans text-md font-normal transition-all border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeHolder=" "
                            />
                            {errors.expiryDate?.type === 'required' && <p role="alert" className='text-red-700'>field is required</p>}
                        </div>
                    </div>

                </div>
                <div class="p-6 pt-0">
                    <button
                        class="block w-full select-none rounded-lg bg-gradient-to-tr from-orange-500 to-orange-400 py-4 px-6 text-center align-middle font-sans text-xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="submit"

                    >
                        Create Now
                    </button>
                </div>
            </form>
            <div className='my-5'>
                <section className='w-full p-4 sm:p-8 lg:p-8 shadow-md shadow-cyan-900'>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                            {/* Table headers go here */}
                            <thead className="text-sm text-gray-100 uppercase  bg-cyan-900">
                                <tr>
                                    <th scope="col" className="px-6 py-3 uppercase text-center">
                                        Coupon Name
                                    </th>
                                    <th scope="col" className="px-6 py-3  font-semibold uppercase text-center">
                                        Expiry Data
                                    </th>
                                    <th scope="col" className="px-6 py-3  font-semibold uppercase text-center">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3  font-semibold uppercase text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    coupons.map(coupon => <CouponsRow
                                        key={coupon._id}
                                        couponDetails={coupon}
                                    ></CouponsRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Coupons;