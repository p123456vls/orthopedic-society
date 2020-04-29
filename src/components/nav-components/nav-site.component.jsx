import React from 'react';
import {Icon} from "antd";
import {SiteContainer, MenuItem, MenuContainer} from './nav.styles'
import {useLocation} from 'react-router-dom';
import {Colors} from "../../constants/colors";
import Tooltip from "antd/es/tooltip";
import {ContactsOutlined, CommentOutlined} from '@ant-design/icons'


const NavSiteComponent = () => {
  const location = useLocation();
  const currentPath = location.pathname.substring(1, location.pathname.length) === '' ? 'home' :
    location.pathname.substring(1, location.pathname.length);

  return (
    <SiteContainer>
      <MenuContainer>
        <Tooltip placement="right" title={'Home'}>
          <MenuItem
            to={'/'}
            color={currentPath === 'home' ? Colors.primary : 'white'}
          >
            <Icon type="home" style={{fontSize: '16px'}}/>
          </MenuItem>
        </Tooltip>

        <Tooltip placement="right" title={'About'}>
          <MenuItem
            to={'/about'}
            color={currentPath === 'about' ? Colors.primary : 'white'}
          >
            <Icon type="info" style={{fontSize: '16px'}}/>
          </MenuItem>
        </Tooltip>

        <Tooltip placement="right" title={'Membership'}>
          <MenuItem
            to={'/membership'}
            color={currentPath === 'membership' ? Colors.primary : 'white'}
          >
            <Icon type="user-add" style={{fontSize: '16px'}}/>
          </MenuItem>
        </Tooltip>

        <Tooltip placement="right" title={'All Members'}>
          <MenuItem
            to={'/all-members'}
            color={currentPath === 'all-members' ? Colors.primary : 'white'}
          >
            <Icon type="team" style={{fontSize: '16px'}}/>
          </MenuItem>
        </Tooltip>

        <Tooltip placement="right" title={'My Orthopedic Case'}>
          <MenuItem
            to={'/posts'}
            color={currentPath === 'posts' ? Colors.primary : 'white'}
          >
            <CommentOutlined style={{fontSize: '16px'}}/>
          </MenuItem>
        </Tooltip>

        <Tooltip placement="right" title={'Donate'}>
          <MenuItem
            to={'/donate'}
            color={currentPath === 'donate' ? Colors.primary : 'white'}
          >
            <Icon type="fund" style={{fontSize: '16px'}}/>
          </MenuItem>
        </Tooltip>

        <Tooltip placement="right" title={'Contact'}>
          <MenuItem
            to={'/contact-us'}
            color={currentPath === 'contact-us' ? Colors.primary : 'white'}
          >
            <ContactsOutlined style={{fontSize: '16px'}}/>
          </MenuItem>
        </Tooltip>

        <Tooltip placement="right" title={'Hippocrates'}>
          <MenuItem
            to={'/hippocrates'}
            color={currentPath === 'hippocrates' ? Colors.primary : 'white'}
          >
            <Icon type="user" style={{fontSize: '16px'}}/>
          </MenuItem>
        </Tooltip>


      </MenuContainer>
    </SiteContainer>
  );

};

export default NavSiteComponent;