import { createStyles } from "@material-ui/styles";

export default (theme) => createStyles({
  containerCardSectionProduct: { 
    maxWidth: "960px",
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",

    [`${theme.breakpoints.up("xs")}`]: {
      maxWidth: "580px",
    },

    [`${theme.breakpoints.up("sm")}`]: {
      maxWidth: "860px",
    },

    [`${theme.breakpoints.up("md")}`]: {
      maxWidth: "960px",
    },
  },
  cardSectionProduct: {
    maxWidth: "940px",
    margin: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    flex: "1 1 360px",

    [`${theme.breakpoints.up("xs")}`]: {
      maxWidth: "580px",
      flex: "1 1 260px",
    },

    [`${theme.breakpoints.up("sm")}`]: {
      maxWidth: "940px",
      flex: "1 1 280px",
    },

    [`${theme.breakpoints.up("sm")}`]: {
      maxWidth: "1020px",
      flex: "1 1 450px",
    },
  }
});