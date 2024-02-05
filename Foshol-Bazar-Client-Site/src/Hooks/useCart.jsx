import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const { user, loader } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: loadedCartItems = [], isLoading: isCartLoading, refetch: cartRefetch } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loader,
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/cart-items?email=${user?.email}`)
                // console.log("---------Cart data is loaded-------------");
                return res.data
            } catch (error) {
                throw error
            }
        }
    })

    return [loadedCartItems, isCartLoading, cartRefetch]

}

export default useCart;