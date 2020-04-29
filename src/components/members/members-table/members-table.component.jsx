import React from 'react';
import {Table} from "antd";
import {columns} from "../../../importedMembersData";
import {useSelector} from "react-redux";

const MembersTable = () => {
  const {filteredData} = useSelector(state => state.search);
  const table = useSelector(state => state.table);

  return (
    <Table
      size={'middle'}
      loading={table.loading}
      columns={columns}
      dataSource={filteredData.length === 0 ? table.items : filteredData}
    />
  );
};

export default MembersTable;
