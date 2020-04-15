import React, { useMemo } from "react";
import Box from "../../../infra/Box";
import Text from "../../../infra/Text";
import Image from "../../../infra/Image";
import Ingredients, { Props as IngredientsProps } from "./Ingredients";
import YoutubeVideo from "./YoutubeVideo";

interface Props {
  meal: {
    strMeal: string;
    strMealThumb: string;
    strYoutube: string;
    strInstructions: string;
  };
}

const DetailsBox: React.FC<Props> = ({ meal }) => {
  const {
    strMeal: title,
    strMealThumb: imageSrc,
    strYoutube: youtubeUrl,
    strInstructions: instructions
  } = meal;

  const ingredients: IngredientsProps["list"] = useMemo(() => {
    return Object.keys(meal).reduce((acc, cur) => {
      if (cur.startsWith("strIngredient")) {
        const index = parseInt(cur.replace("strIngredient", ""), 10);
        const ingredient = meal[cur];
        const measure = meal[`strMeasure${index}`];
        if (ingredient && measure) acc.push({ ingredient, measure });
      }
      return acc;
    }, []);
  }, [meal]);

  return (
    <Box
      flex
      maxWidth="600px"
      flexDirection="column"
      bg="white"
      mt={4}
      sx={{
        borderRadius: "default",
        overflow: "hidden"
      }}
    >
      <Image src={imageSrc} alt={title} />

      <Box m={4}>
        <Text fontSize={[4, 5]} fontWeight="bold" mb={4}>
          {title}
        </Text>

        <Text fontSize={[3, 4]} fontWeight="bold" my={3}>
          Instructions
        </Text>
        <Text fontSize={2}>
          {instructions.split("\n").map(item => (
            <span key={item.slice(0, 50)}>
              {item}
              <br />
            </span>
          ))}
        </Text>

        <Text fontSize={[3, 4]} fontWeight="bold" my={3}>
          Ingredients
        </Text>
        <Ingredients list={ingredients} />

        <Text fontSize={[3, 4]} fontWeight="bold" mt={4} mb={3}>
          Preparation Video:
        </Text>
        <YoutubeVideo url={youtubeUrl} />
      </Box>
    </Box>
  );
};

export default DetailsBox;
