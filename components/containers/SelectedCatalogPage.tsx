// Core
import { useEffect, useState } from "react";
// Components
import SelectedCatalogPage from "../public-pages/SelectedCatalogPage";
// Hooks
import useMockData from "../../hooks/useMockData";
// Types
import { ISelectedCatalogPageContainerProps } from "../public-pages/SelectedCatalogPage/interfaces";
import { InitialFilter, ISelectsOptions } from "../FilterProduct/filter.interfaces";
import useLazyMockData from "../../hooks/useLazyMockData";
import { IProduct } from "../../mock/interfaces/products.interfaces";

const SelectedCatalogPageContainer: React.FC<ISelectedCatalogPageContainerProps> = (props) => {
  
  const {
    selectedCatalog,
  } = props;

  const [products, setProducts] = useState<IProduct[]>([]);
  const [brandProduct, setBrandProduct] = useState([]);
  const [catagoryProduct, setCategoryProduct] = useState([]);

  const [requestGetProduct, responseProducts] = useLazyMockData({});
  const responseBrandProducts = useMockData("GET_BRAND_PRODUCTS", {});
  const responseCategoryProducts = useMockData("GET_CATEGORY_PRODUCTS", {}); 

  const initialFilter: InitialFilter = {
    catalog: selectedCatalog,
    price: 1600,
    popularity: true,
  } 

  const selectsOptions: ISelectsOptions = {
    category: catagoryProduct,
    brand: brandProduct,
  }

  const onFilter = (values: InitialFilter): void => {
    console.log("values", values);
  }

  useEffect(() => {
    if(selectedCatalog) {
      requestGetProduct(`GET_${selectedCatalog.toUpperCase()}_PRODUCTS`);
    }
  }, [selectedCatalog])

  useEffect(() => {
    if(responseBrandProducts.loading) return;
    if(responseBrandProducts.data) {
      setBrandProduct(responseBrandProducts.data);
    }
  }, [responseBrandProducts])

  useEffect(() => {
    if(responseCategoryProducts.loading) return;
    if(responseCategoryProducts.data) {
      setCategoryProduct(responseCategoryProducts.data);
    }
  }, [responseCategoryProducts])

  useEffect(() => {
    if(responseProducts.loading) return;
    if(responseProducts.data) {
      setProducts(responseProducts.data);
    }
  }, [responseProducts])
  
  return (
    <SelectedCatalogPage
      products={products}
      initialFilter={initialFilter}
      selectsOptions={selectsOptions}
      onFilter={onFilter} 
    />
  )
} 

export default SelectedCatalogPageContainer;