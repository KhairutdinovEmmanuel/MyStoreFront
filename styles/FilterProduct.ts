import { createStyles } from "@material-ui/styles";

export default (theme) => createStyles({
  containerFilterProduct: {
    maxWidth: "960px",
    margin: "auto",

    [`${theme.breakpoints.up("lg")}`]: {
      maxWidth: "1100px",
    },

    [`${theme.breakpoints.up("xl")}`]: {
      maxWidth: "1260px",
    },
  },
});