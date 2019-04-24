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

class Sidebar extends React.Component {
  state = {
    isOpen: false
  };

  menuToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <Menu right isOpen={this.state.isOpen}>
        <MenuList href="/">Home</MenuList>

        <MenuList href="/">Home</MenuList>

        <MenuList href="/">Home</MenuList>

        <MenuList href="/">Home</MenuList>

        <MenuList href="/">Home</MenuList>
      </Menu>
    );
  }
}

export default Sidebar;
