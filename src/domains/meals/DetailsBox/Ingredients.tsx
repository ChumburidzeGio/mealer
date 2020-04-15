import React from "react";
import Box from "../../../infra/Box";
import Text from "../../../infra/Text";

export interface Props {
  list: {
    ingredient: string;
    measure: string;
  }[];
}

const Ingredients: React.FC<Props> = ({ list }) => (
  <Box flex flexDirection={["column", "row"]} flexWrap="wrap">
    {list.map(i => (
      <Box flex flexDirection="row" width={["100%", "50%"]} key={i.ingredient}>
        <Text fontSize={2} mr={2} color="secondary">
          {i.ingredient}
        </Text>
        <Text fontSize={2} fontStyle="italic">
          {i.measure}
        </Text>
      </Box>
    ))}
  </Box>
);

export default Ingredients;
