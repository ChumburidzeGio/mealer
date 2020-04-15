import React, { useState } from "react";
import Input from "./Input";
import Text from "./Text";
import Image from "./Image";
import Box from "./Box";

export interface Suggestion {
  label: string;
  imageSrc?: string;
  [key: string]: string | number | boolean;
}

interface Props {
  getSuggestions: (query: string) => Promise<Suggestion[]> | Suggestion[];
  onSelect: (suggestion: Suggestion) => Promise<void> | void;
  inputVariant?: string;
  placeholder?: string;
}

const Autosuggest: React.FC<Props> = ({
  getSuggestions,
  onSelect,
  placeholder,
  inputVariant
}) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  const handleOnChange = async event => {
    const { value: query } = event.target as HTMLInputElement;
    setValue(query);
    const isInputEmpty = typeof value === "string" && query.trim().length <= 1;
    setSuggestions(isInputEmpty ? [] : await getSuggestions(query));
  };

  const handleOnClick = (suggestion: Suggestion) => async () => {
    await onSelect(suggestion);
    setSuggestionsOpen(false);
  };

  const handleOnFocus = () => setSuggestionsOpen(true);
  const handleBackdropClick = () => setSuggestionsOpen(false);

  return (
    <Box flex width={1} flexDirection="column">
      <Input
        id="name"
        name="veryRandomName"
        variant={inputVariant}
        placeholder={placeholder}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        value={value}
      />
      {suggestionsOpen && suggestions.length > 0 && (
        <>
          <Box
            variant="backdrop"
            sx={{ zIndex: 25 }}
            onClick={handleBackdropClick}
          />
          <Box
            flex
            sx={{
              position: "relative"
            }}
          >
            <Box
              flex
              py={1}
              bg="white"
              boxShadow="card"
              width={1}
              sx={{
                position: "absolute",
                boxShadow: "card",
                zIndex: 50,
                borderRadius: "default"
              }}
            >
              <Box
                flexDirection="column"
                flex
                width={1}
                maxHeight="30vh"
                sx={{
                  overflow: "scroll"
                }}
              >
                {suggestions.map(suggestion => (
                  <Box
                    key={suggestion.label}
                    onClick={handleOnClick(suggestion)}
                    flexDirection="row"
                    flex
                    px={2}
                    sx={{
                      "&:hover": {
                        bg: "muted",
                        cursor: "pointer"
                      }
                    }}
                  >
                    {suggestion.imageSrc && (
                      <Image
                        src={suggestion.imageSrc}
                        alt={suggestion.label}
                        width={35}
                        height={35}
                        variant="avatar"
                        display="flex"
                        mr={2}
                        my={1}
                      />
                    )}
                    <Text fontSize={[1, 2]} fontWeight="500" lineHeight="42px">
                      {suggestion.label}
                    </Text>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Autosuggest;
