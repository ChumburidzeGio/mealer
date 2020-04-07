import React from "react";
import App from "next/app";
import { Grommet } from "grommet";
import theme from "../infra/theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Grommet theme={theme} full>
        <Component {...pageProps} />
      </Grommet>
    );
  }
}
