import { FieldRenderProps } from 'react-final-form'
import { Input } from "@material-ui/core";
import useStyles from './styles';

const InputFilter: React.FC<FieldRenderProps<any, HTMLElement>> = (props) => {
  
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
          <Input 
            {...input}
          />
          {meta.touched && meta.error && <span>{meta.error}</span>}
        </span>
      </label>
    </div>
  )
}

export default InputFilter;