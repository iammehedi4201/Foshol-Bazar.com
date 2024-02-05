import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../../Providers/AuthProvider';
import './Userhome.css'
const UserHome = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className='bg-[#1d1c22] min-h-screen p-10'>
            <Helmet>
                <title>Foshol Bazar || User Home </title>
            </Helmet>
            <h1 className='text-4xl italic text-white text-center mb-16 pt-10 w-full underline underline-offset-2 font-semibold'>Hi, Welcome Back!</h1>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8'>
                <section className="section about-section bg-[#1d1c22] w-full lg:col-span-2 shadow-md shadow-cyan-700" id="about w-full">
                    <div className="container mx-auto px-4">
                        <div className="  lg:flex lg:flex-row items-center justify-between">
                            <div className="w-full lg:w-6/12 ">
                                <div className="about-avatar ">
                                    <img className='mx-auto' src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt="" />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12">
                                <div className="about-text go-to">
                                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-100">About Me</h3>
                                    <h6 className="text-red-500 font-semibold lg:text-xl leading-relaxed">A Lead UX &amp; UI designer based in Canada</h6>
                                    <p className="text-white lg:text-lg">
                                        I <span className="bg-red-500 text-white font-semibold px-2 py-1 rounded">design and develop</span> services for customers of all sizes, specializing in creating stylish, modern websites, web services, and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.
                                    </p>
                                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 mt-4">
                                        <div className="media">
                                            <label className="font-semibold text-gray-100">Birthday</label>
                                            <p classname="text-white">4th April 1998</p>
                                        </div>
                                        <div className="media">
                                            <label className="font-semibold text-gray-100">Age</label>
                                            <p classname="text-white">22 Yr</p>
                                        </div>
                                        <div className="media">
                                            <label className="font-semibold text-gray-100">Residence</label>
                                            <p classname="text-white">Canada</p>
                                        </div>
                                        <div className="media">
                                            <label className="font-semibold text-gray-100">Address</label>
                                            <p classname="text-white">California, USA</p>
                                        </div>
                                        <div className="media">
                                            <label className="font-semibold text-gray-100">E-mail</label>
                                            <p classname="text-white">info@domain.com</p>
                                        </div>
                                        <div className="media">
                                            <label className="font-semibold text-gray-100">Phone</label>
                                            <p classname="text-white">820-885-3321</p>
                                        </div>
                                        <div className="media">
                                            <label className="font-semibold text-gray-100">Skype</label>
                                            <p classname="text-white">skype.0404</p>
                                        </div>
                                        <div className="media">
                                            <label className="font-semibold text-gray-100">Freelance</label>
                                            <p classname="text-white">Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className='p-5 space-y-5 flex flex-col justify-evenly bg-[#1d1c22] shadow-md shadow-cyan-800'>
                    <h1 className='text-white text-4xl text-center font-bold italic'>Your Activities</h1>
                    <article
                        className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6"
                    >
                        <div className="flex items-center gap-4">
                            <span className="hidden rounded-full bg-gray-100 p-2 text-gray-100 sm:block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_12_327)">
                                        <path d="M10.5937 22.5469C11.7587 22.5469 12.7031 21.6025 12.7031 20.4375C12.7031 19.2725 11.7587 18.3281 10.5937 18.3281C9.42871 18.3281 8.48431 19.2725 8.48431 20.4375C8.48431 21.6025 9.42871 22.5469 10.5937 22.5469Z" fill="#0088FE" />
                                        <path d="M17.6718 22.5469C18.8367 22.5469 19.7811 21.6025 19.7811 20.4375C19.7811 19.2725 18.8367 18.3281 17.6718 18.3281C16.5068 18.3281 15.5624 19.2725 15.5624 20.4375C15.5624 21.6025 16.5068 22.5469 17.6718 22.5469Z" fill="#0088FE" />
                                        <path d="M0.703121 2.85941H3.63528L7.02985 14.7428L6.7636 15.2753C6.06254 16.6759 7.08024 18.3281 8.6505 18.3281H20.4843C20.8729 18.3281 21.1874 18.0136 21.1874 17.625C21.1874 17.2363 20.8729 16.9218 20.4843 16.9218H8.6505C8.12836 16.9218 7.78711 16.372 8.02153 15.9042L8.21587 15.5156H20.4843C20.798 15.5156 21.0741 15.3076 21.1606 15.0054L23.9731 5.16171C24.0335 4.94956 23.991 4.72156 23.8584 4.54512C23.7252 4.36934 23.5172 4.26566 23.2968 4.26566H5.49948L4.84169 1.96331C4.75516 1.6612 4.47916 1.45312 4.16533 1.45312H0.703121C0.314483 1.45312 0 1.76761 0 2.15625C0 2.54488 0.314483 2.85941 0.703121 2.85941Z" fill="#0088FE" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12_327">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>

                            <div>
                                <p className="text-sm uppercase font-bold text-blue-600">Order</p>

                                <p className="text-2xl font-medium text-gray-900">$240.94</p>
                            </div>
                        </div>

                        <div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                />
                            </svg>

                            <span className="text-xs font-medium"> 67.81% </span>
                        </div>
                    </article>

                    <article
                        className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6"
                    >
                        <div className="flex items-center gap-4">
                            <span className="hidden rounded-full bg-gray-100 p-2 text-gray-100 sm:block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20.8941 1.41187H18.7765V3.52951C18.7765 3.95304 18.4235 4.23539 18.0706 4.23539C17.7176 4.23539 17.3647 3.95304 17.3647 3.52951V1.41187H6.07058V3.52951C6.07058 3.95304 5.71764 4.23539 5.3647 4.23539C5.01175 4.23539 4.65881 3.95304 4.65881 3.52951V1.41187H2.54117C1.48234 1.41187 0.705872 2.32951 0.705872 3.52951V6.07069H23.2941V3.52951C23.2941 2.32951 22.0235 1.41187 20.8941 1.41187ZM0.705872 7.55304V20.4707C0.705872 21.7413 1.48234 22.5883 2.61175 22.5883H20.9647C22.0941 22.5883 23.3647 21.6707 23.3647 20.4707V7.55304H0.705872ZM6.98822 19.4119H5.29411C5.01175 19.4119 4.7294 19.2001 4.7294 18.8472V17.0825C4.7294 16.8001 4.94117 16.5177 5.29411 16.5177H7.05881C7.34117 16.5177 7.62352 16.7295 7.62352 17.0825V18.8472C7.55293 19.2001 7.34117 19.4119 6.98822 19.4119ZM6.98822 13.0589H5.29411C5.01175 13.0589 4.7294 12.8472 4.7294 12.4942V10.7295C4.7294 10.4472 4.94117 10.1648 5.29411 10.1648H7.05881C7.34117 10.1648 7.62352 10.3766 7.62352 10.7295V12.4942C7.55293 12.8472 7.34117 13.0589 6.98822 13.0589ZM12.6353 19.4119H10.8706C10.5882 19.4119 10.3059 19.2001 10.3059 18.8472V17.0825C10.3059 16.8001 10.5176 16.5177 10.8706 16.5177H12.6353C12.9176 16.5177 13.2 16.7295 13.2 17.0825V18.8472C13.2 19.2001 12.9882 19.4119 12.6353 19.4119ZM12.6353 13.0589H10.8706C10.5882 13.0589 10.3059 12.8472 10.3059 12.4942V10.7295C10.3059 10.4472 10.5176 10.1648 10.8706 10.1648H12.6353C12.9176 10.1648 13.2 10.3766 13.2 10.7295V12.4942C13.2 12.8472 12.9882 13.0589 12.6353 13.0589ZM18.2823 19.4119H16.5176C16.2353 19.4119 15.9529 19.2001 15.9529 18.8472V17.0825C15.9529 16.8001 16.1647 16.5177 16.5176 16.5177H18.2823C18.5647 16.5177 18.847 16.7295 18.847 17.0825V18.8472C18.847 19.2001 18.6353 19.4119 18.2823 19.4119ZM18.2823 13.0589H16.5176C16.2353 13.0589 15.9529 12.8472 15.9529 12.4942V10.7295C15.9529 10.4472 16.1647 10.1648 16.5176 10.1648H18.2823C18.5647 10.1648 18.847 10.3766 18.847 10.7295V12.4942C18.847 12.8472 18.6353 13.0589 18.2823 13.0589Z" fill="#FFBB28" />
                                </svg>
                            </span>

                            <div>
                                <p className="text-sm text-[#FFBB28] uppercase font-bold">Booking</p>

                                <p className="text-2xl font-medium text-gray-900">$240.94</p>
                            </div>
                        </div>

                        <div className="inline-flex gap-2 rounded bg-red-100 p-1 text-red-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                                />
                            </svg>

                            <span className="text-xs font-medium"> 67.81% </span>
                        </div>
                    </article>
                    <article
                        className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6"
                    >
                        <div className="flex items-center gap-4">
                            <span className="hidden rounded-full bg-gray-100 p-2 text-gray-100 sm:block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_12_316)">
                                        <path d="M23.4791 10.9235C23.9515 10.4631 24.1182 9.78743 23.9145 9.15932C23.7102 8.53121 23.1782 8.08283 22.5246 7.98768L16.7135 7.1433C16.466 7.10726 16.2522 6.95203 16.1416 6.7276L13.5436 1.4624C13.2519 0.870815 12.6598 0.503174 12 0.503174C11.3407 0.503174 10.7486 0.870815 10.4569 1.4624L7.8584 6.72808C7.74787 6.95251 7.53354 7.10774 7.28604 7.14378L1.4749 7.98816C0.821801 8.08283 0.289322 8.53169 0.0850767 9.1598C-0.118688 9.78792 0.0480723 10.4636 0.520479 10.924L4.72504 15.0224C4.9043 15.1973 4.98648 15.4491 4.94419 15.6952L3.95228 21.4823C3.86433 21.9917 3.99793 22.4872 4.32761 22.8779C4.8399 23.4868 5.73426 23.6723 6.44935 23.2964L11.6463 20.5639C11.8635 20.45 12.137 20.451 12.3537 20.5639L17.5512 23.2964C17.8039 23.4296 18.0735 23.4968 18.3518 23.4968C18.8598 23.4968 19.3413 23.271 19.6724 22.8779C20.0026 22.4872 20.1357 21.9907 20.0478 21.4823L19.0554 15.6952C19.0131 15.4486 19.0952 15.1973 19.2745 15.0224L23.4791 10.9235Z" fill="#00C4A1" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12_316">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>

                            <div>
                                <p className="text-sm text-green-500 uppercase font-bold">Reviews</p>

                                <p className="text-2xl font-medium text-gray-900">$240.94</p>
                            </div>
                        </div>

                        <div className="inline-flex gap-2 rounded bg-red-100 p-1 text-red-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                                />
                            </svg>

                            <span className="text-xs font-medium"> 67.81% </span>
                        </div>
                    </article>
                    <article
                        className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6"
                    >
                        <div className="flex items-center gap-4">
                            <span className="hidden rounded-full bg-gray-100 p-2 text-gray-100 sm:block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_12_334)">
                                        <path d="M22.3635 19.6364H18.5454C16.1393 19.6364 14.1818 17.6789 14.1818 15.2728C14.1818 12.8668 16.1393 10.9093 18.5454 10.9093H22.3635C22.665 10.9093 22.909 10.6653 22.909 10.3638V8.7275C22.909 7.5837 22.0217 6.6535 20.9008 6.56329L17.7682 1.09179C17.4779 0.585754 17.0092 0.224073 16.4483 0.0738875C15.89 -0.0752748 15.3063 0.00306481 14.8066 0.293873L4.06801 6.5457H2.18198C0.978713 6.5457 0.000183105 7.52418 0.000183105 8.7275V21.8182C0.000183105 23.0215 0.978661 24 2.18198 24H20.7272C21.9304 24 22.909 23.0215 22.909 21.8182V20.1819C22.909 19.8804 22.665 19.6364 22.3635 19.6364ZM18.4447 4.4698L19.6332 6.5457H14.8791L18.4447 4.4698ZM6.23616 6.5457L15.3558 1.23666C15.6024 1.0923 15.8905 1.05395 16.166 1.12748C16.4446 1.20204 16.6768 1.38209 16.8212 1.63403L16.8223 1.63603L8.38953 6.5457H6.23616Z" fill="#FF8042" />
                                        <path d="M22.3635 12.0002H18.5454C16.7407 12.0002 15.2727 13.4682 15.2727 15.2729C15.2727 17.0776 16.7407 18.5456 18.5454 18.5456H22.3635C23.2659 18.5456 23.9999 17.8116 23.9999 16.9093V13.6366C23.9999 12.7342 23.2659 12.0002 22.3635 12.0002ZM18.5454 16.3638C17.944 16.3638 17.4545 15.8743 17.4545 15.2729C17.4545 14.6716 17.944 14.182 18.5454 14.182C19.1467 14.182 19.6363 14.6716 19.6363 15.2729C19.6363 15.8743 19.1468 16.3638 18.5454 16.3638Z" fill="#FF8042" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12_334">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>

                            <div>
                                <p className="text-sm text-[#FF8042] font-bold uppercase">Payment</p>

                                <p className="text-2xl font-medium text-gray-900">$240.94</p>
                            </div>
                        </div>

                        <div className="inline-flex gap-2 rounded bg-red-100 p-1 text-red-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                                />
                            </svg>

                            <span className="text-xs font-medium"> 67.81% </span>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default UserHome;