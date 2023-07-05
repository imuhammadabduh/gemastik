import React, { createContext, useReducer } from "react";

export let defaultTheme = {
  colorPalette_1: "#F1F4FF",
  colorPalette_2: "#5273E1",
  colorPalette_3: "#113",
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "+":
      return "mabduh +";
    case "-":
      return "mabduh -";
    default:
      return state;
  }
};
export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(themeReducer, defaultTheme);
  return (
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
