import { IProduct } from "../../../mock/interfaces/products.interfaces";
import { ISlide } from "../../../mock/interfaces/slider.interfaces";
import { InitialFilter, ISelectsOptions } from "../../FilterProduct/filter.interfaces";

export interface IHomePageProps {
  products: IProduct[];
  sliderList: ISlide[];
  initialFilter: InitialFilter,
  filterSelectsOptions: ISelectsOptions;
  onFilter: (values: InitialFilter) => void; 
}