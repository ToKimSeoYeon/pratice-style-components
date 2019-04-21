import system from "system-components";

const Span = system(
  {
    is: "span",
    blacklist: ["enabled"]
  },
  "space",
  "width",
  "color",
  "fontSize",
  { position: "relative" },
  props =>
    props.enabled && {
      "&:after": {
        content: '""',
        borderBottom: "1px solid currentcolor",
        left: 0,
        position: "absolute",
        top: "35%",
        transform: "skewY(11deg)",
        width: "100%"
      }
    }
);

export default Span;
