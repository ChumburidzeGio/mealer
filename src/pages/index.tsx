import React from "react";
import styled from "styled-components";
import { SearchBox } from "../domains/meals";
import App from "../infra/App";

const Wrapper = styled.div`
  height: calc(100vh - 96px);
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export default () => (
  <App title="Search meals on Mealer">
    <Wrapper>
      <SearchBox />
    </Wrapper>
  </App>
);
