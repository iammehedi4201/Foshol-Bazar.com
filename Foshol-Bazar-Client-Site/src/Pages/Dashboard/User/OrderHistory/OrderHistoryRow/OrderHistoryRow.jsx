import React from 'react';

const OrderHistoryRow = ({ item }) => {
    const { _id, date, orderItems, status } = item
    //todo : show the pennding status 
    return (
        <>
            {
                orderItems.map(item => <tr key={item.ProductID} className="bg-black border-4 border-slate-800 hover:bg-slate-800 ">
                    <td className="w-32 p-4 ">
                        <img src={item.productImg} alt={item.productName} />
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-100 shadow-md shadow-cyan-600 ">
                        {item.productName}
                    </td><td className="px-6 py-4 font-bold text-gray-100 shadow-md shadow-cyan-600 ">
                        {date}
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-100 shadow-md shadow-cyan-600">
                        {item.productQuantity}
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-100 shadow-md shadow-cyan-600">
                        {item.productPrice * item.productQuantity}
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-100 shadow-md shadow-cyan-600">
                        {status}
                    </td>
                </tr>)
            }
        </>
    );
};

export default OrderHistoryRow;