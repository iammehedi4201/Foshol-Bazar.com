import React from 'react';
import { BiSolidCoupon } from "react-icons/bi";
import { Link } from 'react-router-dom';

const CouponsRow = ({ couponDetails }) => {

    const { _id, coupon, expiryDate } = couponDetails
    const today = new Date().toLocaleDateString('en-US', { timeZone: 'UTC' });
    const couponExpiryDate = new Date(expiryDate);
    const formattedExpiryDate = couponExpiryDate.toLocaleDateString('en-US', { timeZone: 'UTC' });
    console.log("ExpiryDate is :-", expiryDate);

    return (
        <tr className="bg-black border-4 border-slate-800 hover:bg-slate-800 ">
            <td className="px-6 py-4 font-bold text-gray-100 shadow-md shadow-cyan-600 text-center ">
                {coupon}
            </td>
            <td className="px-6 py-4 font-bold text-gray-100 shadow-md shadow-cyan-600 text-center ">
                {formattedExpiryDate}
            </td>
            <td className="px-6 py-4 font-bold text-gray-100 shadow-md shadow-cyan-600 text-center ">
                {today > formattedExpiryDate ? "Coupon expired" : "Coupon still valid"}
            </td>
            <td className="px-6 py-4 flex flex-col sm:flex-row flex-wrap  justify-center sm:justify-center items-center gap-2">
                <Link to={'/dashboard/couponsCandidates'} state={couponDetails} disabled={today > formattedExpiryDate} className="btn btn-success font-medium text-white bg-black hover:bg-slate-600 mx-5"

                >
                    <BiSolidCoupon className='text-xl text-orange-400'></BiSolidCoupon>
                    Coupon giveaway
                </Link>
            </td>
        </tr>
    );
};

export default CouponsRow;