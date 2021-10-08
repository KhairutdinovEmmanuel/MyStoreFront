import makeStyles from "@material-ui/core/styles/makeStyles";

export interface IStyledIconProps {
  display: boolean;
  background: string;
  hoverColor: string;
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


      "&:hover": {
        fill: props.hoverColor
      }
    }
  }
});