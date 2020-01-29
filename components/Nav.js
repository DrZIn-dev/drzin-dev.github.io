import React from "react";
import styled from "styled-components";

import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const navBarStyle = {
  backgroundColor: "transparent",
  boxShadow: "none",
  color: "black"
};
export default ({ name }) => {
  return (
    <Appbar style={navBarStyle}>
      <Toolbar>
        <Typography>HOME</Typography>
        <Typography>REPOSITORY</Typography>
        <Typography>ABOUT</Typography>
      </Toolbar>
    </Appbar>
  );
};
