import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = ({ cart, total }) => {
  return (
    <>
      <Navbar cart={cart} total={total} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
