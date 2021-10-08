// Components
import ListItems from '../../ListItems';
import CardProduct from "../../CardProduct";
import FilterProduct from "../../FilterProduct";
// Styles 
import useStyles from './styles';
// Types
import { ISelectedCatalogPageProps } from "./interfaces";
import { IProduct } from "../../../mock/interfaces/products.interfaces";

const SelectedCatalogPage: React.FC<ISelectedCatalogPageProps> = (props) => {
  
  const {
    products,
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
      <ListItems
        className={classes.containerCardProduct}
        items={products}
        renderItem={(item: IProduct) => (
          <div 
            key={item.id}
            className={classes.cardProduct}
          >
            <CardProduct
              title={item.title}
              price={item.price}
              description={item.description}
              imageProps={{
                width: 560,
                height: 300,
                src: item.imageUrl,
                picture: item.imageUrl,
              }}
              titleTypographyProps={{
                align: 'center',
              }}
            />
          </div>
        )}
      />
    </>
  )
};

export default SelectedCatalogPage; 