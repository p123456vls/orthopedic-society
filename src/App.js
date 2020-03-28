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

import useEvents from "./auth-amplify/useEvents";

import Amplify from 'aws-amplify';
import aws_config from './aws-exports';
import {useAuth} from "./useAuth";

Amplify.configure(aws_config);

const App = () => {

  useEvents();
  useAuth();

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/membership' component={MembershipPage}/>
        <Route path='/all-members' component={AllMembersPage}/>
        <Route path='/contact-us' component={ContactPage}/>
        <Route path='/hippocrates' component={HippocratesPage}/>
        <Route path='/donate' component={DonatePage}/>
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;
