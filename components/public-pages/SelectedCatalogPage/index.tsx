// Styles 
import useStyles from './styles';
// Types
import FilterProduct from "../../FilterProduct";
import { ISelectedCatalogPageProps } from "./interfaces";


const SelectedCatalogPage: React.FC<ISelectedCatalogPageProps> = (props) => {
  
  const {
    initialFilter,
    selectsOptions,
    onFilter,
  } = props;
  
  const classes = useStyles();

  return (
    <>
      <div className={classes.containerFilterProduct}>
        <FilterProduct
          initialFilter={initialFilter}
          selectsOptions={selectsOptions}
          onFilter={onFilter}
        />
      </div>
    </>
  )
};

export default SelectedCatalogPage; 