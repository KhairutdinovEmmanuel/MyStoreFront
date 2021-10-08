import { IconButton } from '@material-ui/core';
import useStyledIcon from '../../styles/StyledIcon';

interface IProps {
    width?: number,
    height?: number,
    color?: string,
    display?: boolean,
    background?: string,
    hoverColor?: string,
}

const Catalog: React.FC<IProps> = ({ ...props }) => {

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
    })();

    return (
        <IconButton 
            className={classes.button}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height={`${height}px`}
                viewBox="0 0 24 24" 
                width={`${width}px`} 
                fill={color}
            >
                <path 
                    d="M0 0h24v24H0V0z" 
                    fill="none"
                />
                <path d="M16.66 4.52l2.83 2.83-2.83 2.83-2.83-2.83 2.83-2.83M9 5v4H5V5h4m10 10v4h-4v-4h4M9 15v4H5v-4h4m7.66-13.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65zM11 3H3v8h8V3zm10 10h-8v8h8v-8zm-10 0H3v8h8v-8z"/>
            </svg>
        </IconButton>
    )
}

export default Catalog;