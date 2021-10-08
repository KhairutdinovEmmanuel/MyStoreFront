import makeStyles  from "@material-ui/core/styles/makeStyles";
import stylesCardProducts from '../../../styles/CardProducts';

export default makeStyles((theme) => ({ 
  containerSlider: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: "10px",
    marginRight: "10px",
  },
  sliderList: {
    maxWidth: "960px",
    marginTop: "20px",
    flex: "1 1 270px",
    '&[class="carousel"]': {
      display: "none",
    }
  },
  slideItem: {
    width: "100%",
    height: "100%",
  },
  slideItemImage: {
    width: "100%",
    height: "100%",
  },
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
  ...stylesCardProducts(theme),
}))