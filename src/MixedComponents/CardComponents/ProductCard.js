import React from "react";
import Box from "../../SimpleComponents/BoxComponents";
import ImageCard from "./ImageCard";
import HeadingWithDash from "./HeadingWithDash";
// import Box, ImageCard, HeadingWithDash from '../../SimpleComponents/
import ProductTag from "./ProductTag";
import { FavouriteButton } from "./FavouriteButton";
import Price from "./Price";

const statusText = status =>
  ({
    NEW: "New",
    SALE: "Sale"
  }[status]);

const ProductCard = ({ shoe, ...props }) => (
  <ImageCard
    ratio={803 / 632}
    src={shoe.image}
    {...props}
    tl={shoe.status && <ProductTag>{statusText(shoe.status)}</ProductTag>}
    tr={<FavouriteButton p={2} m={2} isFavourite={shoe.favourite} />}
    bl={
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
