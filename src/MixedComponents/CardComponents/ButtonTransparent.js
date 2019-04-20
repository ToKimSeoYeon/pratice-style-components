import styled from "styled-components";
import system from "system-components";

const Button = system({
  is: "button",
  fontSize: 2,
  lineHeight: "solid",
  m: 0,
  p: 3,
  color: "white",
  borderRadius: 0,
  border: 0,
  textAlign: "center"
});

const ButtonTransparent = styled(Button)`
  background-color: transparent;
  font-family: inherit;
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
  appearance: none;
  cursor: pointer;
  transition: transform .25s ease-out;

  &:hover,
  &:focus {
    transform: scale( 1.05 );
  }

  &:focus { outline: 1px dotted gray; }
  
  &:active { transform: scale( 0.90 ); }
  
  &:disabled { opacity: 0.25; }
)`;

export default ButtonTransparent;
