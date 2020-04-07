import React from "react";
import { Text } from "grommet";
import { API, SearchBox } from "../../domains/meals";
import App from "../../infra/App";
import DetailsBox from "../../domains/meals/DetailsBox";

const Page = ({ meal, error }) => {
  if (error) {
    return (
      <App title="Error...">
        <Text color="status-critical">404 Error</Text>
      </App>
    );
  }

  return (
    <App title={`${meal.strMeal} on Mealer`}>
      <SearchBox />
      <DetailsBox meal={meal} />
    </App>
  );
};

Page.getInitialProps = async ctx => API.lookup(ctx.query.mid);

export default Page;
