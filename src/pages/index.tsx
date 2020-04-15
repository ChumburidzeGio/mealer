import React from "react";
import { SearchBox } from "../domains/meals";
import App from "../infra/App";
import Box from "../infra/Box";

export default () => (
  <App title="Search meals on Mealer">
    <Box
      flex
      minHeight="100vh"
      height={1}
      flexDirection="column"
      width={1}
      justifyContent="center"
      alignItems="center"
      bg="highlight"
    >
      <SearchBox />
    </Box>
  </App>
);
