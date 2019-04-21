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
      gridGap="1rem"
      justifyContent="center"
    >
      {apples.map(apple => (
        <FlashCard key={apple.id} src={apple.image} title={apple.name} />
      ))}
      <AddCard />
    </Grid>
  );
};

// import React from "react";
// import Box from "../../DeclarePrimitive/BoxComponents";
// import ImageCard from "./ImageCard";
// import ProductTag from "./TopLeft/ProductTag";
// import FavouriteButton from "./TopRight/FavouriteButton";
// import HeadingWithDash from "./BottomLeft/HeadingWithDash";
// import Price from "./BottomLeft/Price";

// //  GridCardPage에서 데이터를 통쨰로 입력 했다면, 여기선 데이터를 나눠서 주는 역할

// const statusText = status =>
//   ({
//     NEW: "New",
//     SALE: "Sale"
//   }[status]);

// // 여기서 props는 다른 backgroundImage의 url을 불러오는 역할을 한다
// const ProductCard = ({ shoe, ...props }) => (
//   <ImageCard
//     src={shoe.image}
//     {...props}
//     tl={shoe.status && <ProductTag>{statusText(shoe.status)}</ProductTag>}
//     tr={<FavouriteButton p={2} m={2} isFavourite={shoe.favourite} />}
//     bl={
//       // ml = margin left, mb = margin bottom
//       <Box ml={3} mb={2}>
//         <HeadingWithDash dashWidth={1} fontSize={1} lineHeight="solid" mb={1}>
//           {shoe.name}
//         </HeadingWithDash>
//         <Price {...shoe} />
//       </Box>
//     }
//   />
// );

// export default ProductCard;
