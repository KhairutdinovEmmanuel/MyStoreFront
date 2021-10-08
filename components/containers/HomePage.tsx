// Core
import { useEffect, useState } from "react";
// Components
import HomePage from "../public-pages/HomePage";
// Hooks
import useMockData from "../../hooks/useMockData";
// Types
import { InitialFilter } from "../FilterProduct/filter.interfaces";

const HomePageContainer: React.FC = () => {

  const [products, setProducts] = useState([]);
  const [sliderList, setSliderList] = useState([]);
  const [brandProducts, setBrandProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);

  const responseProducts = useMockData("GET_PRODUCTS", {});
  const responseSliderList = useMockData("GET_SLIDER", {});
  const responseBrandProducts = useMockData("GET_BRAND_PRODUCTS", {});
  const responseCategoryProducts = useMockData("GET_CATEGORY_PRODUCTS", {});

  const filterSelectsOptions = {
    category: categoryProducts,
    brand: brandProducts,
  }

  const initialFilter = {
    price: 1600,
    popularity: true,
  };

  const onFilter = (values: InitialFilter) => {
    console.log("onFilter values", values);
  }

  useEffect(() => {
    if(responseProducts.loading) return;
    if(responseProducts.data) {
      setProducts(responseProducts.data);
    } 
  }, [responseProducts])

  useEffect(() => {
    if(responseSliderList.loading) return;
    if(responseSliderList.data) {
      setSliderList(responseSliderList.data);
    } 
  }, [responseSliderList])

  useEffect(() => {
    if(responseBrandProducts.loading) return;
    if(responseBrandProducts.data) {
      setBrandProducts(responseBrandProducts.data);
    } 
  }, [responseBrandProducts])

  useEffect(() => {
    if(responseCategoryProducts.loading) return;
    if(responseCategoryProducts.data) {
      setCategoryProducts(responseCategoryProducts.data);
    } 
  }, [responseCategoryProducts])

  return (
    <HomePage 
      products={products}
      sliderList={sliderList}
      initialFilter={initialFilter}
      filterSelectsOptions={filterSelectsOptions} 
      onFilter={onFilter}
    />
  )
}

export default HomePageContainer;