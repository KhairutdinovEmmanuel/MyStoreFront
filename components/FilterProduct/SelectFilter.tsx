import { ISelectFilterProps } from './filter.interfaces';
import useStyles from './styles';

const SelectFilter: React.FC<ISelectFilterProps> = (props) => {
  
  const { 
    input,
    meta,
    options,
    label
  } = props;

  const classes = useStyles();
  
  return (
    <div>
      <label className={classes.labelField} >
        <span className={classes.nameField} >{label}{":"}</span>
        <span>
          <select 
            {...input} 
            className={classes.selectField}
          >
            <option hidden />
            {
              options.map((option) => (
                <option 
                  key={option.id} 
                  value={option.value}
                >
                  {option.label}
                </option>
              ))
            }
          </select>
          {meta.touched && meta.error && <span>{meta.error}</span>}
        </span>
      </label>
    </div>
  )
}

export default SelectFilter;