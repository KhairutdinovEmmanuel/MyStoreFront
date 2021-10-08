import { createStyles } from "@material-ui/styles";

export default (theme) => createStyles({
  containerCardProduct: { 
    maxWidth: "960px",
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",

    [`${theme.breakpoints.up("lg")}`]: {
      maxWidth: "1100px",
    },

    [`${theme.breakpoints.up("xl")}`]: {
      maxWidth: "1280px",
    }
  },
  cardProduct: {
    width: "calc(22.5%)",
    margin: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",

    [`${theme.breakpoints.up("xs")}`]: {
      width: "calc(96%)",
    },

    [`${theme.breakpoints.up("sm")}`]: {
      width: "calc(46%)",
    },

    [`${theme.breakpoints.up("md")}`]: {
      width: "calc(30.5%)",
    },

    [`${theme.breakpoints.up("lg")}`]: {
      width: "calc(22.5%)",
    },
  }
});