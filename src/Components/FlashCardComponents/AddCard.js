import React from "react";
import styled from "styled-components";
import Box from "../../DeclarePrimitive/BoxComponents";
import { IoIosAdd } from "react-icons/io";

const PointerBox = styled(Box)`
  cursor: pointer;
`;

const CenteredIoIosAdd = styled(IoIosAdd)`
  width: 100%;
  height: 100%;
  opacity: 0.2;
`;

const AddCard = () => (
  <PointerBox
    border="4px dashed #dfe6e9"
    borderRadius={20}
    alignContent="center"
  >
    <CenteredIoIosAdd />
  </PointerBox>
);

export default AddCard;
