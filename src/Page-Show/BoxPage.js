import React from "react";
import Box from "../Components/box";

export default () => {
  return (
    <>
      <Box width={[1, 1 / 2]} p={4} mb={3} bg="tomato">
        This is a tomato box, with responsive width, some padding, and margin
        bottom
      </Box>
      {/* // width: 50% */}
      <Box width={1 / 2}>second box</Box>
      {/* // font-size: 20px (theme.fontSizes[4]) */}
      <Box fontSize={4} />
      {/* // margin: 16px (theme.space[2]) */}
      <Box m={2} />
      {/* // padding: 32px (theme.space[3]) */}
      <Box p={3} />
      {/* // color */}
      <Box color="tomato" />
      {/* // color: #333 (theme.colors.gray[0]) */}
      <Box color="gray.0" />
      {/* // background color */}
      <Box bg="tomato" />
    </>
  );
};
