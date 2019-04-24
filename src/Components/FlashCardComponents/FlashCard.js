import React from "react";
import styled from "styled-components";
import Box from "../../DeclarePrimitive/BoxComponents";
import BackgroundImage from "../../DeclarePrimitive/BackgroundImageComponents";
import CardTitle from "./CardTitle";
import { IoIosSettings, IoIosApps } from "react-icons/io";

const showlog = () => {
  console.log("testlog");
};

const PointerBox = styled(Box)`
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const HoveringIoIosApps = styled(IoIosApps)`
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const HoveringIoIosSettings = styled(IoIosSettings)`
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
// Card의 전체적인 틀
function FlashCard({ key, src, title, ...props }) {
  return (
    <PointerBox
      position="relative"
      borderRadius={20}
      {...props}
      onClick={showlog}
    >
      <BackgroundImage width="100%" src={src} borderRadius={20} />
      <CardTitle>{title}</CardTitle>

      <Box position="absolute" bottom={20} right={80} />

      <Box position="absolute" bottom={20} right={50}>
        <HoveringIoIosApps />
      </Box>

      <Box position="absolute" bottom={20} right={20}>
        <HoveringIoIosSettings onClick={e => props.menuToggle(key, title)} />
      </Box>
    </PointerBox>
  );
}

export default FlashCard;
