import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useProducts = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: products = [], isLoading: isProductLoading, refetch: productsRefetch } = useQuery({
        queryKey: ["Products"],
        queryFn: async () => {
            const response = await axiosSecure.get('/products')
            return await response.data.products
        }
    })

    return [products, isProductLoading, productsRefetch]

}

export default useProducts;