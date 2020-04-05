import { Theme } from "../types";

const white = "#FFFFFF";
const black = "#181818";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const themeLight = {
  background: white,
  body: black,
  bodyFade: "#868383",
  highLight: "#1de9b6",
  device,
};

const themeDark = {
  background: black,
  body: white,
  bodyFade: "#b7b3b3",
  highLight: "#1565c0",
  device,
};

const theme = (mode: string): Theme =>
  mode === "dark" ? themeDark : themeLight;

export default theme;
