import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";

export default deepMerge(grommet, {
  global: {
    drop: {
      background: "#fff",
      shadowSize: "medium",
      extend: `
          overflow: hidden;
        `
    },
    elevation: {
      dark: {
        medium: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
      },
      light: {
        medium: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
      }
    },
    font: {
      size: "14px"
    }
  }
});
