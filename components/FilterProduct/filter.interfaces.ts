import { FieldRenderProps } from 'react-final-form';

export interface InitialFilter {
  catalog?: string;
  category?: string;
  price: number;
  brend?: string;
  popularity: boolean;
}

export interface ISelectsOptions {
  category: IOptions[];
  brend: IOptions[];
}

export interface IFilterProductProps {
  loading?: boolean;
  initialFilter?: InitialFilter;
  selectsOptions: ISelectsOptions;
  onFilter: (values: InitialFilter) => void;
  validate?: (values: Record<string, any>) => object | Promise<object>;
}

export interface IOptions {
  id: number;
  value: string;
  label: string;
}

export interface ISelectFilterProps extends FieldRenderProps<any, HTMLElement> {
  options: IOptions[];
} 