import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = ({ cart }) => {
  return (
    <>
      <Navbar cart={cart} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
