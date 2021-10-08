import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  containerFilter: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  containerPanelFilter: {
    display: "flex",
    margin: "10px",
  },
  containerSearching: {
    maxWidth: "300px", 
    marginTop: "5px",
    flex: "1 1 240px",
  },
  searchTextField: {
    width: "100%",

    "& input": {
      paddingLeft: "5px",
    },
  },
  containerSearchingProgress: {
    padding: "5px",
    paddingLeft: "15px",
  },
  dialogFilter: {
    '& div[role="dialog"]': {
      maxWidth: "500px",
      padding: "10px",
      flex: "1 1 260px",
    }
  },
  labelField: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  nameField: {
    margin: "10px",
    [`${theme.breakpoints.down("sm")}`]: {
      width: "100%",
    }
  },
  selectField: {
    width: "320px",
    margin: "10px",
    border: "1px solid #ccc",
    outline: "none",
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    background: theme.palette.common.white,
    "&:option": {
      padding: theme.spacing(1),
      fontSize: theme.spacing(2),
    },
    [`${theme.breakpoints.down("sm")}`]: {
      maxWidth: "450px",
      flex: "1 1 260px"
    }
  },
  rangeField: {
    width: "320px",
    marginRight: "10px",
    [`${theme.breakpoints.down("sm")}`]: {
      maxWidth: "450px",
      flex: "1 1 260px"
    }
  },
}))