import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Dashboard, Register, Login, NotFound } from "./pages/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
