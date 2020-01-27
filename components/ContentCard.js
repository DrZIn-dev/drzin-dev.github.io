import React from "react";
import styled from "styled-components";

import Divider from "@material-ui/core/Divider";

export default ({ name }) => {
  return (
    <div>
      <Appbar>{name}</Appbar>
      <Divider variant="middle"></Divider>
    </div>
  );
};
