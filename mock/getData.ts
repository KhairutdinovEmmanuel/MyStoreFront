import { GET_BRAND_PRODUCTS } from "./brandProducts";
import { GET_CATEGORY_PRODUCTS } from "./categoryProducts";
import { GET_PRODUCTS } from "./products";
import { GET_SECTION_PRODUCTS } from "./sectionProducts";
import { GET_SLIDER } from "./slider";

export const getData = (data_type: string) => {
  switch(data_type) {
    case "GET_SLIDER": return GET_SLIDER;
    case "GET_PRODUCTS": return GET_PRODUCTS;
    case "GET_BRAND_PRODUCTS": return GET_BRAND_PRODUCTS;
    case "GET_SECTION_PRODUCTS": return GET_SECTION_PRODUCTS;
    case "GET_CATEGORY_PRODUCTS": return GET_CATEGORY_PRODUCTS;
    default : return {};
  }
}