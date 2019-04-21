import React from "react";
import Box from "../../DeclarePrimitive/BoxComponents";
import BackgroundImage from "../../DeclarePrimitive/BackgroundImageComponents";

// Card의 전체적인 틀
const ImageCard = ({ tl, tr, br, bl, src, ...props }) => (
  <Box position="relative" borderRadius={20} {...props}>
    <BackgroundImage width="100%" src={src} borderRadius={20} />

    <Box position="absolute" top={0} left={0}>
      {tl}
    </Box>

    <Box position="absolute" top={20} right={0}>
      {tr}
    </Box>

    <Box position="absolute" bottom={0} right={0}>
      {br}
    </Box>

    <Box position="absolute" bottom={0} left={0}>
      {bl}
    </Box>
  </Box>
);

export default ImageCard;
