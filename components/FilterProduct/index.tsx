import { useState } from 'react';
import { Form, Field } from 'react-final-form'
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FilterListIcon from '@material-ui/icons/FilterList';
import CheckboxFilter from './CheckboxFilter';
import SelectFilter from './SelectFilter';
import RangeFilter from './RangeFilter';
import useStyles from './styles';
import { IFilterProductProps } from './filter.interfaces';

const FilterProduct: React.FC<IFilterProductProps> = (props) => {

  const {
    loading,
    initialFilter,
    selectsOptions,
    onFilter,
    validate,
  } = props;

  const classes = useStyles();
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className={classes.containerFilter} >
      <Box className={classes.containerPanelFilter} >
        <IconButton
          onClick={handleClickOpen}
        >
          <FilterListIcon />
        </IconButton>
        <Box className={classes.containerSearching} >
          <TextField 
            className={classes.searchTextField}
            placeholder="Searching ..."
          />
        </Box>
        <Box className={classes.containerSearchingProgress} >
          { loading ? <CircularProgress size="25px" /> : null }
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        className={classes.dialogFilter}
      >
        <Form 
          initialValues={initialFilter}
          onSubmit={onFilter}
          validate={validate}
          render={({ handleSubmit }) => (
            <form 
              onSubmit={handleSubmit}
            >
              <Field 
                name="category"
                label="Category"
                className={classes.selectField}
                options={selectsOptions.category}
                render={SelectFilter}
              />

              <Field 
                name="price"
                label="Price"
                className={classes.selectField}
                render={RangeFilter}
              />

              <Field 
                name="brend"
                label="Brend"
                className={classes.selectField}
                options={selectsOptions.brend}
                render={SelectFilter}
              />

              <Field 
                name="popularity"
                label="Popular"
                type="checkbox"
                className={classes.selectField}
                render={CheckboxFilter}
              />

              <Box
                display="flex"
                justifyContent="flex-end"
                padding={2}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  type="submit"
                >
                  Filtered
                </Button>
              </Box>
            </form>
          )}
        />
      </Dialog>
    </div>
  )
}

export default FilterProduct;