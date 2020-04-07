import { Box, Image, Text } from "grommet";
import React from "react";

interface Props {
  name: string;
  imageUrl: string;
  isLast: boolean;
}

export default ({ name, imageUrl }: Props, isLast: number) => (
  <Box
    direction="row"
    align="center"
    gap="small"
    border={isLast ? undefined : "bottom"}
    pad="small"
  >
    <Image width="48px" src={imageUrl} style={{ borderRadius: "100%" }} />
    <Text size="small">
      <strong>{name}</strong>
    </Text>
  </Box>
);
