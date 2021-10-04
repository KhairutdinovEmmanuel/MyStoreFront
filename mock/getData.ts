import { GET_BREND_PRODUCTS } from "./brendProducts";
import { GET_CATEGORY_PRODUCTS } from "./categoryProducts";
import { GET_SLIDER } from "./slider";

export const getData = (data_type: string) => {
  switch(data_type) {
    case "GET_SLIDER": return GET_SLIDER;
    case "GET_BREND_PRODUCTS": return GET_BREND_PRODUCTS;
    case "GET_CATEGORY_PRODUCTS": return GET_CATEGORY_PRODUCTS;
    default : return {};
  }
}