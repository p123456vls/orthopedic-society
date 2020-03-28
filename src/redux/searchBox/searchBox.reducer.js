import {FILTER_DATA} from "./searchBox.types";

const initialState = {
  filteredData: []
};

const searchBoxReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_DATA:
      return {
        ...state,
        filteredData: action.payload
      };
    default:
      return state
  }
};
export default searchBoxReducer;