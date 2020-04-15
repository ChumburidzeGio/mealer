import React from "react";
import { API, SearchBox } from "../../domains/meals";
import App from "../../infra/App";
import DetailsBox from "../../domains/meals/DetailsBox";
import Box from "../../infra/Box";
import Text from "../../infra/Text";

const Page = ({ meal, error }) => {
  if (error) {
    return (
      <App title="Error...">
        <Box
          flex
          flexDirection="column"
          minHeight="100vh"
          height={1}
          justifyContent="center"
          alignItems="center"
        >
          <Text color="error" fontSize={[5, 6]}>
            404 Error
          </Text>
        </Box>
      </App>
    );
  }

  return (
    <App title={`${meal.strMeal} on Mealer`}>
      <Box
        flex
        flexDirection="column"
        width={1}
        justifyContent="center"
        alignItems="center"
        bg="highlight"
        py={4}
      >
        <SearchBox />
        <DetailsBox meal={meal} />
      </Box>
    </App>
  );
};

Page.getInitialProps = async ctx => API.lookup(ctx.query.mid);

export default Page;
