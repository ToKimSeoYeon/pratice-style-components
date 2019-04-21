import React from "react";
import Text from "../../../DeclarePrimitive/TextComponents";
import Span from "../../../DeclarePrimitive/SpanComponents";

const Price = ({ price, status, salePrice }) => {
  const onSale = status === "SALE";

  return (
    <Text my={0} lineHeight="solid">
      <Span enabled={onSale} fontSize={1}>
        ${price}
      </Span>
      {onSale && (
        <Text ml={2} is="span" color="red" fontSize={1}>
          ${salePrice}
        </Text>
      )}
    </Text>
  );
};

export default Price;
