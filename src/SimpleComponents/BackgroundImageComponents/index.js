import system from "system-components";

const BackgroundImage = system(
  {
    width: 1,
    ratio: 3 / 4,
    backgroundSize: "cover",
    backgroundPosition: "center",
    blacklist: ["src"]
  },
  // core
  "space",
  "width",
  "color",
  "fontSize",
  "ratio",
  "backgroundSize",
  "backgroundPosition",
  props => ({
    backgroundImage: props.src ? `url(${props.src})` : undefined
  })
);
export default BackgroundImage;
