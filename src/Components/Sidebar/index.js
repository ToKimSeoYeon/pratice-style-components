import React from "react";
import { elastic as Menu } from "react-burger-menu";
import styled from "styled-components";
import { A } from "styled-system-html";

const MenuList = styled(A)`
  display: inline-block;
  text-decoration: none;
  margin-bottom: 20px;
  color: #d1d1d1;
  transition: color 0.2s;
  border: 1px;
  bordercolor: white;
`;

export default props => {
  return (
    <Menu right>
      <MenuList href="/">Home</MenuList>

      <MenuList href="/">Home</MenuList>

      <MenuList href="/">Home</MenuList>

      <MenuList href="/">Home</MenuList>

      <MenuList href="/">Home</MenuList>
    </Menu>
  );
};
