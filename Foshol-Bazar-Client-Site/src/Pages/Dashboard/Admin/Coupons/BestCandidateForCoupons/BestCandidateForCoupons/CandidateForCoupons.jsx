import React from 'react';
import { useLocation } from 'react-router-dom';
import useAxiosSecure from '../../../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import BestCandidateCard from '../../BestCandidateCard/BestCandidateCard';

const CandidateForCoupons = () => {
    const [axiosSecure] = useAxiosSecure();
    const location = useLocation();
    const { data: topCustomer_stats = [], isLoading: topCustomerStatsLoading } = useQuery({
        queryKey: ["topCustomer-stats"],
        queryFn: async () => {
            const response = await axiosSecure.get("/topCustomar-stats")
            return response.data;
        }
    })

    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            {
                topCustomer_stats.map(topCustomer => <BestCandidateCard
                    key={topCustomer.customarEmail}
                    topCustomer={topCustomer}
                    location={location}
                ></BestCandidateCard>)
            }
        </div>
    );
};

export default CandidateForCoupons;