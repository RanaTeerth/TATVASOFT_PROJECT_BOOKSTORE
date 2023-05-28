import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";

function App() {
  return (
    
    <>
    <div className="text-red-500">
      <p className="text-center font-bold text-xl">Welcome To React Page</p>
    </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/product-page" Component={ProductPage} />
          <Route path="/cart-page" Component={CartPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;