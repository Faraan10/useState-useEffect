import { Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PrivateRoutes;
