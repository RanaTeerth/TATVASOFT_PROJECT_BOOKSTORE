import React from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Footer from "../Components/Footer";

function Register() {
  const [password, setPassword] = React.useState('');
  const [confirmedPassword, setConfirmedPassword] = React.useState('');


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleConfirmedPasswordChange = (event) => {
    setConfirmedPassword(event.target.value);
  };

  return (
    <>
      <div className="register">
        <center>
         
          
          <input
            type="text"
             placeholder="Email Address"
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

          <input
            type="password" // Set type to "password"
            id="confirmed_password"
            style={{ width: '200px', height: '30px' }}

            value={confirmedPassword}
            onChange={handleConfirmedPasswordChange}

            placeholder="Enter confirm password"
          />
          <br /><br />
          <Button variant="contained">Register</Button>

        </center>

        <br />

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
        <Footer/>

      </div>
    </>
  );
}

export default Register;