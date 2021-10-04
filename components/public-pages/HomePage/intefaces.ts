import { ISlide } from "../../../mock/interfaces/slider.interfaces";
import { InitialFilter, ISelectsOptions } from "../../FilterProduct/filter.interfaces";

export interface IHomePageProps {
  sliderList: ISlide[];
  initialFilter: InitialFilter,
  filterSelectsOptions: ISelectsOptions;
  onFilter: (values: InitialFilter) => void; 
}