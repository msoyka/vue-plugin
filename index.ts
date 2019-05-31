import VueThemeInstall from "./install";
import THEME, { themeProps } from "./themeConfig";

class VueTheme {
  static install: (Vue: any) => void;
  static version: string;
  theme: themeProps;

  constructor() {
    this.theme = THEME;
  }
}

VueTheme.install = VueThemeInstall;
VueTheme.version = "1.0.0";

export default VueTheme;
