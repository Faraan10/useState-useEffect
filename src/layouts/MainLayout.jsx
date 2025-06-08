import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = ({ items }) => {
  return (
    <>
      <Navbar items={items} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
