import React from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
    <div className="home">
      <br /><br />
      <p >
        Welcome to Home Page
      </p>
      <br />
      {/*
      <Link to={"/login"}>
        Click Here To Login
      </Link>
      <br />
      <br />
      <Link to={"/register"}>
        Click Here To Register
      </Link>
      <br />
  <br />*/}
      <Footer />
    </div>
    </>
  );
}

export default Home;