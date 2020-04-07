import React, { useCallback, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Box, Text, TextInput } from "grommet";
import { Search } from "grommet-icons";
import api from "../api";
import Suggestions from "./Suggestions";

export default () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const [suggestionOpen, setSuggestionOpen] = useState(false);
  const [suggestedMeals, setSuggestedMeals] = useState([]);
  const [formError, setFormError] = useState(null);
  const boxRef = useRef();

  const onChange = async event => {
    const { value: newValue } = event.target;
    setFormError(null);
    setValue(newValue);

    if (!newValue.trim()) {
      setSuggestedMeals([]);
      return;
    }

    const { meals, error } = await api.search(value);
    if (error) {
      setFormError(
        "Error occurred, please try different query or try again later!"
      );
      return;
    }

    setSuggestedMeals(meals);
  };

  const onSelect = event => router.push(`/meal/${event.suggestion.value}`);

  const onOpen = useCallback(() => setSuggestionOpen(true), [
    setSuggestionOpen
  ]);
  const onClose = useCallback(() => setSuggestionOpen(false), [
    setSuggestionOpen
  ]);

  const suggestions = useMemo(() => {
    return suggestedMeals
      .filter(
        ({ strMeal }) => strMeal.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
      .map(
        (
          { strMeal: name, strMealThumb: imageUrl, idMeal: id },
          index,
          list
        ) => ({
          label: (
            <Suggestions
              name={name}
              imageUrl={imageUrl}
              isLast={index === list.length - 1}
            />
          ),
          value: id
        })
      );
  }, [suggestedMeals, value]);

  return (
    <>
      <Box
        ref={boxRef}
        width="large"
        direction="row"
        align="center"
        pad={{ horizontal: "small", vertical: "xsmall" }}
        round="small"
        elevation={suggestionOpen ? "medium" : undefined}
        border={{
          side: "all",
          color: suggestionOpen ? "transparent" : "border"
        }}
        style={
          suggestionOpen
            ? {
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px"
              }
            : undefined
        }
      >
        <Search color="brand" />
        <TextInput
          type="search"
          dropTarget={boxRef.current}
          plain
          value={value}
          onChange={onChange}
          onSelect={onSelect}
          suggestions={suggestions}
          placeholder="Search meal by name..."
          onSuggestionsOpen={onOpen}
          onSuggestionsClose={onClose}
        />
      </Box>
      {formError && <Text color="status-critical">{formError}</Text>}
    </>
  );
};
