import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../../../Shared/PageHeader/pageHeader';
import useOrders from '../../../../../Hooks/useOrders';
import AddReviewRow from '../AddReviewRow/AddReviewRow';
import { useContext } from 'react';
import { AuthContext } from '../../../../../Providers/AuthProvider';


const AddReview = () => {
    const { user } = useContext(AuthContext)
    const [orders, isOrdersLoading, orderRefetch] = useOrders(`/orders?email=${user?.email}`);
    console.log(orders);
    return (
        <div className='w-full min-h-screen'>
            <Helmet>
                <title>Foshol Bazar || Add Review Form</title>
            </Helmet>
            <PageHeader
                sectionBackText={"Add Review "}
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
                                <th scope="col" className="px-6 py-3 uppercase">
                                    Product Name
                                </th>
                                <th scope="col" className="px-6 py-3  font-semibold uppercase">
                                    Order Date
                                </th>
                                <th scope="col" className="px-6 py-3  font-semibold uppercase">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(item => <AddReviewRow
                                    key={item._id}
                                    item={item}
                                ></AddReviewRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default AddReview;