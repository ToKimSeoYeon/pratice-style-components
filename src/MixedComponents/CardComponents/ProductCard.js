import React from "react";
import Box from "../../SimpleComponents/BoxComponents";
import BackgroundImage from "../../SimpleComponents/BackgroundImageComponents";

// primitive에서 형식을 가져온다 box, backgroundimage 그게 imagecards다
const ProductCard = ({ tl, tr, br, bl, src, ratio, ...props }) => (
  <Box position="relative" {...props}>
    <BackgroundImage width="100%" ratio={ratio} src={src} />

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

export default ProductCard;
