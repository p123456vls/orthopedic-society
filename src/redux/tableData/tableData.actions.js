import {FETCH_TABLE_DATA_BEGIN, FETCH_TABLE_DATA_SUCCESS, FETCH_TABLE_DATA_FAILURE} from "./tableData.types";

export const fetchDataTableBegin = () => ({
  type: FETCH_TABLE_DATA_BEGIN,
});

export const fetchDataTableSuccess = (items) => ({
  type: FETCH_TABLE_DATA_SUCCESS,
  payload: items
});

export const fetchDataTableFailure = error => ({
  type: FETCH_TABLE_DATA_FAILURE,
  payload: error
});



