import system from "system-components";

const Grid = system(
  // core
  "space",
  "width",
  "color",
  "fontSize",
  // typography
  "textAlign",
  // borders
  "borders",
  "borderColor",
  "borderRadius",
  // layout
  "maxWidth",
  "minWidth",
  "height",
  "maxHeight",
  "minHeight",
  // grid
  "gridGap",
  "gridColumnGap",
  "gridRowGap",
  "gridColumn",
  "gridRow",
  "gridAutoFlow",
  "gridAutoColumns",
  "gridAutoRows",
  "gridTemplateColumns",
  "gridTemplateRows",
  // flexbox
  "alignItems",
  "alignContent",
  "justifyContent",
  "justifySelf",
  {
    display: "grid"
  }
);

export default Grid;
