import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Providers/AuthProvider";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="bg-black w-full min-h-screen flex items-center justify-center">
          <span className="loading loading-infinity loading-lg text-white"></span>
        </div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
