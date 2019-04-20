import React from "react";
import Box from "../SimpleComponents/BoxComponents";

export default () => {
  return (
    <>
      {/* box */}
      <Box width={[1, 1 / 2, 1 / 4]} mb={3} bg="#C54575">
        responsive width, some padding, and margin bottom
      </Box>
      <Box width={1 / 2} bg="#3498db">
        width: 50% Box
      </Box>
      <Box fontSize={4} bg="#9b59b6">
        font-size: 20px (theme.fontSizes[4]){" "}
      </Box>
      <Box fontSize={[1, 2, 3, 4]} bg="#e67e22">
        Responsive font size 1, 2, 3, 4
      </Box>
      <Box m={2} bg="#34495e">
        margin: 16px (theme.space[2])
      </Box>
      <Box p={3} bg="#95a5a6">
        padding: 32px (theme.space[3])
      </Box>
      <Box color="tomato" bg="#e74c3c">
        color
      </Box>
      <Box color="gray.0" bg="#f1c40f">
        color: #333 (theme.colors.gray[0])
      </Box>
      {/* border */}
      <Box border="1px solid">border</Box>
      <Box borderTop="1px solid">borderTop</Box>
      <Box borderRight="1px solid">borderRight</Box>
      <Box borderBottom="1px solid">borderBottom</Box>
      <Box borderLeft="1px solid">borderLeft</Box>
      <Box borderWidth="4px">borderWidth</Box>
      <Box borderStyle="dotted">borderStyle</Box>
      <Box border="1px solid" borderColor="blue">
        borderColor blue
      </Box>
      <Box border="1px solid" borderRadius={4}>
        borderRadius
      </Box>
      {/* layout */}
      <Box display="inline-block" bg="#C54575">
        inline-block
      </Box>
      <Box display={["block", "inline-block"]} bg="#3498db">
        block, inline-block
      </Box>

      <Box maxWidth={1024} bg="#C54575">
        maxWidth 1024
      </Box>
      <Box maxWidth={[768, null, null, 1024]} bg="#3498db">
        maxWidth 768, null, null, 1024
      </Box>

      <Box minWidth={128} bg="#C54575">
        minWidth 128
      </Box>
      <Box minWidth={[96, 128]} bg="#3498db">
        minWidth 96, 128
      </Box>

      <Box height={64} bg="#C54575">
        height 64
      </Box>
      <Box height={[48, 64]} bg="#3498db">
        height 48, 64
      </Box>

      <Box maxHeight={512} bg="#C54575">
        maxHeight 512
      </Box>
      <Box maxHeight={[384, 512]} bg="#3498db">
        maxHeight 384, 512
      </Box>

      <Box minHeight={512} bg="#C54575">
        minHeight 512
      </Box>
      <Box minHeight={[384, 512]} bg="#3498db">
        minHeight 384, 512
      </Box>

      <Box size={32} bg="#C54575">
        size
      </Box>
      <Box size={[32, 48]} bg="#3498db">
        size
      </Box>
    </>
  );
};
