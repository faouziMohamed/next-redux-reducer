import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeName = "dark" | "light";
type AppTheme = {
  name: ThemeName;
  main: string;
  secondary: string;
  darK: string;
};
const initialState: AppTheme = {
  name: "light",
  main: "#5eabf5",
  secondary: "#343a40",
  darK: "#000000",
};

const lightTheme: AppTheme = {
  name: "light",
  main: "#35ea35",
  secondary: "#343a40",
  darK: "#000000",
};

const darkTheme: AppTheme = {
  name: "dark",
  main: "#343a40",
  secondary: "#f8f9fa",
  darK: "#ffffff",
};

const themes: Record<ThemeName, AppTheme> = {
  light: lightTheme,
  dark: darkTheme,
};

// Create slice create the switch case for the reducer for us
// we just use the action function to change the state
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeName>) => {
      const theme = themes[action.payload];
      state.name = theme.name;
      state.main = theme.main;
      state.secondary = theme.secondary;
      state.darK = theme.darK;
    },
  },
});

const themeReducer = themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
export default themeReducer;
