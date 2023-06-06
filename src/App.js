import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import { ToastContainer } from "react-toastify";
import { AuthWarpper, useAuthContext } from "./context/auth";
import MyNavigation from "./MyNavigation";
{/*
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";*/}

function App() {
  const authContext = useAuthContext();
  const Redirect = <Navigate to={"/login"} />;
  return (
    <BrowserRouter>
      <AuthWarpper>
        <ToastContainer />
        <Header />
        <Searchbar />
        {/*
        <Routes>
          <Route path="/" element={authContext.user.id ? <Home /> : Redirect} /> 
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/cart-page" element={<CartPage />} />
        </Routes>
  */}
        <MyNavigation />
        <Footer />
      </AuthWarpper>
    </BrowserRouter>
  );
}
export default App;