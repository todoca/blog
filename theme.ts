import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--my-black2": "#252526",
  "--todoca-brand": "#002399",
  "--my-red": "#db4437",
  "--my-green": "#0f9d58",
  "--my-yellow": "#FEB95F",
};

export const myTheme = buildLegacyTheme({
  // Base theme colors
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray-base": "#666",
  "--gray": "#666",

  // Brand
  "--brand-primary": props["--todoca-brand"],

  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--todoca-brand"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  //State
  "--state-info-color": props["--todoca-brand"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  // Nav bar
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--todoca-brand"],
});
