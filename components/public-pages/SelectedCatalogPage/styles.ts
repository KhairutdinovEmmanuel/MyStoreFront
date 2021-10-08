import makeStyles from "@material-ui/core/styles/makeStyles";
import stylesCardProducts from '../../../styles/CardProducts';
import stylesFilterProduct from '../../../styles/FilterProduct';

export default makeStyles((theme) => ({
  ...stylesFilterProduct(theme),
  ...stylesCardProducts(theme),
}));