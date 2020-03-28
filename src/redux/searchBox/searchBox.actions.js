import {FILTER_DATA} from "./searchBox.types";

export const filterData = (input)=>({
  type:FILTER_DATA,
  payload:input
});