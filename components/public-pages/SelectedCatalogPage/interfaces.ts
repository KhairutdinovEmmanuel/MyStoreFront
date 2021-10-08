import { IProduct } from "../../../mock/interfaces/products.interfaces";
import { InitialFilter, ISelectsOptions } from "../../FilterProduct/filter.interfaces";

export interface ISelectedCatalogPageProps {
  products: IProduct[];
  initialFilter: InitialFilter;
  selectsOptions: ISelectsOptions;
  onFilter: (values: InitialFilter) => void;
}

export interface ISelectedCatalogPageContainerProps {
  selectedCatalog: string;
}