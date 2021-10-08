import { FieldRenderProps } from 'react-final-form'
import { Box } from "@material-ui/core";
import useStyles from './styles';

const InputRangeFilter: React.FC<FieldRenderProps<any, HTMLElement>> = (props) => {
  
  const { 
    input,
    meta,
    label,
  } = props;

  const classes = useStyles();
  
  return (
    <div>
      <label className={classes.labelField}>
        <span className={classes.nameField} >{label}{":"}</span>
        <div>
          <Box 
            display="flex" 
            justifyContent="space-between"
            marginRight="10px"
          >
            <span>{input.value}</span>
            <span>{5000}</span>
          </Box>
          <input 
            className={classes.rangeField}
            {...input}
            type="range"
            min={300}
            max={5000}
          />
          {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
      </label>
    </div>
  )
}

export default InputRangeFilter;