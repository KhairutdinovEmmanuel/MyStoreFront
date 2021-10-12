import { Theme } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

export interface ISVGProps {
  width: number;
  height: number;
  color: string;
}
export interface IStyledIconProps {
  display: boolean;
  background: string;
  hoverColor: string;
  svgProps: ISVGProps;
}  

export default (props: IStyledIconProps) => makeStyles({ 
  button: {
    display: props.display ? 'block' : 'none',
    background: props.background,
    outline: "none",
    border: "none",
    cursor: 'pointer',
    padding: "0",

    "& svg": {
      width: props.svgProps.width,
      height: props.svgProps.height,
      color: props.svgProps.color,

      "&:hover": {
        fill: props.hoverColor
      }
    }
  }
});