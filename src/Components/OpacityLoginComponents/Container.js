import styled from "styled-components";
import Box from "../../DeclarePrimitive/BoxComponents";

export const Container = styled(Box)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
`;

export const SignInContainer = styled(Box)`
  position: absolute;
  top: 0;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  padding: 5%;
  background-color: white;
`;

export const SignUpContainer = styled(Box)`
  position: absolute;
  top: 0;
  height: 100%;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  transition: all 0.6s ease-in-out;
  left: 0;
  padding:5%
  width: 50%;
  background-color: white;
  transform: translateX(100%);
`;

export const Button = styled(Box)`
  display: inline-block;
  width: 50%;
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
`;
