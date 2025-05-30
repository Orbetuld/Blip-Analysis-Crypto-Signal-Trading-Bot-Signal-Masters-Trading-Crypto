import { Colors, extendTheme, StyleProps, ThemeConfig } from "@chakra-ui/react";

const colors: Colors = {
  primary: {
    50: "rgba(0, 182, 255, 0.1)",
    100: "rgba(0, 182, 255, 0.2)",
    200: "rgba(0, 182, 255, 0.4)",
    300: "rgba(0, 182, 255, 0.6)",
    400: "rgba(0, 182, 255, 0.8)",
    500: "#00b6ff",
    600: "#0092cc",
    700: "#006d99",
    800: "#004966",
    900: "#002433",
  },

  gray: {
    50: "rgba(50, 57, 60, 0.1)",
    100: "rgba(50, 57, 60, 0.2)",
    200: "rgba(50, 57, 60, 0.4)",
    300: "rgba(50, 57, 60, 0.6)",
    400: "rgba(50, 57, 60, 0.8)",
    500: "#32393c",
    600: "#2C2C2C",
    700: "#131313",
    800: "#030303",
    900: "#0a0b0c",
  },

  light: {
    50: "rgba(255, 255, 255, 0.08)",
    100: "rgba(255, 255, 255, 0.2)",
    200: "rgba(255, 255, 255, 0.4)",
    300: "rgba(255, 255, 255, 0.6)",
    400: "rgba(255, 255, 255, 0.8)",
    500: "#ffffff",
    600: "#cccccc",
    700: "#999999",
    800: "#666666",
    900: "#333333",
  },

  accent: {
    orange: "#FF8B00",
    blue: "#0019F8",
    pink: "#D00BF0",
  },
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  heading: "Noto Sans Bengali, sans-serif",
  body: "Noto Sans Bengali, sans-serif",
};

const styles = {
  global: (props: StyleProps) => ({
    body: {
      bg: "gray.800",
      color: "light.500",
      fontVariant: "normal",
    },
  }),
};

const customTheme = extendTheme({
  colors,
  config,
  styles,
  fonts,
});

export default customTheme;
