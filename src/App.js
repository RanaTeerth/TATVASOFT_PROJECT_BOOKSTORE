import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import './index.css';
import './App.css';
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";


function App() {
  return (
    
    <>
    <div className="text-red-500">
    <center><p className="app-paragraph">
        Welcome To React Page
        </p>
        </center>
    </div>
      <BrowserRouter>
      <Header/>
      &nbsp;
      <Searchbar/>
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