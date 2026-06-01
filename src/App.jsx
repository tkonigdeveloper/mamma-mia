import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PizzaPage from "./pages/PizzaPage";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pizza/:id" element={<PizzaPage />} />
        <Route path="/carrito" element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
