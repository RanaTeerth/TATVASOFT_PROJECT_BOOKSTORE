import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Searchbar from "../Components/Searchbar";
function ProductPage() {
  const rows = [
    createData("C","Teerth Rana", 2020, 500),
    createData("C++", "Roy Rana",2021, 450),
    createData("Java", "Joy Rana", 2021, 400),
    createData("Web Development", "Zoy Rana", 2022, 500),
  ];

  function createData(name, author, year, price) {
    return { name, author, year, price };
  }
  return (
    <>
    <div className="text-center">
      <center>
     
      </center>
      <br />
      <TableContainer component={Paper} className="h-96 w-56">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
          <TableRow>
              <TableCell>name</TableCell>
              <TableCell align="center">author&nbsp;</TableCell>
              <TableCell align="center">year&nbsp;</TableCell>
              <TableCell align="center">price&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.author}</TableCell>
                <TableCell align="center">{row.year}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />

      <Link to={"/cart-page"} className="text-xl text-yellow-900">
        Click Here To Go Cart Page
      </Link>
      <br />
      <br />
      <Link to={"/"} className="text-xl text-yellow-900">
        Click Here To Go Home
      </Link>
      <br />
      <br />
      <Footer />
    </div>
    </>
  );
}

export default ProductPage;