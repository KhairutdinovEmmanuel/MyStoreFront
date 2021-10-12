import { makeStyles, Theme } from "@material-ui/core";

export type PropsType = { 
  openMenu?: boolean;
}

export default makeStyles<Theme, PropsType>((theme) => ({
  header: {
    width: "100%",
    display: "flex",
    position: "relative",
    paddingTop: theme.spacing(1.2), 
    paddingBottom: theme.spacing(1.2), 
    background: theme.palette.grey[800],
    color: theme.palette.common.white,

    [`${theme.breakpoints.down("md")}`]: {
      marginBottom: (props) => (props.openMenu ? theme.spacing(10) : 0), 
    },
  },
  containerMenuIcon: {
    [`${theme.breakpoints.up("xs")}`]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },

    [`${theme.breakpoints.up("md")}`]: {
      display: "none",
    }
  },
  sectionLogo: {
    width: "200px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center", 

    [`${theme.breakpoints.up("xs")}`]: {
      width: "200px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },

    [`${theme.breakpoints.up("md")}`]: {
      width: "200px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    }
  },
  titleLogo: {
    fontSize: theme.spacing(4),
    fontWeight: 900,
  },
  sectionTabs: {
    [`${theme.breakpoints.up("xs")}`]: {
      width: "100%",
      height: (props) => (props.openMenu ? "100vh" : "initial"),
      display: (props) => (props.openMenu ? "flex" : "none"),
      flexDirection: 'column',
      position: "absolute",
      background: theme.palette.grey[800],
      top: "70px",
      zIndex: 5,
    },

    [`${theme.breakpoints.up("sm")}`]: {
      display: (props) => (props.openMenu ? "flex" : "none"),
      flex: " 1 1 300px",
    },

    [`${theme.breakpoints.up("md")}`]: {
      height: "initial",
      display: "flex !important",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      position: "static !important",
      bottom: "0",
    }
  },
  tab: {
    [`${theme.breakpoints.up("xs")}`]: {
      display: "flex",
    },
  },
  tabTitle: {
    fontSize: theme.spacing(3),
    fontWeight: 600,
    marginLeft: theme.spacing(1),

    [`${theme.breakpoints.up("xs")}`]: {
      width: "100%",
      paddingTop: "10px",
      paddingBottom: "10px",
      textAlign: "center",
    },
  },
  tabLink: {
    display: "block",
    width: "100%",
    height: "100%",
  },
  containerAcountCircle: { 
    [`${theme.breakpoints.up("xs")}`]: {
      display: "flex",
      justifyContent: "flex-end",
      padding: theme.spacing(1),
      paddingRight: theme.spacing(3),
      flex: "1 1 150px",
    },

    [`${theme.breakpoints.up("md")}`]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flex: "none",
    }
  }
}))