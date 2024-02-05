import React from 'react';
import { Link } from 'react-router-dom';
import AddReviewRow_1 from './AddReviewRow_1';

const AddReviewRow = ({ item }) => {
    const { _id, date, orderItems, status } = item
    console.log(status);
    return (
        <>
            {
                orderItems.map(item => <AddReviewRow_1
                    key={item.productID}
                    item={item}
                    date={date}
                    _id={_id}
                    status={status}
                ></AddReviewRow_1>)
            }
        </>
    );
};

export default AddReviewRow;