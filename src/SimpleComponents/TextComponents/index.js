import system from "system-components";

const Text = system(
  {
    is: "p",
    fontSize: 2,
    color: "dark-gray",
    fontFamily: "eczar",
    fontWeight: 400
  },
  // core
  "space",
  "width",
  "color",
  "fontSize",
  // typography
  "fontFamily",
  "textAlign",
  "lineHeight",
  "fontWeight",
  "letterSpacing"
);

export default Text;
