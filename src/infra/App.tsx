import React, { FC } from "react";
import styled from "styled-components";
import Head from "next/head";

interface Props {
  title: string;
}

const Main = styled.div`
  display: flex;
  align-items: center;
  color: #444444;
  flex-flow: column;
  padding-top: 48px;
  padding-bottom: 48px;
  background: #f8f8f8;
`;

const App: FC<Props> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Main>{children}</Main>
  </>
);

export default App;
