import makeStyles  from "@material-ui/core/styles/makeStyles";
import stylesCardProducts from '../../../styles/CardProducts';
import stylesFilterProduct from '../../../styles/FilterProduct';

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
  ...stylesFilterProduct(theme),
  ...stylesCardProducts(theme),
}))