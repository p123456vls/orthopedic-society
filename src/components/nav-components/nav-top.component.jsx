import React from 'react';
import loadable from "@loadable/component";
import {ContainerTop, Header, LogoContainer, SingOutField} from './nav.styles'
import {useHistory} from 'react-router-dom';
import {useSignOut} from "../../useSignOut";
import {useSelector} from "react-redux";

const LogoIcon = loadable(() => import(  "../svg/LogoIcon"));
const NavSiteComponent = loadable(() => import( "./nav-site.component"));


const NavTopComponent = () => {
  const history = useHistory();
  const {signOutAmplify} = useSignOut();
  const {isSignedIn} = useSelector(state => state.user);

  return (
    <>
      <ContainerTop>
        <LogoContainer onClick={() => {
          history.push('/')
        }}>
          <LogoIcon/>
        </LogoContainer>
        <Header>Hippocratic Orthopedic Society, Inc</Header>
        {
          (isSignedIn) &&
          <SingOutField onClick={signOutAmplify}>Sign out</SingOutField>
        }
        <NavSiteComponent/>
      </ContainerTop>

    </>
  );
};
export default NavTopComponent;