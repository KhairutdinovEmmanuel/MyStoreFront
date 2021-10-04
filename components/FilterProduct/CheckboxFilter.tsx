import { FieldRenderProps } from 'react-final-form'
import { Checkbox } from "@material-ui/core";
import useStyles from './styles';

const CheckboxFilter: React.FC<FieldRenderProps<any, HTMLElement>> = (props) => {
  
  const { 
    input,
    meta,
    label,
  } = props;

  const classes = useStyles();
  
  return (
    <div>
      <label className={classes.labelField} >
        <span className={classes.nameField} >{label}</span>
        <span>
          <Checkbox
            {...input}
            color="primary"
          />
          {meta.touched && meta.error && <span>{meta.error}</span>}
        </span>
      </label>
    </div>
  )
}

export default CheckboxFilter;