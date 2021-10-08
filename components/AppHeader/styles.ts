import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  header: {
    width: "100%",
    display: "flex",
    paddingTop: theme.spacing(1.2), 
    paddingBottom: theme.spacing(1.2), 
    background: theme.palette.grey[800],
    color: theme.palette.common.white,
  },
  sectionLogo: {
    width: "200px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center", 
  },
  titleLogo: {
    fontSize: theme.spacing(4),
    fontWeight: 900,
  },
  sectionTabs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flex: " 1 1 300px",
  },
  tabTitle: {
    fontSize: theme.spacing(3),
    fontWeight: 600,
    marginLeft: theme.spacing(1),
  },
  tabLink: {
    display: "block",
    width: "100%",
    height: "100%",
  },
  containerAcountCircle: {
    padding: theme.spacing(1),
    paddingRight: theme.spacing(3),
  }
}))