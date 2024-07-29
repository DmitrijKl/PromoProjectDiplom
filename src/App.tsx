import { Route, Routes } from "react-router-dom";
import "./Scss/app.scss";
import Mainlayot from "./layouts/Mainlayot";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";
import ProductFull from "./pages/ProductFull/ProductFull";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainlayot />}>
        <Route path="" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductFull />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
