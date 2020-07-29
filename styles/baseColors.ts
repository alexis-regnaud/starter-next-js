interface ColorPallete {
  [k: string]: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

interface AlternativeColorPallete {
  [k: string]: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

interface ContrastDefaultColor {
  contrastDefaultColor: string;
}

export const greenLight: ColorPallete | AlternativeColorPallete | ContrastDefaultColor = {
  50: "#fefefd",
  100: "#fbfcfb",
  200: "#f9faf8",
  300: "#f7f8f5",
  400: "#f5f7f3",
  500: "#f3f5f1",
  600: "#f1f4ef",
  700: "#eff2ed",
  800: "#edf0eb",
  900: "#eaeee7",
  A100: "#ffffff",
  A200: "#ffffff",
  A400: "#ffffff",
  A700: "#ffffff",
  contrastDefaultColor: "dark",
};

export const green: ColorPallete | AlternativeColorPallete | ContrastDefaultColor = {
  50: "#f6f6eb",
  100: "#e9e9ce",
  200: "#dadbad",
  300: "#cbcc8c",
  400: "#bfc174",
  500: "#b4b65b",
  600: "#adaf53",
  700: "#a4a649",
  800: "#9c9e40",
  900: "#8c8e2f",
  A100: "#feffd5",
  A200: "#fdffa2",
  A400: "#fcff6f",
  A700: "#fcff56",
  contrastDefaultColor: "dark",
};

export const greenDark: ColorPallete | AlternativeColorPallete | ContrastDefaultColor = {
  50: "#ecefeb",
  100: "#d0d6cd",
  200: "#b1bbab",
  300: "#91a089",
  400: "#7a8b70",
  500: "#627757",
  600: "#5a6f4f",
  700: "#506446",
  800: "#465a3c",
  900: "#34472c",
  A100: "#b5ff94",
  A200: "#92ff61",
  A400: "#6eff2e",
  A700: "#5dff14",
  contrastDefaultColor: "light",
};

export const black = "#000000";
export const white = "#FFFFFF";

export const darkText = {
  primary: "rgba(0, 0, 0, 0.87)",
  secondary: "rgba(0, 0, 0, 0.54)",
  disabled: "rgba(0, 0, 0, 0.38)",
  dividers: "rgba(0, 0, 0, 0.12)",
};
export const lightText = {
  primary: "rgba(255, 255, 255, 1)",
  secondary: "rgba(255, 255, 255, 0.7)",
  disabled: "rgba(255, 255, 255, 0.5)",
  dividers: "rgba(255, 255, 255, 0.12)",
};

export const darkIcons = {
  active: "rgba(0, 0, 0, 0.54)",
  inactive: "rgba(0, 0, 0, 0.38)",
};

export const lightIcons = {
  active: "rgba(255, 255, 255, 1)",
  inactive: "rgba(255, 255, 255, 0.5)",
};
