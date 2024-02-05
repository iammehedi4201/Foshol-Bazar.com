import React from 'react';

const PaymentHistoryRow = ({payment}) => {

   const {customerEmail,phoneNumber,transactionId,totalPrice,date} = payment

    return (
        <tr className="bg-cyan-200  hover:bg-cyan-300 ">
            <td className="px-6 py-4 font-bold text-gray-900 ">
                {customerEmail}
            </td>
            <td className="px-6 py-4 font-bold text-gray-900">
                {phoneNumber || "01775777038"}
            </td>
            <td className="px-6 py-4 font-bold text-gray-900">
                {transactionId}
            </td>
            <td className="px-6 py-4 font-bold text-gray-900">
                {totalPrice}
            </td>
            <td className="px-6 py-4 font-bold text-gray-900 ">
                {date}
            </td>
        </tr>
    );
};

export default PaymentHistoryRow;