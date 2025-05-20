import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      <main>{token ? <Outlet /> : <Navigate to="/login" replace />}</main>
    </>
  );
};

export default PrivateRoutes;
