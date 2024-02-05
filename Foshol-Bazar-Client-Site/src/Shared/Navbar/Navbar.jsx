import { useContext, useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Providers/AuthProvider";
import useAdmin from "../../Hooks/useAdmin"
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const [isAdmin, isAdminLoading] = useAdmin()
  console.log("Navbar is render");
  const [loadedCartItems] = useCart();
  const { user, logOut, loader } = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);  //for navbar menu toogle
  const [isUSerMenuOpen, setIsUserMenuOpen] = useState(false);//for profile menu toggle
  const navigate = useNavigate();

  //handle navbar menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //handle profile menu toogle
  const handleOpenUserMenu = () => {
    setIsUserMenuOpen(!isUSerMenuOpen);
  };
  return (
    <div>
      <nav className="bg-[#2f2d2d] border-gray-200  fixed z-30 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="h-20 flex items-end justify-center ">
            <img className="w-full h-16" src={logo} alt="" />
          </div>
          <div className="flex md:order-2">
            {/* -------Search box in large device-------- */}
            {/* <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search..."
              />
            </div> */}

            {/* ------- User profile    -------- */}
            <div className="flex items-center  relative sm:ml-10">
              <div className="flex  sm:justify-center items-center w-full sm:mt-0  max-[400px]:mt-3  ">
                {/* ------ User Profile  toogle Button ------ */}
                {
                  user?.email ? <Link to='/dashboard/mycart'
                    type="button"
                    className="flex -ml-3 border-red-500 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 relative"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-orange-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="text-white font-bold absolute -top-2 -right-1 ">{loadedCartItems.length}</span>

                  </Link> : ' '
                }

                {user ? (
                  <button
                    onClick={handleOpenUserMenu}
                    type="button"
                    className="flex mx-5 bottom-1 border-red-500 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src={user?.photoURL || user?.user?.photoURL}
                      alt="user photo"
                    />
                  </button>
                ) : (
                  <Link
                    to="/login"
                    type="button"
                    className="text-white bg-gradient-to-r mx-5 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 "
                  >
                    Login
                  </Link>
                )}

                {/* ------ Navbar toogle Button >>  i put this navbar toogle for my easy understanding------ */}
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-between text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-search"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>

              {/* <!-- user profile  Dropdown menu --> */}
              <div
                className={`z-50 ${isUSerMenuOpen ? " " : "hidden"
                  } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-0 translate-y-8 -translate-x-[60%]`}
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    {user?.displayName}
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    {user?.email}
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  {
                    user?.email ? <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li> : ' '
                  }

                  <li>
                    <Link
                      to='/addproduct'
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Add Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/myproducts'
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      My Products
                    </Link>
                  </li>
                  {/* ------In logout make you use button not link------ */}
                  <button
                    type="button"
                    className="text-white btn-sm  bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center mx-2 my-2 "
                    onClick={async () => {
                      try {
                        await logOut();
                        handleOpenUserMenu();
                        toast.success("Logout Successfuly");
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  >
                    LogOut
                  </button>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`items-center justify-between ${isMenuOpen ? "" : "hidden"
              } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            {/* -------search button in smalll device----- */}
            {/* <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div> */}
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#2f2d2d] md:flex-row md:space-x-8 md:mt-0 md:border-0  md:bg-[#2f2d2d] ">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white  md:p-0  hover:text-orange-500 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="block py-2 pl-3 pr-4 text-white rounded  md:p-0   hover:text-orange-500 "
                >
                  Shop Now
                </Link>
              </li>

              <li>
                <Link
                  to="/aboutus"
                  className="block py-2 pl-3 pr-4 text-white md:p-0  hover:text-orange-500 "
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contractus"
                  className="block py-2 pl-3 pr-4 text-white md:p-0  hover:text-orange-500 "
                >
                  Contract Us
                </Link>
              </li>
              {
                user?.email ? <li>
                  <Link
                    to={isAdmin ? "/dashboard/adminhome" : "/dashboard/userhome"}
                    className="block py-2 pl-3 pr-4 text-white rounded  md:p-0   hover:text-orange-500 "
                  >
                    Dashboard
                  </Link>
                </li> : ' '
              }

              {/* {user?.email && (
                  <li>
                    <Link
                      to="/cart"
                      href="#"
                      className="block py-2 pl-3 pr-4 text-white rounded  md:p-0  "
                    >
                      My Booking
                    </Link>
                  </li>
                )} */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
