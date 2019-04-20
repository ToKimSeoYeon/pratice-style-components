import styled from "styled-components";
import {
  space,
  color,
  width,
  fontSize,
  flex,
  alignSelf,
  order
} from "styled-system";

const Box = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0
  },
  space,
  color,
  width,
  fontSize,
  flex,
  alignSelf,
  order
);

Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...flex.propTypes,
  ...alignSelf.propTypes,
  ...order.propTypes
};

export default Box;
