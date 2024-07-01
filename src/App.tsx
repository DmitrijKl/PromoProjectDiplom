import { Route, Routes } from "react-router-dom";
import "./Scss/app.scss";
import Mainlayot from "./layouts/Mainlayot";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainlayot />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
