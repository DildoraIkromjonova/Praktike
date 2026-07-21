import { Navigate } from "react-router-dom";

const Proroutes = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log("TOKEN QIYMATI:", token);

  if (!token) {
    return <Navigate to="/register" replace />;
  }

  return children;
};

export default Proroutes;