import {FETCH_TABLE_DATA_BEGIN, FETCH_TABLE_DATA_FAILURE, FETCH_TABLE_DATA_SUCCESS} from "./tableData.types";

const initialState = {
  items: [],
  loading: false,
  error: null
};

const tableDataReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_TABLE_DATA_BEGIN:
      return {
        ...state, loading: true
      };
    case FETCH_TABLE_DATA_SUCCESS:
      const paymentData = action.payload;
      return {
        ...state, items: paymentData,
        loading: false
      };
    case FETCH_TABLE_DATA_FAILURE:
      return {
        loading: false,
        error: action.payload.error
      };
    default:
      return {
        state
      }
  }
};

export default tableDataReducer;
