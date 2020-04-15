import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import api from "./api";
import Autosuggest from "../../infra/Autosuggest";
import Box from "../../infra/Box";
import Text from "../../infra/Text";

export default () => {
  const router = useRouter();
  const [formError, setFormError] = useState(null);

  async function getSuggestions(query: string) {
    const { meals, error } = await api.search(query);
    if (error) {
      setFormError(
        "Error occurred, please try different query or try again later!"
      );
      return [];
    }

    return meals.map(i => ({
      id: i.idMeal,
      label: i.strMeal,
      imageSrc: i.strMealThumb
    }));
  }

  async function onSelect(val) {
    await router.push(`/meal/${val.id}`);
  }

  return (
    <Box flex width={1} maxWidth="600px" px={2} flexDirection="column">
      <Link href="/" passHref>
        <Text
          fontSize={[5, 6]}
          fontWeight="bold"
          color="primary"
          mb={4}
          textAlign="center"
          as="a"
          sx={{
            textDecoration: "none"
          }}
        >
          Mealer
        </Text>
      </Link>
      <Autosuggest
        getSuggestions={getSuggestions}
        onSelect={onSelect}
        placeholder="Search meal by name..."
        inputVariant="bigSearchInput"
      />
      {formError && <Text color="status-critical">{formError}</Text>}
    </Box>
  );
};
