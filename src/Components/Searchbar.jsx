import { Height } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Searchbar() {
  return (
    <div className="flex bg-[#efefef] h-20 items-center justify-center space-x-4">
      <TextField
        id="outlined-basic"
        label="What are you Looking for..."
        variant="outlined"
        type={"text"}
        className="my-5 "
        sx={{ width: "350px"}}
      />
    &nbsp;&nbsp;
      <Button
        variant="contained"
        startIcon={<AiOutlineSearch />}
        sx={{
          height:"50px",
          color: "white",
          backgroundColor: "#71da71",
          "&:hover": {
            backgroundColor: "#71da71", // Change the hover background color
          },
        }}
      >
        Search
      </Button>
      &nbsp;&nbsp;

      <Button
        variant="contained"
        sx={{
          height:"50px",

          color: "white",
          backgroundColor: "#f14d54",
          "&:hover": {
            backgroundColor: "#f14d54", // Change the hover background color
          },
        }}
      >
        Cancel
      </Button>
    </div>
  );
}