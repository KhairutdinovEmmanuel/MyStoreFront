import { InitialFilter, ISelectsOptions } from "../../FilterProduct/filter.interfaces";

export interface ISelectedCatalogPageProps {
  initialFilter: InitialFilter;
  selectsOptions: ISelectsOptions;
  onFilter: (values: InitialFilter) => void;
}

export interface ISelectedCatalogPageContainerProps {
  selectedCatalog: string;
}