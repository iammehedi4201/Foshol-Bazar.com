import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
;

const useUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], isLoading: isUserLoading, refetch: userRefetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = axiosSecure.get('/users');
            return (await response).data
        }
    })

    return [users, isUserLoading, userRefetch];

}

export default useUsers;