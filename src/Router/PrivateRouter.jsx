import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { CircleLoader } from "react-spinners";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location=useLocation();
  if (loading) {
    return (
      <div className="flex justify-center mt-16">
        <CircleLoader size={100} className="text-center" color="#024950" />
      </div>
    );
  }
  if (user) {
    return children;
  }

 return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;
