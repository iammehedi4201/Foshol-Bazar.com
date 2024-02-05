import React from 'react';
import { Link } from 'react-router-dom';
import './AddReviewRow_1.css'

const AddReviewRow_1 = ({ item, date, _id, status }) => {
    const { uid,ProductID, productImg, productName, reviewStatus } = item

    console.log("The product uid is :-",uid);

    return (
        <tr className={`bg-black border-4 border-slate-800 hover:bg-slate-800 ${status === "Pending" ? "hidden" : ' '}`}>
            <td className="w-32 p-4 ">
                <img src={productImg} alt={item.productName} />
            </td>
            <td className="px-6 py-4 font-bold text-gray-100 shadow-md shadow-cyan-600 ">
                {productName}
            </td><td className="px-6 py-4 font-bold text-gray-100 shadow-md shadow-cyan-600 ">
                {date}
            </td>
            <td className="px-6 py-4 font-bold text-gray-100 shadow-md shadow-cyan-600">

                {reviewStatus ? (
                    <button className="btn text-white shadow-md shadow-cyan-600" disabled>
                        Review Submitted
                    </button>
                ) : (
                    <Link to={uid + " " + _id} className='btn btn-info shadow-md shadow-cyan-600'>Give Review</Link>
                )}
            </td>
        </tr>
    );
};

export default AddReviewRow_1;