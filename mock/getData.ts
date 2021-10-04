import { GET_SLIDER } from "./slider";

export const getData = (data_type: string) => {
  switch(data_type) {
    case "GET_SLIDER": return GET_SLIDER;
    default : return {};
  }
}