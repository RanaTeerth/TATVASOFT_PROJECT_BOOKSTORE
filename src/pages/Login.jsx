import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { TextField } from "@mui/material";
import {Button} from "@mui/material";
import Searchbar from "../Components/Searchbar";
function Login() {
  const [password, setPassword] = React.useState('');

const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};
  return (
    <>
      <div >
        <center>
    



    <input
      type="text" placeholder="Email Address"
      style={{ width: '200px', height: '30px' }}
    />

<br /><br />


      <input
        type="password" // Set type to "password"
        id="password"
        style={{ width: '200px', height: '30px' }}

        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
      <br /><br />
<Button variant="contained">Login</Button>

</center>

<br /><br />

        <Link to={"/"}>
          Click Here To Go Home
        </Link>
        <br />
        <br />
        <Link to={"/product-page"}>
          Click Here To Go Product Page
        </Link>
        <br />
        <br />

        <Footer />
      </div>
    </>
  );
}

export default Login;