import { IconButton } from '@material-ui/core';
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import useStyledIcon from '../../styles/StyledIcon';
import { IconProps } from './icon.interfaces';

const ShoppingCartIcon: React.FC<IconProps> = ({ ...props }) => {

    const { 
        // Props Svg
        width = 24, 
        height = 24, 
        color = '#000', 
        // Props Button
        display = false, 
        background = "inherit",
        hoverColor = "inherit",
    } = props;

    const classes = useStyledIcon({
      display, 
      background, 
      hoverColor,
      svgProps: {
        width,
        height,
        color,
      }
    })();

    return (
      <IconButton 
        className={classes.button}
      >
        <ShoppingCart />
      </IconButton>
    )
}

export default ShoppingCartIcon;