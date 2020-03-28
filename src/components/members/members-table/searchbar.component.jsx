import React from 'react';
import {Input} from "antd";
import useMembers from "../useMembers";

const SearchBar = () => {
  const {handleChange} = useMembers();
    return(
      <Input
        onChange={handleChange}
        placeholder="search by name/role/address"
        style={{margin: '11px 0', width: 300}}
      />
     );
};

export default SearchBar;