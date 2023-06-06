import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthWarpper,useAuthContext } from "./context/auth";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import UpdateProfile from "./pages/UpdateProfile";
import Register from "./pages/Register";
import Book from "./pages/Book";
import AddBook from "./pages/AddBook";

function MyNavigation() {
  const authContext = useAuthContext();
  const Redirect = <Navigate to={"/login"} />;
  return (
    <Routes>
      <Route path="/" element={authContext.user.id ? <Home /> : Redirect} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product-page" element={<ProductPage />} />
      <Route path="/cart-page" element={<CartPage />} />
      <Route
        path="/register"
        element={!authContext.user.id ? <Register /> : Redirect}
      />
      <Route
        path="/update-profile"
        element={authContext.user.id ? <UpdateProfile /> : Redirect}
      />
      <Route path="/book" element={authContext.user.id ? <Book /> : Redirect} />
      <Route
        path="/add-book"
        element={authContext.user.id ? <AddBook /> : Redirect}
      />
      <Route
        path="/edit-book/:id"
        element={authContext.user.id ? <AddBook /> : Redirect}
      />
      <Route
        path="/cart-page"
        element={authContext.user.id ? <CartPage /> : Redirect}
      />
    </Routes>
  );
}

export default MyNavigation;
// [10:26] Keval Dhol
//     Admin:
// Email: admin@tatvasoft.com
// Password: admin@123