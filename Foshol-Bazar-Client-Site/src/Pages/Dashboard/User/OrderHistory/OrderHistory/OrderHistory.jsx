import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../../../Shared/PageHeader/pageHeader';
import useOrders from '../../../../../Hooks/useOrders';
import OrderHistoryRow from '../OrderHistoryRow/OrderHistoryRow';
import { AuthContext } from '../../../../../Providers/AuthProvider';

const OrderHistory = () => {
    const { user } = useContext(AuthContext)
    const [orders, isOrdersLoading, orderRefetch] = useOrders(`/orders?email=${user?.email}`);
    return (
        <div>
            <Helmet>
                <title>Foshol Bazar || Order History</title>
            </Helmet>
            <PageHeader
                sectionBackText={"Order History"}
                bgColor={"cyan"}
            ></PageHeader>
            <section className='p-4 sm:p-8 lg:p-8 shadow-md shadow-cyan-900'>
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
                                    Product Quantity
                                </th>
                                <th scope="col" className="px-6 py-3  font-semibold uppercase">
                                    Product Price
                                </th>
                                <th scope="col" className="px-6 py-3  font-semibold uppercase">
                                    Order Receive
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(item => <OrderHistoryRow
                                    key={item._id}
                                    item={item}
                                ></OrderHistoryRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default OrderHistory;