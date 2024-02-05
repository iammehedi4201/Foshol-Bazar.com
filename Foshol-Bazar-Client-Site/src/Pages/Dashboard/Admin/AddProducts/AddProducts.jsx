import React from "react";
import { Link } from "react-router-dom";
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import axios from "axios";
import toast from "react-hot-toast";
const img_hosting_token = import.meta.env.VITE_Image_upload_token;



const AddProducts = () => {
  const [axiosSecure] = useAxiosSecure()
  const img_hostion_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const formData = new FormData()
    formData.append("image", data.img[0])
    const uploadResponse = await axios.post(img_hostion_url, formData)
    if (uploadResponse.data.success) {
      const imgUrl = uploadResponse.data.data.display_url;
      const { name, categories, price, rating, description } = data
      const newItem = { name, categories, price: parseFloat(price), rating, description, img: imgUrl }
      const response = await axiosSecure.post('/newproducts', newItem)
        .then(response => {
          if (response.data.insertedId) {
            toast.success("New Product Added Successfully")
            reset()
          }
        })
    }

  }
  return (
    <div>
      {/* page header  */}
      <section className="bg-emerald-700 relative bg-img">
        <div className="flex items-center justify-center max-w-screen-xl min-h-[40vh] mx-auto">
          <section className="z-10 space-y-4">
            <h1 className="text-white font-bold text-4xl">Foshol Bazar</h1>
            <p className="text-white font-bold text-xl text-center">Home \ </p>
          </section>
        </div>
        <div className="white-curve-after hidden sm:block"></div>
        <div className="section-back-text">Add Products</div>
      </section>
      {/* ------------- */}
      <section className="bg-[#1d1c22]">
        <div className="flex items-center justify-center max-w-screen-xl min-h-screen mx-auto sm:p-5">
          <div className="w-full">
            <div className="bg-gray-100 text-gray-500 shadow-2xl shadow-[#3a826f] w-full overflow-hidden">
              <div className="w-full">
                <div className="w-full  py-10 px-5 md:px-10 bg-[#1d1c22] shadow-inner shadow-[#01291e]">
                  <div className="text-center mb-10 space-y-2">
                    <h1 className="font-bold text-3xl text-emerald-700">
                      ADD PRODUCT
                    </h1>
                    <p className="text-gray-300 text-sm font-semibold">
                      Enter your Product Information
                    </p>
                  </div>
                  <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/2  px-3 mb-5">
                          <label
                            htmlFor=""
                            className="text-md text-white  font-bold px-1"
                          >
                            Product Name
                          </label>
                          <div className="">
                            <input
                              type="text"
                              {...register("name", { required: true })}
                              className="w-full text-gray-100  bg-gray-600  pl-10 pr-3 py-2 mt-2 rounded-lg border-2 border-gray-600 outline-none focus:border-emerald-700"
                              placeholder="Product Name "
                            />
                            {
                              errors.name?.type === 'required' && <p className='text-red-700'>Prdouct  Name is required</p>
                            }
                          </div>
                        </div>
                        <div className="w-full sm:w-1/2 px-3 mb-5">
                          <label
                            htmlFor=""
                            className="text-md text-white font-bold px-1"
                          >
                            Categories
                          </label>
                          <div className="">
                            <input
                              type="text"
                              {...register("categories", { required: true })}
                              className="w-full text-gray-100  bg-gray-600   pl-10 pr-3 py-2 mt-2 rounded-lg border-2 border-gray-600 outline-none focus:border-emerald-700"
                              placeholder="categories"
                            />
                            {
                              errors.categories?.type === 'required' && <p className='text-red-700'>Prdouct Categories  is required</p>
                            }
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row ">
                        <div className="w-full sm:w-1/2 px-3 mb-5">
                          <label
                            htmlFor=""
                            className="text-md text-white  font-bold px-1"
                          >
                            Price
                          </label>
                          <div className="">
                            <input
                              type="number"
                              {...register("price", { required: true })}
                              className="w-full text-gray-100  bg-gray-600   pl-10 pr-3 py-2 mt-2 rounded-lg border-2 border-gray-600 outline-none focus:border-emerald-700"
                              placeholder="$255"
                            />
                            {
                              errors.price?.type === 'required' && <p className='text-red-700'>Price  is required</p>
                            }
                          </div>
                        </div>
                        <div className="w-full sm:w-1/2 px-3 mb-5">
                          <label
                            htmlFor=""
                            className="text-md text-white font-bold px-1"
                          >
                            Rating
                          </label>
                          <div className="">
                            <input
                              type="number"
                              {...register("rating", { required: true })}
                              className="w-full  pl-10 pr-3 py-2 mt-2 text-gray-100  bg-gray-600 rounded-lg border-2 border-gray-600 outline-none focus:border-emerald-700"
                              placeholder="4.5"
                            />
                            {
                              errors.rating?.type === 'required' && <p className='text-red-700'>Rating is required</p>
                            }
                          </div>
                        </div>
                      </div>
                      <div className="flex ">
                        <div className="w-full px-3 mb-5">
                          <label
                            htmlFor=""
                            className="text-md font-semibold px-1 text-white"
                          >
                            Description
                          </label>
                          <div className="flex">
                            <textarea
                              {...register("description", { required: true })}
                              rows="8"
                              className="block p-2.5 w-full mt-2 text-md font-semibold text-gray-100  bg-gray-600 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Your description here"
                            ></textarea>
                            {
                              errors.description?.type === 'required' && <p className='text-red-700'>Description is required</p>
                            }
                          </div>
                        </div>
                      </div>
                      <div className="form-control w-full     ">
                        <label className="label">
                          <span className="label-text text-lg text-white font-bold">Pick a Image</span>
                        </label>
                        <input type="file" className="file-input file-input-success w-full" {...register("img", { required: true })} />
                        {
                          errors.img?.type === 'required' && <p className='text-red-700'>file is required</p>
                        }
                      </div>
                      <div className="flex -mx-3 my-10">
                        <div className="w-full px-3 mb-5">
                          <button
                            type="submit"
                            className="block w-full max-w-xs mx-auto bg-emerald-700 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                          >
                            ADD PRODUCT
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProducts;
