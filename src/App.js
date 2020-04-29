import React, { Suspense} from "react";
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Nav from "./components/nav-components/nav-top.component";
import Footer from "./components/footer/footer.component";
import {useLoginStatus} from "./useLoginStatus";
import useEvents from "./auth-amplify/useEvents";
import useFetchPosts from "./components/blog/post/all-posts/useFetchPosts";
import useMembers from "./components/members/useMembers";
import * as load from './load-page';

import Amplify from 'aws-amplify';
import aws_config from './aws-exports';
Amplify.configure(aws_config);

const App = () => {

  useLoginStatus();
  useEvents();
  useFetchPosts();
  const {membersEmails} = useMembers();

  return (
    <Router>
      <Nav/>
      <Switch>
        <Suspense fallback={<></>}>
          <Route exact path='/'><load.Home/></Route>
          <Route path='/about'><load.AboutPage/></Route>
          <Route path='/membership'><load.MembershipPage/></Route>
          <Route path='/all-members'><load.AllMembersPage/></Route>
          <Route path='/contact-us'><load.ContactPage/></Route>
          <Route path='/hippocrates'><load.HippocratesPage/></Route>
          <Route path='/donate'><load.DonatePage/></Route>
          <Route exact path='/posts'><load.PostsPage membersEmails={membersEmails}/></Route>
          <Route path={'/posts/:postId'}><load.PostShow/></Route>
        </Suspense>
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;
