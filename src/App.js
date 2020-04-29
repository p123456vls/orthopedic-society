import React from "react";
import 'antd/dist/antd.css';
import Nav from "./components/nav-components/nav-top.component";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import MembershipPage from "./pages/members/MembershipPage";
import ContactPage from "./pages/contact/ContactPage";
import HippocratesPage from "./pages/hippocrates/HippocratesPage";
import DonatePage from "./pages/donate/DonatePage";
import AllMembersPage from "./pages/members/all-members/AllMembersPage";
import Footer from "./components/footer/footer.component";
import PostsPage from "./pages/blog/posts/PostPage";
import PostShow from "./components/blog/post/post-show/post-show.component";
import {useLoginStatus} from "./useLoginStatus";
import useEvents from "./auth-amplify/useEvents";
import useFetchPosts from "./components/blog/post/all-posts/useFetchPosts";

import Amplify from 'aws-amplify';
import aws_config from './aws-exports';
import useMembers from "./components/members/useMembers";
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
        <Route exact path='/'><Home/></Route>
        <Route path='/about' ><AboutPage/></Route>
        <Route path='/membership' ><MembershipPage/></Route>
        <Route path='/all-members'><AllMembersPage/></Route>
        <Route path='/contact-us' ><ContactPage/></Route>
        <Route path='/hippocrates'><HippocratesPage/></Route>
        <Route path='/donate' ><DonatePage/></Route>
        <Route exact path='/posts'><PostsPage membersEmails={membersEmails}/></Route>
        <Route path={'/posts/:postId'}><PostShow/></Route>
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;
