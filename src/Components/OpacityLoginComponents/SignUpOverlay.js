import React from "react";
import Box from "../../DeclarePrimitive/BoxComponents";
import styled from "styled-components";
import { H1, P } from "styled-system-html";

const OverlayContainer = styled(Box)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 20% 5% 5% 5%;
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: white;
  z-index: 1;
`;

const Button = styled(Box)`
  display: inline-block;
  width: 50%;
  border-radius: 20px;
  border: 1px solid white;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
`;

class SignUpOverlay extends React.Component {
  render() {
    return (
      <OverlayContainer>
        <H1>Hello, Friend</H1>
        <P>Enter your personal details and start journey with us</P>
        <Button onClick={this.props.toggle}>Sign Up</Button>
      </OverlayContainer>
    );
  }
}

export default SignUpOverlay;
