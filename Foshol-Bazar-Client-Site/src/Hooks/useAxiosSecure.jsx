import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const axiosSecure = axios.create({
    baseURL: 'https://foshol-bazar.onrender.com',
});

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('bazar-access-token');
            // console.log("token is from UseAxiosSecure :-", token);
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => {
                //!if problem then remove it 
                return response;
            },
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }, [logOut, navigate]);

    return [axiosSecure];
};

export default useAxiosSecure;