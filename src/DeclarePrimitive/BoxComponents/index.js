import styled from "styled-components";
import {
  // core
  space,
  color,
  width,
  fontSize,
  // typography
  textAlign,
  // border
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius,
  // layout
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  // flexbox
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  // position
  position,
  zIndex,
  top,
  right,
  bottom,
  left
} from "styled-system";

const Box = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0
  },
  //core
  space,
  color,
  width,
  fontSize,
  // typography
  textAlign,
  // border
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius,
  // layout
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  // flexbox
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  // position
  position,
  zIndex,
  top,
  right,
  bottom,
  left
);

Box.propTypes = {
  // core
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  // border
  ...border.propTypes,
  ...borderTop.propTypes,
  ...borderRight.propTypes,
  ...borderBottom.propTypes,
  ...borderLeft.propTypes,
  ...borderWidth.propTypes,
  ...borderStyle.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  // layout
  ...display.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...minHeight.propTypes,
  ...size.propTypes,
  // flexbox
  ...alignItems.propTypes,
  ...alignContent.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...flex.propTypes,
  ...flexBasis.propTypes,
  ...justifySelf.propTypes,
  ...alignSelf.propTypes,
  ...order.propTypes,
  // position
  ...position.propTypes,
  ...zIndex.propTypes,
  ...top.propTypes,
  ...right.propTypes,
  ...bottom.propTypes,
  ...left.propTypes
};

export default Box;
