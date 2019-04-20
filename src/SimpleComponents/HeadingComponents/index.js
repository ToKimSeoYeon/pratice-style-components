import system from "system-components";

const Heading = system(
  {
    is: "h1",
    m: 0,
    fontSize: 6,
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

export default Heading;
