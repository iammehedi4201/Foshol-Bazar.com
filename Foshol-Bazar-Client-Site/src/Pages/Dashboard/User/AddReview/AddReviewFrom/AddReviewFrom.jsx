import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../../../Providers/AuthProvider';
import PageHeader from '../../../../../Shared/PageHeader/pageHeader';
import { useParams } from 'react-router-dom';

const AddReviewFrom = () => {
    const { id } = useParams();
    const [uid, orderId] = id.split(" ")
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const [rating, setRating] = useState(5);

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (formData) => {
        const data = {
            orderId,
            uid,
            userName: user?.displayName,
            userEmail: user?.email,
            photo: user?.photoURL,
            rating,
            Product: formData.Product,
            suggestion: formData.suggestion,
            Details: formData.Details
        };

        const response = await axiosSecure.post('/reviews', data)
            .then(response => {
                if (response.data.insertedId) {
                    reset();
                    toast.success('Review Added Successfully')
                }
            })

    };


    return (
        <div>
            <Helmet>
                <title>Foshol Bazar || Add Review Form</title>
            </Helmet>
            <PageHeader
                sectionBackText={"Review Form"}
                bgColor={"cyan"}
            ></PageHeader>

            <section className=' px-4 sm:px-8 lg:px-12 py-10 space-y-5'>
                <h1 className='text-3xl font-bold italic text-center text-white'>RATE US!</h1>
                <div className='flex justify-center '>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        onChange={setRating}

                    />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='max-w-4xl mx-auto space-y-5 shadow-2xl shadow-cyan-800 p-4 sm:p-8 lg:p-16'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-bold text-white">Which Product you liked most?</span>
                        </label>
                        <input type="text" {...register("Product", { required: true })} placeholder="Product you liked most" className="input input-bordered input-accent w-full h-16" />
                        {errors.Product?.type === 'required' && <p role="alert" className='text-red-700'>field is required</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-bold text-white ">Do you have any suggestion for us?</span>
                        </label>
                        <input type="text"{...register("suggestion", { required: true })} placeholder="Suggesstion" className="input input-bordered input-accent w-full h-16" />
                        {errors.suggestion?.type === 'required' && <p role="alert" className='text-red-700'>field is required</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold text-white ">Kindly express your care in a short way.</span>
                        </label>
                        <textarea {...register("Details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Review In Detail"></textarea>
                        {errors.Details?.type === 'required' && <p role="alert" className='text-red-700'>field is required</p>}
                    </div>
                    <button className='btn btn-block my-5 font-bold text-white' type="submit" style={{
                        background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)"
                    }}> Send Review
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_14_1839)">
                                <path d="M6.10492 6.4812L4.02565 6.64184C3.44708 6.68656 2.93179 6.98979 2.61182 7.47377L0.213854 11.1006C-0.0288162 11.4676 -0.067394 11.9269 0.110589 12.3293C0.288619 12.7317 0.654475 13.0121 1.08924 13.0794L2.99305 13.3743C3.43841 11.0108 4.50452 8.65323 6.10492 6.4812Z" fill="white" />
                                <path d="M10.626 21.0069L10.9209 22.9107C10.9882 23.3455 11.2686 23.7113 11.671 23.8893C11.8383 23.9634 12.0155 23.9999 12.1918 23.9999C12.4395 23.9999 12.6854 23.9278 12.8997 23.786L16.5266 21.3881C17.0106 21.0681 17.3138 20.5528 17.3584 19.9743L17.5191 17.895C15.347 19.4955 12.9894 20.5616 10.626 21.0069Z" fill="white" />
                                <path d="M9.90947 19.6874C9.97557 19.6874 10.042 19.682 10.1084 19.6709C11.0985 19.5054 12.0529 19.2265 12.9633 18.8614L5.13853 11.0366C4.77347 11.947 4.49456 12.9013 4.329 13.8916C4.26375 14.2819 4.39467 14.6795 4.67447 14.9594L9.04056 19.3255C9.27287 19.5577 9.58641 19.6874 9.90947 19.6874Z" fill="white" />
                                <path d="M22.0865 10.6407C24.0013 6.93881 24.0722 3.02684 23.9721 1.19216C23.9379 0.563527 23.4367 0.0623433 22.808 0.0280779C22.5093 0.0117655 22.1552 0 21.7562 0C19.7047 0 16.4586 0.310732 13.3595 1.9137C10.8966 3.18762 7.66708 5.99264 5.76172 9.67896C5.78422 9.69653 5.8062 9.71519 5.82692 9.73591L14.2644 18.1733C14.2851 18.1941 14.3037 18.216 14.3213 18.2385C18.0076 16.3331 20.8126 13.1036 22.0865 10.6407ZM13.9547 5.07371C15.3254 3.70305 17.5557 3.70291 18.9265 5.07371C19.5905 5.73769 19.9562 6.62057 19.9562 7.55961C19.9562 8.49865 19.5905 9.38154 18.9265 10.0455C18.2412 10.7308 17.3407 11.0735 16.4406 11.0736C15.5402 11.0736 14.6401 10.731 13.9547 10.0455C13.2907 9.38154 12.925 8.49865 12.925 7.55961C12.925 6.62057 13.2907 5.73769 13.9547 5.07371Z" fill="white" />
                                <path d="M14.9489 9.05108C15.7713 9.8735 17.1096 9.87355 17.932 9.05108C18.3304 8.65264 18.5498 8.12295 18.5498 7.55952C18.5498 6.99608 18.3304 6.46639 17.932 6.068C17.5208 5.65677 16.9806 5.45117 16.4404 5.45117C15.9003 5.45117 15.3601 5.65677 14.9489 6.068C14.5505 6.46639 14.3311 6.99608 14.3311 7.55952C14.3311 8.12295 14.5505 8.65269 14.9489 9.05108Z" fill="white" />
                                <path d="M0.717797 19.7783C0.89775 19.7783 1.0777 19.7097 1.21495 19.5723L3.51056 17.2767C3.78516 17.0021 3.78516 16.557 3.51056 16.2824C3.23602 16.0078 2.7908 16.0078 2.5162 16.2824L0.220594 18.578C-0.054 18.8526 -0.054 19.2977 0.220594 19.5723C0.357891 19.7096 0.537844 19.7783 0.717797 19.7783Z" fill="white" />
                                <path d="M5.61382 18.3861C5.33927 18.1115 4.89405 18.1115 4.61946 18.3861L0.205945 22.7996C-0.0686484 23.0742 -0.0686484 23.5194 0.205945 23.794C0.343242 23.9313 0.523195 23.9999 0.703148 23.9999C0.883102 23.9999 1.06305 23.9313 1.2003 23.7939L5.61377 19.3805C5.88841 19.1059 5.88841 18.6607 5.61382 18.3861Z" fill="white" />
                                <path d="M6.72319 20.4899L4.42763 22.7855C4.15303 23.0601 4.15303 23.5053 4.42763 23.7799C4.56492 23.9171 4.74488 23.9858 4.92478 23.9858C5.10469 23.9858 5.28469 23.9172 5.42194 23.7799L7.71755 21.4842C7.99214 21.2096 7.99214 20.7645 7.71755 20.4899C7.443 20.2153 6.99778 20.2153 6.72319 20.4899Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_14_1839">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg> </button>
                </form>
            </section>

        </div>
    );
};

export default AddReviewFrom;