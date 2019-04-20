import styled from "styled-components";
import {
  space,
  color,
  width,
  fontSize,
  height,
  backgroundSize,
  backgroundPosition,
  borderRadius
} from "styled-system";

const BackgroundImage = styled.div(
  {
    width: 100,
    height: 350,
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  height,
  space,
  color,
  width,
  fontSize,
  backgroundSize,
  backgroundPosition,
  borderRadius,
  props => ({
    backgroundImage: props.src ? `url(${props.src})` : undefined
  })
);

BackgroundImage.propTypes = {
  // core
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...backgroundSize.propTypes,
  ...backgroundPosition.propTypes,
  // border
  ...borderRadius.propTypes
};

export default BackgroundImage;
