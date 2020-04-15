import React from "react";
import { Box, Flex } from "rebass";

interface Props {
  flex?: boolean;
  flexDirection?: "column" | "row" | ("column" | "row")[];
  onClick?: () => void;
  py?: number;
  px?: number;
  m?: number;
  mt?: number;
  sx?: object;
  variant?: string;
  width?: number | string[];
  justifyContent?: "center";
  minHeight?: string;
  maxHeight?: string;
  maxWidth?: string;
  bg?: string;
  alignItems?: "center";
  height?: number;
  boxShadow?: "card";
  flexWrap?: "wrap";
}

const BoxCustom: React.FC<Props> = ({ flex, ...props }) =>
  flex ? <Flex {...props} /> : <Box {...props} />;

export default BoxCustom;
