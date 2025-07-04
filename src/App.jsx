import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Dashboard,
  Register,
  Login,
  Products,
  Cart,
  About,
  Settings,
  NotFound,
} from "./pages/index";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import PrivateRoutes from "./routes/PrivateRoutes";
import { useEffect, useState } from "react";
import demoData from "../data.json";
import toast from "react-hot-toast";

import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [items, setItems] = useState(demoData);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (!token) {
      token = crypto.randomUUID();
      localStorage.setItem("token", token);
    }
    setData(token);
  }, []);

  const addItems = (newData) => {
    const findItem = items.find((item) => item.id == newData.id);
    console.log(findItem);

    setCart((prevItems) => [...prevItems, newData]);
    toast.success("Item added to cart");
  };
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const deleteCart = (id) => {
    setCart((prevItems) => prevItems.filter((item) => item.id != id));
    toast.error("Item removed from cart");
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout cart={cart} total={total} />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<Products items={items} addItems={addItems} />}
            />
            <Route
              path="/cart"
              element={
                <Cart cart={cart} total={total} deleteCart={deleteCart} />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
