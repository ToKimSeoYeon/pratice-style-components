import React from "react";
import Heading from "../../../DeclarePrimitive/HeadingComponents";
import Box from "../../../DeclarePrimitive/BoxComponents";

const HeadingWithDash = ({ dashWidth = 2, children, ...props }) => (
  <Heading {...props}>
    <Box display="inline-flex" alignItems="center">
      {children}
      <Box height="1px" ml={2} width={dashWidth} bg="dark-gray" />
    </Box>
  </Heading>
);

export default HeadingWithDash;
