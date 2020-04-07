import React, { useContext } from "react";
import styled from "styled-components";
import { ResponsiveContext } from "grommet";

export interface Props {
  list: {
    ingredient: string;
    measure: string;
  }[];
}

interface RespProps {
  size: string;
}

const Wrapper = styled.div<RespProps>`
  display: flex;
  flex-flow: ${({ size }) => (size === "small" ? "row wrap" : "column")};
`;

const Item = styled.div<RespProps>`
  display: flex;
  flex-flow: row;
  width: ${({ size }) => (size === "small" ? "50%" : "100%")};
`;

const ItemTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-right: 15px;
`;

const ItemSubtitle = styled.div`
  font-size: 14px;
`;

const Ingredients: React.FC<Props> = ({ list }) => {
  const size = useContext(ResponsiveContext);

  return (
    <Wrapper size={size}>
      {list.map(i => (
        <Item size={size}>
          <ItemTitle>{i.ingredient}</ItemTitle>
          <ItemSubtitle>{i.measure}</ItemSubtitle>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Ingredients;
