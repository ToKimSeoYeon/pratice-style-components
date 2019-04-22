import React, { Component } from "react";
// import BoxPage from "./Page-Show/BoxPage";
// import AnimationPage from "./Page-Show/AnimationPage";
// import LoaderPage from "./Page-Show/LoaderPage";
import GridCardPage from "./Page-Show/GridCardPage";
import FlashCardPage from "./Page-Show/FlashCardPage";
import SlidingLoginPage from "./Page-Show/SlidingLoginPage";

class App extends Component {
  render() {
    return (
      <>
        {/* <BoxPage /> */}
        {/* <AnimationPage /> */}
        {/* <LoaderPage /> */}
        <GridCardPage />
        <FlashCardPage />
        <SlidingLoginPage />
      </>
    );
  }
}

export default App;
