import createBreakpoints from "./createBreakpoints";
export default {
  spacing(multiple = 1) {
    return 8 * multiple;
  },
  palette: {
    common: {
      black: "#333333",
      white: "#FFFFFF"
    },
    textColor: "#282828"
  },
  shape: {
    borderRadius: 4
  },
  breakpoints: createBreakpoints({})
};
