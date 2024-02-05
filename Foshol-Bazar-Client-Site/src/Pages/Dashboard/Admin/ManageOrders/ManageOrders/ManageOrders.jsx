import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../../../Shared/PageHeader/pageHeader';
import useOrders from '../../../../../Hooks/useOrders';
import ManageOrderRow from '../ManageOrderRow/ManageOrderRow';
import { AuthContext } from '../../../../../Providers/AuthProvider';

const ManageOrders = () => {
    const { user } = useContext(AuthContext)
    const [orders, isOrdersLoading, orderRefetch] = useOrders(`/orders`);

    if (isOrdersLoading) {
        return <div className="bg-black w-full min-h-screen flex items-center justify-center">
            <span className="loading loading-infinity loading-lg text-white"></span>
        </div>
    }

    return (
        <div>
            <Helmet>
                <title>Foshol Bazar || Manage Orders</title>
            </Helmet>
            <PageHeader
                sectionBackText={"Manage Orders"}
                bgColor={'cyan'}
            ></PageHeader>
            <section className='w-full p-4 sm:p-8 lg:p-8 shadow-md shadow-cyan-900'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                        {/* Table headers go here */}
                        <thead className="text-sm text-gray-100 uppercase  bg-cyan-900">
                            <tr>
                                <th scope="col" className="px-6 py-3 uppercase text-center">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3  font-semibold uppercase text-center">
                                    Phone Number
                                </th>
                                <th scope="col" className="px-6 py-3  font-semibold uppercase text-center">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3  font-semibold uppercase text-center">
                                    Booking Date
                                </th>
                                <th scope="col" className="px-6 py-3  font-semibold uppercase text-center">
                                    Activity
                                </th>
                                <th scope="col" className="px-6 py-3  font-semibold uppercase text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <ManageOrderRow
                                    key={order._id}
                                    order={order}
                                    orderRefetch={orderRefetch}
                                ></ManageOrderRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ManageOrders;