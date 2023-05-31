import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

 
function Register() {
  const styles = {
    productlink:{ 
      color:'rgb(198, 144, 9)'
    }  
  }
  return (
    <>
      <Header />
      <p>
        Here is The Register Page
      </p>
      <br />
      <Link to={"/"} className="homelink">Click Here To Go Home</Link>
      <br />
      <br />
      <Link to="/product-page" style={styles.productlink}>Click Here To Go Product Page</Link>
      <br />
      <br />
      
      <Footer />
      </>
  );
}

export default Register;