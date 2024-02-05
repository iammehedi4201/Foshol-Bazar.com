import React, { useEffect, useRef, useState } from "react";
import "./ShopProduts.css";
import Product from "../Product/Product";
import { useLoaderData, useLocation } from "react-router-dom";
import Rating from "react-rating";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useCart from "../../../Hooks/useCart";
import PageHeader from "../../../Shared/PageHeader/pageHeader";
const ShopProducts = () => {
  const location = useLocation()
  console.log(location);
  const { user } = useContext(AuthContext);
  const [, , cartRefetch] = useCart();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [productDetails, setProductDetails] = useState({});
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [quntity, setQuntity] = useState(1);
  const [loader, setLoader] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [selectCategoryValue, setSelectCategoryValue] = useState("")
  // const search = useRef(null);



  //TODO----------For The pagination---------------
  //load Product Count
  const [productsCount, setProductsCounnt] = useState('');
  const [currentPage, setCurrentPage] = useState(0); //current kon page achi
  const [pageSize, setPageSize] = useState(12);
  const totalPages = Math.ceil(productsCount / pageSize);

  const handlePageChange = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageButtons = () => {
    const maxVisibleButtons = 4;
    const startPage =
      Math.floor(currentPage / maxVisibleButtons) * maxVisibleButtons;

    return [...Array(Math.min(maxVisibleButtons, totalPages - startPage))].map(
      (_, index) => (
        <button
          key={index + startPage}
          onClick={() => handlePageChange(index + startPage)}
          className={`flex btn btn-error center px-4 h-12 w-20 leading-tight ${currentPage === index + startPage
            ? "bg-green-500 text-gray-100 border-0"
            : "text-gray-100 hover:bg-orange-400 hover:text-gray-700 "
            }`}
        >
          {index + startPage + 1}
        </button>
      )
    );
  };


  //Todo----------Data Load Form Database---------------
  useEffect(() => {
    fetch(
      `https://foshol-bazar.onrender.com/products?currentPage=${currentPage}&pageSize=${pageSize}&search=${searchValue}&category=${selectCategoryValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoadedProducts(data.products);
        setProductsCounnt(data.productsCount);
        setLoader(false);
      })
      .catch((error) => console.error(error));
  }, [currentPage, pageSize, searchValue, selectCategoryValue]);



  //handle increase  quntity
  const handleIncrease = () => {
    setQuntity(quntity + 1);
  };

  //handle Decrease quntity
  const handleDecrease = () => {
    if (quntity > 1) {
      setQuntity(quntity - 1);
    }
  };

  console.log("Selected Product : -", selectedProduct._id);

  //Todo handle add to cart
  const userName = user?.displayName;
  const userEmail = user?.email;
  const handleAddToCart = () => {
    const orderInfo = {
      userName,
      userEmail,
      ProductID: selectedProduct._id,
      productName: selectedProduct.name,
      productImg: selectedProduct.img,
      productPrice: selectedProduct.price,
      productRating: selectedProduct.rating,
      productCategories: selectedProduct.categories,
      productDescription: selectedProduct.description,
      productQuantity: quntity,
    };

    fetch("https://foshol-bazar.onrender.com/cart-items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.upsertedCount > 0) {
          toast.success("Order Placed successfully");
          cartRefetch();
          setQuntity(1);
        } else if (data.modifiedCount > 0) {
          toast.success("updated the orderInfo ");
        }
      })
      .catch((error) => console.error(error));
  };


  //todo Loader Set 
  /* I set loader bcz jokhon page refresh kore hoy tokhon pagination button gulo uper chole bcz mongodb theke data ashte tym lage  */
  if (loader) {
    console.log("shopProduct loader is called");
    return <div className="bg-[#263038] w-full min-h-screen flex items-center justify-center">
      <span className="loader"></span>
    </div>
  }

  //handle Search 
  const handelSearch = (e) => {
    //?In the handleSearch function, we reset the currentPage state to 0 when a search is initiated. This ensures that the user starts seeing the search results from the first page.jekono product select ba search kori nah keno seta (0) page shuru.
    setCurrentPage(0);
    e.preventDefault();
    setSearchValue(e.target.value);

  }

  //handle Select value 
  const hanldeSelect = (e) => {
    //?In the handleSelect function, we reset the currentPage state to 0 when a selectvalue  is initiated. This ensures that the user starts seeing the select results from the first page.jekono product select ba search kori nah keno seta (0) page shuru.
    setCurrentPage(0);
    setSelectCategoryValue(e.target.value)
  }


  return (
    <div>
      {/* --------page-Header--------- */}
      {/* <div className="bg-indigo-500 relative bg-img">
        <div className="flex items-center justify-center max-w-screen-xl min-h-[40vh] mx-auto">
          <section className="z-10 space-y-4">
            <h1 className="text-white font-bold text-4xl">
              Fresh Fruites Shop
            </h1>
            <p className="text-white font-bold text-xl text-center">Home \ </p>
          </section>
        </div>
        <div className="white-curve-after hidden sm:block"></div>
        <div className="section-back-text">Shop</div>
      </div> */}
      <PageHeader
        sectionBackText={'Fresh Fruites Shop'}
        bgColor={'indigo'}
        route={location.pathname}
      ></PageHeader>

      {/* ---------------------------------- */}
      <div className="bg-[#1d1c22] ">
        <div className=" max-w-screen-xl min-h-[100vh] mx-auto sm:p-10">
          <section className="flex flex-col justify-center items-center space-y-4 ">
            <svg
              style={{ height: "3em", width: "3em" }}
              viewBox="0 0 48 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" text-green-600 z-10"
            >
              <path
                d="M23.8922 0C10.6437 0.00970631 0.0238498 11.2432 0 25.0004C0.0238498 38.7568 10.6437 49.9906 23.8922 50C37.1408 49.9906 47.7606 38.7568 47.7845 25.0004C47.7609 11.2432 37.1411 0.00970631 23.8922 0ZM23.8922 47.2268C12.281 47.2046 2.77795 37.3258 2.77351 25.0004C2.77822 12.6748 12.281 2.79597 23.8922 2.77351C35.5035 2.79597 45.0065 12.6748 45.011 25.0004C45.0065 37.3258 35.5035 47.2046 23.8922 47.2268Z"
                fill="orange"
                className="fill-path font-bold"
              ></path>
              <path
                d="M15.4739 24.2635C15.5074 24.2644 15.5399 24.2652 15.5726 24.2652C16.6161 24.2771 17.1414 23.8093 17.2435 23.6562C17.427 23.4191 17.4365 23.0885 17.2681 22.8411C17.2171 22.7726 16.6472 21.934 15.4209 21.8497H15.4217C15.3402 21.8447 15.2598 21.8428 15.1824 21.8428C14.3845 21.8461 13.7414 22.0538 13.5318 22.1273C13.5201 22.1306 13.509 22.1359 13.4971 22.1398C13.4788 22.1464 13.4649 22.1514 13.4602 22.1531C13.4588 22.1537 13.4577 22.1548 13.4563 22.1553C13.3551 22.1953 13.2608 22.256 13.1848 22.3442C13.1418 22.3944 13.1097 22.4498 13.0836 22.507C13.0828 22.5083 13.0822 22.51 13.0814 22.5117C13.057 22.5652 13.0395 22.6209 13.0292 22.6781C13.0292 22.6783 13.029 22.6786 13.029 22.6789C13.029 22.6789 13.029 22.6792 13.029 22.6795C13.0096 22.7932 13.0187 22.9094 13.0556 23.0192C13.0584 23.0267 13.0614 23.0342 13.0642 23.0416C13.0808 23.0852 13.1016 23.1273 13.1271 23.1675C13.133 23.1767 13.1382 23.1861 13.1446 23.1953C13.1746 23.2377 13.2087 23.2782 13.2492 23.3143C13.2511 23.3162 13.2525 23.3187 13.2544 23.3201C13.2547 23.3201 13.2553 23.3209 13.2558 23.3209C13.2564 23.3215 13.2567 23.322 13.2572 23.3226L13.2586 23.3242C13.2672 23.3317 13.2775 23.337 13.2869 23.3439C13.4599 23.4815 14.2963 24.207 15.4739 24.2635Z"
                fill="orange"
                className="fill-path"
              ></path>
              <path
                d="M15.5861 19.1622C15.5867 19.163 15.5875 19.1658 15.5881 19.1669C15.5883 19.168 15.5883 19.1694 15.5886 19.1705L15.5894 19.1738C15.5911 19.1799 15.595 19.1849 15.5969 19.191C15.6521 19.3632 15.8754 20.2523 16.679 20.8688C17.1588 21.2177 17.5939 21.3295 17.8982 21.327C18.0646 21.327 18.1863 21.2967 18.2504 21.2743C18.5316 21.1769 18.7199 20.9102 18.7168 20.6134C18.7118 20.5294 18.7104 19.6705 17.8882 19.0149C17.298 18.5643 16.6929 18.386 16.4841 18.331C16.465 18.3244 16.4447 18.3208 16.425 18.3158C16.4181 18.3139 16.4123 18.3122 16.4092 18.3114L16.4089 18.3119C16.3005 18.2872 16.1854 18.285 16.0706 18.3172C15.7048 18.4184 15.4896 18.7961 15.5872 19.1622H15.5861Z"
                fill="orange"
                className="fill-path"
              ></path>
              <path
                d="M28.6432 20.022C28.7397 20.0181 29.5892 20.0195 30.247 19.2133C30.7087 18.6226 30.8942 18.0142 30.95 17.8114C30.9558 17.7942 30.9594 17.7768 30.9641 17.7593C30.9664 17.7513 30.9677 17.7454 30.9688 17.7424C30.9694 17.7399 30.9691 17.7374 30.9697 17.7355C30.9949 17.6248 30.9966 17.5094 30.9664 17.3991C30.95 17.3394 30.9234 17.2842 30.8923 17.2316C30.8915 17.2302 30.8906 17.2291 30.8901 17.228C30.8607 17.1783 30.8255 17.1328 30.7847 17.0923C30.7839 17.0915 30.7833 17.0904 30.7825 17.0896C30.7819 17.089 30.7814 17.0887 30.7808 17.0885C30.7389 17.0469 30.6937 17.0089 30.6419 16.9792C30.5925 16.9506 30.5393 16.9312 30.4852 16.916C30.4785 16.914 30.4719 16.9129 30.4652 16.9112C30.4192 16.8996 30.3726 16.8932 30.3252 16.891C30.313 16.8904 30.3013 16.8899 30.2891 16.8899C30.2403 16.8902 30.1918 16.8954 30.1441 16.9063C30.1385 16.9076 30.1333 16.9068 30.128 16.9082C30.1275 16.9085 30.1247 16.9093 30.1238 16.9099C30.1208 16.9104 30.118 16.9104 30.1152 16.9112L30.1128 16.9121C30.103 16.9149 30.0947 16.9196 30.085 16.9226C29.8834 16.982 29.0201 17.2019 28.4097 17.9801C28.0472 18.4656 27.9338 18.908 27.9363 19.2119C27.9355 19.3683 27.9635 19.4834 27.9843 19.5455C28.078 19.8306 28.3437 20.022 28.6432 20.022Z"
                fill="orange"
                className="fill-path"
              ></path>
              <path
                d="M25.8877 18.1235C25.9634 18.0831 26.8719 17.6332 27.1259 16.4305C27.1897 16.1088 27.2105 15.8021 27.2105 15.5308C27.21 15.0408 27.1445 14.6648 27.114 14.5156C27.1121 14.5014 27.1082 14.4878 27.1054 14.474C27.1021 14.4595 27.0996 14.4487 27.099 14.4451C27.0988 14.4446 27.0985 14.444 27.0985 14.4435C27.073 14.335 27.0239 14.2308 26.9448 14.1417C26.9027 14.094 26.8539 14.0563 26.8029 14.023C26.8001 14.0214 26.7973 14.0197 26.7951 14.0181C26.7471 13.9881 26.6969 13.964 26.6442 13.9465C26.642 13.9457 26.6403 13.9443 26.6384 13.9434C26.637 13.9429 26.6356 13.9432 26.6345 13.9426C26.5255 13.9085 26.4107 13.9016 26.2984 13.9224C26.289 13.9243 26.2795 13.9271 26.2698 13.929C26.2255 13.939 26.1828 13.954 26.1406 13.9728C26.1301 13.9776 26.1198 13.9814 26.1098 13.9867C26.0621 14.0111 26.0164 14.04 25.9742 14.0763C25.9734 14.0771 25.9723 14.0774 25.9714 14.0782L25.9709 14.0788C25.9692 14.0802 25.9676 14.081 25.9659 14.0824L25.9642 14.0849C25.9584 14.0902 25.954 14.0965 25.9484 14.1021C25.7984 14.2452 24.9503 14.9776 24.729 16.1462C24.6941 16.3573 24.6786 16.5495 24.6786 16.7236C24.6725 17.4613 24.9728 17.882 25.0826 17.9857C25.2928 18.2017 25.6167 18.2567 25.8877 18.1235Z"
                fill="orange"
                className="fill-path"
              ></path>
              <path
                d="M28.5035 22.0675C28.4949 22.3642 28.6777 22.636 28.957 22.7389C29.0083 22.7564 29.3388 22.8753 29.8344 22.8762C30.2529 22.877 30.8003 22.7844 31.3419 22.4508C32.2574 21.88 32.8184 21.1179 32.9693 20.903C32.9784 20.8917 32.9859 20.8789 32.9942 20.8672C33.0017 20.8562 33.0075 20.8484 33.0098 20.8453L33.0089 20.8448C33.0722 20.7488 33.1146 20.6398 33.1246 20.5245C33.1398 20.3423 33.0816 20.1579 32.9643 20.0184C32.8495 19.8819 32.6828 19.7948 32.5053 19.776V19.7746C32.4862 19.7729 32.3192 19.7557 32.0621 19.7557C31.5255 19.7627 30.5907 19.8098 29.7523 20.3528C28.6655 21.0553 28.4941 21.8725 28.5035 22.0675Z"
                fill="orange"
                className="fill-path"
              ></path>
              <path
                d="M33.0094 24.7915L33.0069 24.789C33.0041 24.7871 33.001 24.7862 32.9988 24.7843C32.9328 24.751 32.3374 24.2457 31.4295 24.2213C31.3976 24.2213 31.3657 24.2221 31.3327 24.2238H31.3343C30.5351 24.2502 30.1025 24.6509 30.0093 24.8178C29.8429 25.0694 29.8576 25.3966 30.0451 25.6323C30.1011 25.697 30.5578 26.2727 31.4711 26.286H31.5038C32.1344 26.2702 32.6242 26.0774 32.8064 25.9987C32.8172 25.9951 32.8269 25.9895 32.8374 25.9854C32.8613 25.9751 32.8779 25.9676 32.884 25.9651L32.8837 25.9646C32.9819 25.9174 33.0704 25.8506 33.1372 25.7632C33.2479 25.6187 33.2983 25.4318 33.2742 25.2505C33.2504 25.0691 33.1541 24.9024 33.0094 24.7915Z"
                fill="orange"
                className="fill-path"
              ></path>
              <path
                d="M29.9552 30.9676C30.8521 31.5883 31.7839 31.7977 32.0293 31.8484C32.0471 31.8531 32.0651 31.8559 32.0834 31.8595C32.0851 31.8598 32.0892 31.8606 32.0901 31.8609V31.8603C32.2093 31.8811 32.333 31.8739 32.4475 31.832C32.6192 31.7696 32.7623 31.639 32.8388 31.4737C32.912 31.3173 32.9209 31.1365 32.8691 30.9721L32.8715 30.9712C32.8702 30.9693 32.8674 30.9618 32.8652 30.9557C32.8638 30.9515 32.8632 30.9474 32.8618 30.9432L32.8613 30.9399C32.8591 30.9341 32.8552 30.9296 32.853 30.9241C32.7626 30.672 32.3541 29.4277 31.2478 28.6733C30.6003 28.2496 30.0534 28.1242 29.6743 28.1256C29.4203 28.1256 29.2486 28.1791 29.1776 28.208C28.9014 28.3189 28.7264 28.5946 28.7433 28.8913C28.7522 28.9748 28.8129 30.1493 29.9552 30.9676Z"
                fill="orange"
                className="fill-path"
              ></path>
              <path
                d="M27.2049 31.3106C27.1298 31.3106 27.0718 31.3178 27.0324 31.325C26.7401 31.3802 26.5152 31.6165 26.4742 31.9102C26.4703 31.9374 26.4614 32.0109 26.4614 32.121C26.4606 32.4221 26.5294 33.0558 27.0593 33.6132C27.6775 34.2472 28.3719 34.5034 28.4196 34.5265L28.4199 34.5259C28.5175 34.5636 28.6223 34.5822 28.7277 34.5736C28.9096 34.5575 29.0813 34.4691 29.1989 34.3301C29.317 34.1903 29.3761 34.0059 29.36 33.824V33.8215L29.3584 33.8046C29.3337 33.7455 29.289 32.743 28.5272 31.9573C28.0095 31.4435 27.4947 31.3045 27.2049 31.3106Z"
                fill="orange"
                className="fill-path"
              ></path>
              <path
                d="M19.7079 30.4582C19.628 30.4854 18.7993 30.7097 18.3811 31.6751C18.1016 32.3551 18.088 32.9802 18.085 33.204C18.085 33.245 18.0861 33.2697 18.0863 33.2813C18.0897 33.3815 18.1121 33.481 18.1576 33.5711C18.1662 33.5886 18.1784 33.6036 18.1887 33.6202C18.1898 33.6219 18.1912 33.6238 18.1923 33.6258C18.2225 33.6737 18.2575 33.7178 18.2985 33.7572C18.2996 33.7583 18.3004 33.7594 18.3018 33.7606C18.3756 33.8307 18.4624 33.8862 18.5595 33.9178C18.5731 33.9225 18.5875 33.9236 18.6011 33.9269C18.6085 33.9292 18.6163 33.9306 18.6238 33.9322C18.6704 33.9428 18.7173 33.9486 18.765 33.9494C18.7755 33.9497 18.7858 33.9502 18.7963 33.95C18.849 33.9486 18.902 33.9428 18.953 33.9294C18.9552 33.9289 18.9571 33.9289 18.9588 33.9283C19.0035 33.9161 19.047 33.8998 19.0886 33.879L19.0908 33.8781C19.0966 33.8751 19.1014 33.8709 19.1075 33.8676C19.1124 33.8651 19.118 33.864 19.123 33.8615C19.1668 33.8144 20.0684 33.3737 20.4852 32.3615C20.6119 32.0237 20.6624 31.7283 20.6624 31.4798C20.6649 31.0935 20.5354 30.8334 20.4691 30.7391C20.3011 30.4901 19.996 30.3775 19.7079 30.4582ZM19.1338 31.9885L19.0215 31.9416L19.1338 31.9885Z"
                fill="orange"
                className="fill-path"
              ></path>
              <path
                d="M22.8849 16.9222C22.9389 16.8584 23.3408 16.4383 23.351 15.6845C23.351 15.5889 23.3433 15.4882 23.3272 15.3861C23.2093 14.6745 22.8882 14.1764 22.8291 14.081C22.7723 13.9884 22.696 13.9063 22.5959 13.8467C22.5831 13.8392 22.5695 13.8351 22.5565 13.8287C22.5557 13.8281 22.5546 13.8278 22.5537 13.8273C22.5016 13.8007 22.4478 13.7818 22.3932 13.7696C22.3912 13.7693 22.3896 13.7688 22.3879 13.7682C22.2709 13.743 22.1519 13.748 22.0404 13.7818C22.0349 13.7835 22.0302 13.7857 22.0249 13.7876C21.9788 13.8029 21.935 13.8229 21.8926 13.8475C21.8826 13.8534 21.8729 13.8586 21.8632 13.865C21.8227 13.8914 21.7853 13.9216 21.7506 13.9562C21.7459 13.961 21.7406 13.9646 21.7359 13.9696C21.7021 14.0056 21.6713 14.045 21.6447 14.0894L21.6438 14.0916C21.6419 14.0949 21.6408 14.0985 21.6389 14.1018C21.6369 14.1052 21.6341 14.1077 21.6325 14.1107C21.6128 14.162 21.2861 14.7034 21.2742 15.4607C21.2742 15.5822 21.2844 15.7098 21.3091 15.8415C21.4467 16.6296 21.9034 17.0024 22.0812 17.072C22.3532 17.2012 22.6777 17.1416 22.8849 16.9222Z"
                fill="orange"
                className="fill-path"
              ></path>
              <path
                d="M24.2678 35.9355C24.2681 35.9352 24.2684 35.9349 24.2687 35.9347C24.3097 35.9025 24.346 35.8653 24.3788 35.8248C24.3879 35.8138 24.3962 35.8024 24.4045 35.7907C24.4287 35.7569 24.4495 35.7211 24.4675 35.6834C24.4719 35.6743 24.4786 35.6668 24.4828 35.6573C24.4841 35.6535 24.4886 35.6424 24.4938 35.6285C24.4941 35.6279 24.4944 35.6277 24.4947 35.6271L24.4963 35.6241C24.4969 35.6227 24.4969 35.6213 24.4975 35.6199C24.5654 35.448 24.8544 34.7011 24.8596 33.7915C24.8596 33.4939 24.8269 33.1753 24.731 32.8542C24.3757 31.6081 23.6444 31.2057 23.4544 31.1578C23.1724 31.0635 22.859 31.1603 22.6799 31.3974C22.6369 31.4617 22.1754 32.0663 22.1682 33.0377C22.1682 33.2654 22.1954 33.5106 22.2622 33.7652C22.5473 34.8309 23.13 35.5988 23.2764 35.786C23.285 35.7982 23.2944 35.8093 23.3039 35.821C23.3063 35.824 23.3097 35.8282 23.3105 35.8296C23.3124 35.8318 23.3152 35.8334 23.3166 35.8354C23.3524 35.8773 23.3926 35.9144 23.4375 35.9469C23.4397 35.9485 23.442 35.9505 23.4439 35.9521C23.4944 35.9879 23.5473 36.0195 23.6059 36.0409C23.7129 36.0797 23.8277 36.0877 23.9395 36.0719C23.9414 36.0717 23.9434 36.0722 23.9453 36.0719C23.947 36.0717 23.9486 36.0708 23.9503 36.0706C24.0141 36.0606 24.0773 36.045 24.1361 36.0179C24.1832 35.9965 24.2268 35.9674 24.2678 35.9355Z"
                fill="orange"
                className="fill-path"
              ></path>
              <path
                d="M18.4572 15.2758C18.4561 15.2753 18.4547 15.2753 18.4536 15.2747C18.3607 15.2303 18.2592 15.204 18.1554 15.204C18.0833 15.204 18.0129 15.2187 17.9449 15.2406C17.9419 15.2414 17.9391 15.2422 17.9366 15.2431C17.8357 15.2772 17.7414 15.331 17.6651 15.407C17.6574 15.4147 17.6518 15.4245 17.6443 15.4325C17.6432 15.4339 17.6421 15.4355 17.6407 15.4369C17.6063 15.476 17.5769 15.5185 17.552 15.5639C17.5464 15.5734 17.5414 15.5825 17.5367 15.5925C17.5162 15.6344 17.4996 15.6779 17.4876 15.7229C17.4854 15.7317 17.4818 15.7403 17.4799 15.7495C17.4691 15.798 17.4624 15.8476 17.4624 15.8976V15.9006C17.4624 15.9039 17.4635 15.907 17.4635 15.9103C17.4635 15.9136 17.4624 15.9164 17.4624 15.9198C17.4832 15.9805 17.4591 17.4478 18.4003 18.5726C19.1413 19.4357 19.8721 19.5984 20.1705 19.589C20.211 19.589 20.2431 19.5873 20.2656 19.584C20.5615 19.5538 20.8058 19.335 20.8707 19.0452C20.8787 19.0077 20.9162 18.8272 20.9162 18.5518C20.917 18.1095 20.8133 17.3862 20.2681 16.7182C19.4797 15.7614 18.5026 15.3022 18.4572 15.2758Z"
                fill="orange"
                className="fill-path"
              ></path>
              <path
                d="M14.1903 26.8637C14.2261 26.8926 14.2649 26.9172 14.3065 26.9389C14.3173 26.9444 14.3276 26.9502 14.3387 26.9552C14.3819 26.9746 14.4277 26.9899 14.4759 27.0002C14.482 27.0015 14.4876 27.0052 14.4937 27.006C14.4954 27.0063 14.4998 27.0071 14.5026 27.0077L14.5051 27.0085C14.5062 27.0088 14.507 27.0085 14.5081 27.0088C14.5691 27.0199 14.8051 27.059 15.1343 27.059C15.5079 27.0556 16.0062 27.016 16.5029 26.7459C17.3177 26.3132 17.5334 25.6937 17.5398 25.499C17.5725 25.2028 17.412 24.9186 17.1421 24.7941C17.0845 24.7691 16.7794 24.6302 16.3135 24.6279C16.0323 24.6271 15.6892 24.6845 15.3442 24.8609C14.6803 25.205 14.2624 25.6771 14.1257 25.8398C14.116 25.8501 14.1077 25.8617 14.098 25.8726C14.0894 25.8831 14.0794 25.8956 14.0763 25.8989C14.0749 25.9006 14.0744 25.9028 14.073 25.9045C14.0067 25.9907 13.9574 26.0919 13.9374 26.2065C13.9263 26.2705 13.9274 26.3335 13.9335 26.3953C13.9338 26.3964 13.9341 26.3978 13.9341 26.3989C13.9402 26.4566 13.9532 26.5121 13.9732 26.5653C13.9737 26.567 13.9737 26.5686 13.9743 26.57C13.9745 26.5709 13.9751 26.5717 13.9757 26.5725C14.0167 26.6799 14.0841 26.7747 14.1712 26.8496C14.1775 26.854 14.1839 26.8587 14.1903 26.8637Z"
                fill="orange"
                className="fill-path"
              ></path>
              <path
                d="M18.7646 28.9764C18.7303 28.681 18.5089 28.4389 18.2183 28.3785C18.1817 28.3713 18.0159 28.3383 17.7624 28.3383C17.3226 28.3366 16.5802 28.4414 15.8999 29.013C15.0701 29.7185 14.6264 30.5644 14.5136 30.789C14.505 30.804 14.498 30.8192 14.4905 30.8347C14.4886 30.8386 14.4858 30.8436 14.485 30.8453C14.4842 30.8475 14.4839 30.8497 14.483 30.8517C14.4348 30.9568 14.4096 31.0741 14.4201 31.1972C14.4464 31.5025 14.6677 31.741 14.9501 31.809C14.9603 31.8115 14.9703 31.8137 14.9808 31.8156C15.0244 31.824 15.0688 31.8278 15.1142 31.8276C15.1234 31.8276 15.1323 31.8303 15.1417 31.8301C15.1436 31.8295 15.1506 31.8287 15.155 31.8281C15.1603 31.8278 15.1653 31.8289 15.1705 31.8284H15.173C15.1808 31.8276 15.1886 31.8248 15.1963 31.824C15.4723 31.8015 16.7712 31.7244 17.7796 30.8544C18.6163 30.1134 18.7785 29.3932 18.7702 29.0854C18.771 29.0388 18.7677 29.0019 18.7646 28.9764Z"
                fill="orange"
                className="fill-path"
              ></path>
              <path
                d="M41.4921 26.7531C41.3387 26.7531 41.2142 26.8776 41.2142 27.0301C41.2142 28.3393 41.065 29.6128 40.783 30.835C40.7488 30.9842 40.8412 31.1328 40.9907 31.1672C41.1399 31.2021 41.2891 31.1087 41.3235 30.9595C41.6149 29.6966 41.7688 28.3815 41.7688 27.0301C41.7691 26.8776 41.6446 26.7531 41.4921 26.7531Z"
                fill="orange"
                className="fill-path"
              ></path>
              <path
                d="M40.3982 33.0711C40.2554 33.0154 40.094 33.085 40.0382 33.227C37.5745 39.4495 31.5133 43.8493 24.4255 43.8493C24.2721 43.8493 24.1484 43.973 24.1484 44.1263C24.1484 44.2797 24.2721 44.4031 24.4255 44.4031C31.7471 44.4031 38.0093 39.8589 40.5538 33.4313C40.6101 33.2891 40.5405 33.1279 40.3982 33.0711Z"
                fill="orange"
                className="fill-path"
              ></path>
            </svg>
            <div className="z-10 text-center">
              <h1 className="font-bold text-white text-4xl">
                Our Product Types
              </h1>
              <h4 className="text-white text-xl">
                All the best items for you{" "}
              </h4>
            </div>
          </section>
          <section className="mt-10">
            <section className="flex items-center ">
              <div className="p-4 mx-auto w-full">
                {/* filter section  */}
                <section className="mb-5  ">
                  <form>
                    <div className="flex flex-col sm:flex-row sm:space-y-0 space-y-5 ">
                      <select onChange={hanldeSelect} className="select select-info bg-black text-white w-full max-w-xs mr-5" defaultValue="">
                        <option value="" disabled>Select category</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Spices">Spices</option>
                        <option value="Rice">Rices</option>
                      </select>

                      <div className="relative w-full">
                        <input onChange={handelSearch} type="search" id="search-dropdown" className="block p-2.5  w-full  h-12 z-20 text-sm text-gray-900  rounded-lg border-l-[#3abff8] border-l-2 border  focus:ring-[#3abff8] focus:border-[#3abff8] dark:bg-gray-700 dark:border-l-[#3abff8] 
                         dark:border-[#3abff8]  dark:placeholder-gray-400 dark:text-white dark:focus:border-[#3abff8]" placeholder="Search Mockups, Logos, Design Templates..." required />
                        <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                          </svg>
                          <span className="sr-only">Search</span>
                        </button>
                      </div>
                    </div>
                  </form>


                </section>

                <div className="grid grid-cols-1 gap-4 lg:gap-10 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {loadedProducts.map((product) => (
                    <Product
                      key={product._id}
                      product={product}
                      setSelectedProduct={setSelectedProduct}
                      setProductDetails={setProductDetails}
                    ></Product>
                  ))}
                </div>
                <div className="flex justify-center items-center my-10">
                  <nav className="">
                    <ul className="flex justify-center  -space-x-px text-xl h-12">
                      <li>
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          className={`btn btn-primary flex items-center justify-center px-4 h-12 ml-0 leading-tight ${currentPage === 0
                            ? "text-gray-100 cursor-not-allowed"
                            : "text-gray-100 hover:text-gray-100"
                            }`}
                        >
                          Previous
                        </button>
                      </li>
                      <li className="hidden sm:flex">
                        {getPageButtons()}
                      </li>
                      <li>
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          className={`btn btn-primary flex items-center justify-center px-4 h-12 leading-tight text-gray-100 hover:text-gray-100 ${currentPage === totalPages - 1
                            ? "text-gray-400 cursor-not-allowed"
                            : ""
                            }`}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                  <select
                    onChange={(e) => setPageSize(e.target.value)}
                    className="select select-accent mx-2  max-w-xs"
                  >
                    <option value={6}>6</option>
                    <option value={4}>4</option>
                    <option value={3}>3</option>
                  </select>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>

      {/* -------Quantity modal ----------- */}

      {user && (
        <>
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal  ">
            <div className={`modal-box   shadow-md shadow-green-400"`}>
              <div className="">
                <section className="text-gray-600 body-font overflow-hidden">
                  <div className="w-full  flex justify-between p-4  bg-gray-100">
                    <div className="sm:w-1/2 w-full">
                      <img
                        src={selectedProduct.img}
                        className="h-28 w-44   mx-auto"
                        alt=""
                      />
                    </div>
                    <div className="sm:w-1/2 w-full ">
                      <h1 className="text-orange-700 mt-1 text-2xl font-bold ">
                        {selectedProduct.name}
                      </h1>
                      <p className="text-gray-800 mt-1 font-bold ">€1299</p>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col items-center">
                    <div>
                      <p className="mb-1 font-bold">Choose KG : </p>
                      <div className="inline-flex items-center mt-2">
                        <button
                          onClick={handleDecrease}
                          className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                        <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none font-bold">
                          {quntity}
                        </div>
                        <button
                          onClick={handleIncrease}
                          className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row justify-between w-full mt-4">
                      <div className="flex justify-center  items-center text-gray-500">
                        <div  className="modal-action">
                          <label htmlFor="my_modal_7" className="btn btn-error w-40">
                            Close!
                          </label>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-center items-center text-gray-500">
                          <div className="modal-action">
                            <button
                              onClick={handleAddToCart}
                              className="btn btn-success"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ---------- Product Details modal ------------------------ */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box modal-box_For_Product_Details  shadow-inner shadow-green-400">
          <div className="">
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className="lg:w-1/2 w-full h-auto sm:h-[50vh] object-cover object-center rounded "
                    src={productDetails.img}
                  />
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-white tracking-widest">
                      PRODUCT NAME
                    </h2>
                    <h1 className="text-orange-500 text-3xl title-font font-medium mb-1">
                      {productDetails.name}
                    </h1>
                    <div className="flex mb-4">
                      <span className="flex items-center">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 text-yellow-400"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 text-yellow-400"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 text-yellow-400"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 text-yellow-400"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 text-yellow-400"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span className="text-red-500 ml-3">
                          {parseInt(productDetails.rating)} Reviews
                        </span>
                      </span>
                      <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                        <a className="text-gray-500">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="text-gray-500">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="text-gray-500">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                    <p className="leading-relaxed text-white">
                      {productDetails.description}
                    </p>

                    <div className="w-full flex justify-between items-center ">
                      <span className="title-font font-medium text-2xl text-orange-500 my-5">
                        ${productDetails.price}
                      </span>
                      <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5 text-rose-600 hover:text-red-900"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
