import COLORS from "./colors";

export interface themeProps {
  [key: string]: string;
}

const THEME = {
  primary: COLORS.black,
  secondary: COLORS.teal,
  accent: COLORS.teal,
  error: COLORS.red,
  info: COLORS.cyan,
  success: COLORS.green,
  warning: COLORS.amber
};

export default THEME;
