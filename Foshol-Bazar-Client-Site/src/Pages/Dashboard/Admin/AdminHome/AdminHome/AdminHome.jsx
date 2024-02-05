import React from 'react';
import { Helmet } from 'react-helmet-async';
import StatisticsCard from '../statisticsCards/StatisticsCard';
import StatisticThisMonth from '../StatisticThisMonth/StatisticThisMonth';
import FlowChartOfProducts from '../FlowChartOfProducts/FlowChartOfProducts';
import LastesActvityCards from '../LastestActvityCards/LastesActvityCards';
import ManageOrders from '../../ManageOrders/ManageOrders/ManageOrders';
import Coupons from '../../Coupons/Coupons/Coupons';

const AdminHome = () => {
    return (
        <div className='space-y-8 p-10'>
            <Helmet>
                <title>Foshol Bazar || Admin Home </title>
            </Helmet>
            <StatisticsCard></StatisticsCard>
            <StatisticThisMonth></StatisticThisMonth>
            <FlowChartOfProducts></FlowChartOfProducts>
            <LastesActvityCards></LastesActvityCards>
            <ManageOrders></ManageOrders>
        </div>
    );
};

export default AdminHome;