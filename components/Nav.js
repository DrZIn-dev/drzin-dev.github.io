import React from "react";
import styled from "styled-components";
import Appbar from "@material-ui/core/AppBar";
const Nav = styled.nav`
  height: 56px;
  width: 100%;
  display: flex;
`;

export default ({ name }) => {
  return (
    <Nav>
      <Appbar>{name}</Appbar>
    </Nav>
  );
};
