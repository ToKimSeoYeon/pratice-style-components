import React, { Component } from "react";
// import BoxPage from "./Page-Show/BoxPage";
// import AnimationPage from "./Page-Show/AnimationPage";
// import LoaderPage from "./Page-Show/LoaderPage";
import GridCardPage from "./Page-Show/GridCardPage";
import FlashCardPage from "./Page-Show/FlashCardPage";
import SlidingLoginPage from "./Page-Show/SlidingLoginPage";
import SidebarPage from "./Page-Show/SidebarPage.js";
import "./menu.css";

class App extends Component {
  render() {
    return (
      <>
        {/* <BoxPage /> */}
        {/* <AnimationPage /> */}
        {/* <LoaderPage /> */}
        <SidebarPage />
        <GridCardPage />
        <FlashCardPage />
        <SlidingLoginPage />
      </>
    );
  }
}

export default App;
