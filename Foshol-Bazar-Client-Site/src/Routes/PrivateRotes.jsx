import React, { Children, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRotes = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  let location = useLocation();

  console.log("loader status from Private route  :",loader);

  // console.log("User status from private route:",user);

  if (loader) {
    console.log("private loader is called");
    return (
      <div className="bg-black w-full min-h-screen flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRotes;
