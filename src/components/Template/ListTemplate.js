import React from "react";
// import styled from "styled-components";

import ListTitle from "./ListTitle";
import ListInsert from "./ListInsert";
import ListItem from "./ListItem";

function ListTemplate() {
  return (
    <div>
      <ListTitle>TODO LIST</ListTitle>
      <ListInsert />
      <ListItem />
    </div>
  );
}

export default ListTemplate;
