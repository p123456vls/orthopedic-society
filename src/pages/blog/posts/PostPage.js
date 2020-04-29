import React from 'react';
import loadable from '@loadable/component';
import {Tabs} from "antd";
import {Container, Title} from "./postPage.styles";
import {useSelector} from "react-redux";

const MemberAuth = loadable(() => import("../../../components/member-auth/member-auth.component"));
const NewPost = loadable(() => import( "../../../components/blog/post/new-post/new-post.component"));
const AllPostsList = loadable(() => import(  "../../../components/blog/post/all-posts/all-posts-list.component"));

const PostsPage = ({membersEmails}) => {
  const {isSignedIn} = useSelector(state => state.user);

  return isSignedIn ? (
    <Container>
      <Tabs defaultActiveKey={'1'} animated={false}>
        <Tabs.TabPane tab="All Cases" key={'1'}>
          <AllPostsList membersEmails={membersEmails}/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="New Case" key="2">
          <NewPost membersEmails={membersEmails}/>
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