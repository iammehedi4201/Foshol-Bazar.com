import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../../../../Shared/PageHeader/pageHeader';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../../../Hooks/useAxiosSecure';
import PaymentHistoryRow from '../PaymentHistoryRow/PaymentHistoryRow';
import useOrders from '../../../../../../Hooks/useOrders';
import { AuthContext } from '../../../../../../Providers/AuthProvider';

const PaymentHistory = () => {
    const { user } = useContext(AuthContext)
    const [orders, isOrdersLoading, orderRefetch] = useOrders(`/orders?email=${user?.email}`);

    if (isOrdersLoading) {
        console.log("payment loading is called ");
        return <div>Loading .......</div>
    }

    return (
        <div className='w-full min-h-screen'>
            <Helmet>
                <title>Foshol Bazar || Payment History</title>
            </Helmet>
            <PageHeader
                sectionBackText={"Payment Record"}
                bgColor={'cyan'}
            ></PageHeader>
            <section className='w-full p-4 sm:p-8 lg:p-8 shadow-md shadow-cyan-900'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                        {/* Table headers go here */}
                        <thead className="text-sm text-gray-100 uppercase  bg-cyan-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 uppercase">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 uppercase">
                                    Phone
                                </th>
                                <th scope="col" className="px-6 py-3  font-semibold uppercase">
                                    Transcation ID
                                </th>
                                <th scope="col" className="px-6 py-3  font-semibold uppercase">
                                    ToTal Price
                                </th>
                                <th scope="col" className="px-6 py-3  font-semibold uppercase">
                                    Payment data
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(payment => <PaymentHistoryRow
                                    key={payment._id}
                                    payment={payment}
                                ></PaymentHistoryRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default PaymentHistory;