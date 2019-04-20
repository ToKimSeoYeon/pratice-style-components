import React, { Component } from "react";
import BoxPage from "./Page-Show/BoxPage";
import AnimationPage from "./Page-Show/AnimationPage";
import LoaderPage from "./Page-Show/LoaderPage";

class App extends Component {
  render() {
    return (
      <>
        <BoxPage />
        <AnimationPage />
        <LoaderPage />
      </>
    );
  }
}

export default App;
