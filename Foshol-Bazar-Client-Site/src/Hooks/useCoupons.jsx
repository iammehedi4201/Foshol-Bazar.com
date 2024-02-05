import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCoupons = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: coupons = [], isLoading: isCouponLoading, refetch: couponRefetch } = useQuery({
        queryKey: ["coupons"],
        queryFn: async () => {
            const response = await axiosSecure.get('/coupons')
            return response.data
        }
    })

    return [coupons, isCouponLoading, couponRefetch];

}

export default useCoupons;