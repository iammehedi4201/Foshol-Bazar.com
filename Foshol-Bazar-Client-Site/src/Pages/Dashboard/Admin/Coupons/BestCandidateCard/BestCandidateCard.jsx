import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../../Providers/AuthProvider';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';


const BestCandidateCard = ({ topCustomer, location }) => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { customarName, phoneNumber, buyProductCount, totalSpent } = topCustomer
    const couponDetails = location.state;

    //handle Coupon giveaway
    const handleGiveCoupon = async (couponDetails, topCustomar) => {
        const CustomerDetails = {
            customarName: topCustomar.customarName,
            phoneNumber: topCustomar.phoneNumber,
            couponCode: couponDetails.coupon,
            couponExpiry: couponDetails.expiryDate
        }

        const response = await axiosSecure.post('/sendCoupons', CustomerDetails)
            .then(response => {
                console.log();
            })


    }


    return (
        <div class="rounded-xl overflow-hidden shadow-md max-w-lg mx-3 my-3 bg-cyan-900 shadow-black">
            <img src="https://i.postimg.cc/zBHHcmqr/photo-1478760329108-5c3ed9d495a0.png" class="w-full h-56" />
            <div class="flex justify-center -mt-8">
                <img src={user?.photoURL} class="rounded-full border-solid border-white border-2 -mt-3 object-cover w-28 h-28" />
            </div>
            <div class="text-center px-3 pb-6 pt-2">
                <h3 class="text-white text-md font-bold font-sans">{customarName}</h3>
                <p class="mt-2 font-sans font-light text-white"></p>
            </div>
            <div class="flex justify-center pb-3 text-white">
                <div class="text-center mr-3 border-r pr-3">
                    <h2>{buyProductCount}</h2>
                    <span className='font-bold'>Total Product Buy</span>
                </div>
                <div class="text-center">
                    <h2>${totalSpent}</h2>
                    <span className='font-bold'>Total Spent</span>
                </div>
            </div>
            <div class="text-center my-5">
                <button onClick={() => handleGiveCoupon(couponDetails, topCustomer)} className='btn btn-neutral text-yellow-500'>Give Coupon {couponDetails.coupon}</button>
            </div>
        </div>
    );
};

export default BestCandidateCard;