import React from "react";
import App from "next/app";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { ThemeProvider } from "emotion-theming";
import theme from "../infra/theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Grommet theme={grommet} full>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Grommet>
    );
  }
}
