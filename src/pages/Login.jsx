import { Breadcrumbs, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { TextField } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Login() {
  const breadcrumbs = [
    <Link to={"/"} underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,

    <Typography key="2" color={{ color: "#f14d54" }}>
      Login
    </Typography>,
  ];
  return (
    <>
    <div className="text-center flex-1 ">
    <div className="flex-1 ">
      <p className="font-sans text-center font-bold text-2xl text-purple-600 my-7">
        Here is The Login Page
      </p>
      <hr /> <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Enter your Email"
        variant="outlined"
        type={"email"}
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Enter your Password"
        variant="outlined"
        type={"password"}
      />
      <br />
      <br />
      <Button variant="contained">Login</Button>
      <br />
      <br />
      <div className="flex-row justify-between space-x-7 mb-14">
        <Link to={"/"} className="text-xl text-purple-600">
          Click Here To Go Home
        </Link>
        <Link to={"/product-page"} className="text-xl text-purple-600">
          Click Here To Go Product Page
        </Link>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          display: "flex",
          marginTop: "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          marginTop: "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Login or Create an Account
      </Typography>
      <div className="flex items-center justify-center m-6">
        <div className="border-t-2 border-[#f14d54] w-32"></div>
      </div>
      <div className="grid grid-cols-2 gap-36 mt-12 ">
        <div className="ml-40">
          <Typography variant="h6">New Customer</Typography>
          <Divider
            sx={{
              marginTop: "20px",
            }}
          />
          <Typography variant="body2" sx={{ marginTop: "20px" }}>
            Reagine
          </Typography>
        </div>
        </div>
        <div>
          <Typography variant="h6">Ragistered Customers</Typography>
          <Divider
            sx={{
              marginTop: "20px",
              marginRight: "160px",
            }}
          />
          <Typography variant="body2" sx={{ marginTop: "20px" }}>
            Please enter the following information to create your account
          </Typography>
        </div>
      </div>
      <br />
      <br />
    </div>
    </div>
      </>

    
  );
}
export default Login;