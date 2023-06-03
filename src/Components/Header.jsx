import { Button, Divider } from "@mui/material";
import React from "react";
// import { logo } from "../assets";
import tatvasoft from "../assets/tatvasoft.jpg";
import { HiShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center bg-white">
      <div className="flex justify-between items-center bg-white border-t-8 border-[#f14d54]">
        <img src={tatvasoft} alt="TatvaSoft_Logo" className="h-24 ml-40 w-44" />
        <div className="mr-40 justify-between space-x-1">
        <div className="mr-40  space-x-1 flex">
          <Button
            variant="text"
            sx={{ color: "#f14d54" }}
            sx={{
              color: "#f14d54",
              textTransform: "capitalize",
            }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>

          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ backgroundColor: "#f14d54" }}
          />
          <Button
            variant="text"
            sx={{ color: "#f14d54" }}
            sx={{ color: "#f14d54", textTransform: "capitalize" }}
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "#f14d54", borderColor: "#f14d54" }}
            sx={{
              color: "#f14d54",
              borderColor: "#f14d54",
              textTransform: "capitalize",
            }}
            startIcon={<HiShoppingCart />}
            onClick={() => {
              navigate("/cart-page");
            }}
          >
            cart
            {0} cart
          </Button>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}
export default Header;