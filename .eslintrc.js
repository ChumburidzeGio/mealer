module.exports = {
  extends: "airbnb-typescript-prettier",
  rules: {
    "react/jsx-props-no-spreading": [
      "warn",
      {
        explicitSpread: "ignore"
      }
    ]
  }
};
