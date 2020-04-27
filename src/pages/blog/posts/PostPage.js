import React from 'react';
import NewPost from "../../../components/blog/post/new-post/new-post.component";
import {Tabs} from "antd";
import {Container, Title} from "./postPage.styles";
import MemberAuth from "../../../components/member-auth/member-auth.component";
import {useSelector} from "react-redux";
import AllPostsList from "../../../components/blog/post/all-posts/all-posts-list.component";

const PostsPage = () => {
  const {isSignedIn} = useSelector(state => state.user);

  return isSignedIn ? (
    <Container>
      <Tabs defaultActiveKey={'1'} animated={false}>
        <Tabs.TabPane tab="All Cases" key={'1'}>
          <AllPostsList/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="New Case" key="2">
          <NewPost/>
        </Tabs.TabPane>
      </Tabs>
    </Container>
  ) : (
    <> <Title>
      Please sign in to continue to Orthopedic Case
    </Title>
      <MemberAuth auth={'signIn'}/>  </>
  );

};

export default PostsPage;