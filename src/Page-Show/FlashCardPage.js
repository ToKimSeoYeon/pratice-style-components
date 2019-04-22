import React from "react";
import Grid from "../DeclarePrimitive/LayoutComponents/Grid";
import FlashCard from "../Components/FlashCardComponents";
import apples from "../Data/apples";
import AddCard from "../Components/FlashCardComponents/AddCard";

// 데이터 입력 & 주는곳
export default () => {
  return (
    <Grid
      p={4}
      display="flex"
      gridTemplateColumns="repeat(auto-fill, 256px)"
      gridAutoRows="max-content"
      gridAutoColumns="max-content"
      gridGap="4rem"
      justifyContent="center"
    >
      {apples.map(apple => (
        <FlashCard key={apple.id} src={apple.image} title={apple.name} />
      ))}
      <AddCard />
    </Grid>
  );
};
