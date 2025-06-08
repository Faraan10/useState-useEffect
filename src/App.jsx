import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Dashboard,
  Register,
  Login,
  Products,
  Cart,
  Settings,
  NotFound,
} from "./pages/index";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import PrivateRoutes from "./routes/PrivateRoutes";
import { useEffect, useState } from "react";
import demoData from "../data.json";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [items, setItems] = useState(demoData);
  console.log(demoData);

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (!token) {
      token = crypto.randomUUID();
      localStorage.setItem("token", token);
    }
    setData(token);
  }, []);

  const addItems = (newData) => {
    setItems((prevItems) => [...prevItems, newData]);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<Products items={items} addItems={addItems} />}
            />
            <Route
              path="/cart"
              element={<Cart items={items} setItems={setItems} />}
            />
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
