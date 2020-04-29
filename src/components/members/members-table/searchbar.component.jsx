import React from 'react';
import useMembers from "../useMembers";
import {Input} from "./searchbar-styles";

const SearchBar = () => {
  const {handleChange} = useMembers();
    return(
      <Input
        onChange={handleChange}
        placeholder="search by name/role/address"
      />
     );
};

export default SearchBar;