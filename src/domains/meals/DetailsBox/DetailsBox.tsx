import React, { useContext, useMemo } from "react";
import { Box, Heading, Image, Paragraph, ResponsiveContext } from "grommet";
import styled from "styled-components";
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

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 0;
  background: #f3f3f3;
  border-radius: 10px;
  margin-top: 20px;
  padding-bottom: 20px;
  max-width: 700px;
`;

const DetailsBox: React.FC<Props> = ({ meal }) => {
  const size = useContext(ResponsiveContext);

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
    <Wrapper>
      <Heading level={1} size="medium" alignSelf="center">
        {title}
      </Heading>

      <Box direction={size === "small" ? "column" : "row"} pad="medium">
        <Box width="medium" alignContent="center">
          <Image src={imageSrc} fill alignSelf="center" />
        </Box>

        <Box pad={size === "small" ? "none" : "medium"} direction="column">
          <Heading
            level={5}
            size="medium"
            margin={{ top: "25px", bottom: "0" }}
          >
            Ingredients
          </Heading>
          <Ingredients list={ingredients} />
        </Box>
      </Box>

      <Box pad={{ horizontal: "medium" }}>
        <Heading level={3} size="medium" margin="0">
          Instructions
        </Heading>

        <Paragraph fill>
          {instructions.split("\n").map(item => (
            <span key={item.slice(0, 50)}>
              {item}
              <br />
            </span>
          ))}
        </Paragraph>

        <Heading level={3} size="medium">
          How to prepare dish?
        </Heading>
        <YoutubeVideo url={youtubeUrl} />
      </Box>
    </Wrapper>
  );
};

export default DetailsBox;
