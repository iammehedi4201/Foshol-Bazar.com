import React, { useContext } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn, user } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/'
    const handleLoginWithGoogle = async () => {
        try {
            const loggedUser = await googleSignIn();
            const userInfo = { name: loggedUser?.user?.displayName, email: loggedUser?.user?.email, photoURL: loggedUser?.user?.photoURL }
            const response = await axios.post("https://foshol-bazar.onrender.com/users", userInfo)
            navigate(from, { replace: true });
        } catch (error) {
            throw error
        }
    }

    return (
        <div>
            <hr className="my-12 mx-auto w-2/3 h-0.5 border-t-0 bg-white opacity-100 dark:opacity-50" />
            <div className="flex flex-wrap ">
                <div className="w-full py-2 lg:px-2 lg:py-0 lg:w-1/2">
                    <a
                        href="#"
                        className="cursor-pointer flex items-center justify-center p-3 bg-blue-800 rounded-md hover:bg-blue-600 dark:hover:bg-gray-800"
                    >
                        <span className="inline-block mr-2 text-gray-300 dark:text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-facebook"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                            </svg>
                        </span>
                        <span className="text-xs font-medium text-gray-200 uppercase lg:text-sm dark:text-gray-300">
                            Facebook
                        </span>
                    </a>
                </div>
                <div className="w-full py-2 lg:px-2 lg:py-0 lg:w-1/2">
                    <a onClick={handleLoginWithGoogle}
                        className="cursor-pointer flex items-center justify-center p-3 bg-red-700 rounded-md dark:bg-red-700 hover:bg-red-500 dark:hover:bg-gray-800"
                    >
                        <span className="inline-block mr-2 text-gray-300 dark:text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-google"
                                viewBox="0 0 16 16"
                            >
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                            </svg>
                        </span>
                        <span className="text-xs font-medium text-gray-200 uppercase lg:text-sm dark:text-gray-300">
                            Google
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;