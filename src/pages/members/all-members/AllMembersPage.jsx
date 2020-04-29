import React from 'react';
import {TitleContainer, Title, Main} from "../../../index.styles";
import {Icon} from "antd";
import {Colors} from "../../../constants/colors";
import loadable from "@loadable/component";
const SearchBar = loadable(() => import("../../../components/members/members-table/searchbar.component"));
const MembersTable=loadable(() => import( "../../../components/members/members-table/members-table.component"));

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


