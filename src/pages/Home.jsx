import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="">
      <hr />
      <p className="font-sans  font-bold text-2xl text-blue-300 text-center my-7">
        Welcome to Home Page
      </p>
      <hr />
      <br />
      <Link to={"/login"} className="text-xl text-blue-300">
        Click Here To Login
      </Link>
      <br />
      <br />
      <Link to={"/register"} className="text-xl text-blue-300 mb-10">
        Click Here To Register
      </Link>
      <br />
      <br />

    </div>
  );
}
export default Home;