import React from "react";
import Box from "../../DeclarePrimitive/BoxComponents";
import ImageCard from "./ImageCard";
import ProductTag from "./TopLeft/ProductTag";
import FavouriteButton from "./TopRight/FavouriteButton";
import HeadingWithDash from "./BottomLeft/HeadingWithDash";
import Price from "./BottomLeft/Price";

//  데이터를 받는 통로를 만듬

const statusText = status =>
  ({
    NEW: "New",
    SALE: "Sale"
  }[status]);

// 여기서 props는 다른 이미지 url을 불러오는 역할을 한다
const ProductCard = ({ shoe, borderRadius, ...props }) => (
  <ImageCard
    src={shoe.image}
    {...props}
    tl={shoe.status && <ProductTag>{statusText(shoe.status)}</ProductTag>}
    tr={<FavouriteButton p={2} m={2} isFavourite={shoe.favourite} />}
    bl={
      // ml = margin left, mb = margin bottom
      <Box ml={3} mb={2}>
        <HeadingWithDash dashWidth={1} fontSize={1} lineHeight="solid" mb={1}>
          {shoe.name}
        </HeadingWithDash>
        <Price {...shoe} />
      </Box>
    }
  />
);

export default ProductCard;
