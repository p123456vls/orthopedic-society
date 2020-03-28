import React from 'react';
import SearchBar from "../../../components/members/members-table/searchbar.component";
import MembersTable from "../../../components/members/members-table/members-table.component";
import {TitleContainer, Title, Main} from "../../../index.styles";
import {Icon} from "antd";
import {Colors} from "../../../constants/colors";

const AllMembersPage = () => {

  return (
    <>
      <TitleContainer>
        <Title><Icon type={'team'} style={{color:Colors.primary}} /> All Members</Title>
      </TitleContainer>
      <Main>
        <SearchBar/>
        <MembersTable/>
      </Main>
    </>

  )
};

export default AllMembersPage;


