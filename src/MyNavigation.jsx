import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/auth";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UpdateProfile from "./pages/UpdateProfile";
import Register from "./pages/Register";
import Book from "./pages/Book/Book";
import AddBook from "./pages/Book/AddBook";
import EditUser from "./pages/User/EditUser";
import User from "./pages/User/User";
import Categories from "./pages/Categories";
import AddCategories from "./pages/Categories/AddCategories";

function MyNavigation() {
  const authContext = useAuthContext();
  const Redirect = <Navigate to={"/login"} />;
  return (
    <Routes>
      <Route path="/" element={authContext.user.id ? <Home /> : Redirect} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/register"
        element={!authContext.user.id ? <Register /> : Redirect}
      />
      <Route
        path="/update-profile"
        element={authContext.user.id ? <UpdateProfile /> : Redirect}
      />
     {/* <Route path="/book" element={authContext.user.id ? <Book /> : Redirect} />
*/}
      <Route path="/user" element={authContext.user.id ? <User /> : Redirect} />
      <Route
        path="/edit-user/:id"
        element={authContext.user.id ? <EditUser /> : Redirect}
      />
      <Route
        path="/categories"
        element={authContext.user.id ? <Categories /> : Redirect}
      />
      <Route
        path="/add-category"
        element={authContext.user.id ? <AddCategories /> : Redirect}
      />
      <Route
        path="/add-category/:id"
        element={authContext.user.id ? <AddCategories /> : Redirect}
      />
      <Route path="/book" element={authContext.user.id ? <Book /> : Redirect} />
      <Route
        path="/add-book"
        element={authContext.user.id ? <AddBook /> : Redirect}
      />

      <Route
        path="/add-book/:id"
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