import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useOrders = (route) => {
    console.log(route);
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { data: orders = [], isLoading: isOrdersLoading, refetch: orderRefetch } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            const response = await axiosSecure.get(route)
            return response.data
        }
    })

    return [orders, isOrdersLoading, orderRefetch]
}

export default useOrders;