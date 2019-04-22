import React, { Component } from "react";
import { H1, Span, Input, A } from "styled-system-html";
import { Transition } from "react-spring/renderprops";
import {
  Container,
  SignInContainer,
  SignUpContainer,
  Button
} from "./Container";
import Icon from "./Icon";
import SignInOverlay from "./SignInOverlay";
import SignUpOverlay from "./SignUpOverlay";

class OpacityLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerToggle: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = e => {
    this.setState({ containerToggle: !this.state.containerToggle });
  };

  render() {
    return (
      <Container>
        <SignInContainer>
          <H1>Sign In</H1>
          <Icon />

          <Span display="inline-block">or use your account</Span>

          <Input
            bg="#eee"
            border="none"
            p="12px 15px"
            margin="8px 0"
            width="80%"
            placeholder="Email"
            display="inline-block"
          />
          <Input
            bg="#eee"
            border="none"
            p="12px 15px"
            margin="8px 0"
            width="80%"
            placeholder="password"
            display="inline-block"
          />
          <A mt={2} mb={3} width="80%" display="inline-block">
            Forgot your password?
          </A>
          <Button>Sign In</Button>
        </SignInContainer>
        <SignUpContainer>
          <H1>Create Account</H1>
          <Icon />
          <Span display="inline-block">or use your email for registration</Span>
          <Input
            bg="#eee"
            border="none"
            p="12px 15px"
            margin="8px 0"
            width="80%"
            placeholder="Name"
            display="inline-block"
          />
          <Input
            bg="#eee"
            border="none"
            p="12px 15px"
            margin="8px 0"
            width="80%"
            placeholder="Email"
            display="inline-block"
          />
          <Input
            bg="#eee"
            border="none"
            p="12px 15px"
            margin="8px 0"
            width="80%"
            placeholder="password"
            display="inline-block"
          />
          <Button>Sign Up</Button>
        </SignUpContainer>
        <Transition
          items={this.state.containerToggle}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {toggle =>
            toggle
              ? props => (
                  <div style={props}>
                    <SignInOverlay toggle={this.toggle} />
                  </div>
                )
              : props => (
                  <div style={props}>
                    <SignUpOverlay toggle={this.toggle} />
                  </div>
                )
          }
        </Transition>
      </Container>
    );
  }
}

export default OpacityLogin;
