import React from "react";
import Grid from "../DeclarePrimitive/LayoutComponents/Grid";
import ProductCard from "../Components/ShopingCardComponents";
import shoes from "../Data/shoes";

// 데이터 입력 & 주는곳
export default () => {
  return (
    <Grid
      p={4}
      display="flex"
      gridTemplateColumns="repeat(auto-fill, 256px)"
      gridAutoRows="max-content"
      gridAutoColumns="max-content"
      gridGap="1rem"
      justifyContent="center"
    >
      {shoes.map(shoe => (
        <ProductCard key={shoe.id} shoe={shoe} />
      ))}
    </Grid>
  );
};
