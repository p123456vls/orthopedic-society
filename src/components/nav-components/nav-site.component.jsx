import React from 'react';
import {Icon} from "antd";
import {SiteContainer, MenuItem, MenuContainer} from './nav.styles'
import {useHistory, useLocation} from 'react-router-dom';
import {Colors} from "../../constants/colors";
import Tooltip from "antd/es/tooltip";
import {ContactsOutlined} from '@ant-design/icons'


const NavSiteComponent = () => {
  const location = useLocation();
  const history = useHistory();
  const currentPath = location.pathname.substring(1, location.pathname.length) === '' ? 'home' :
    location.pathname.substring(1, location.pathname.length);

  const handleClick = (path) => {
    if (path === 'home') path = '/';
    history.push(`${path}`);
  };

  return (
    <SiteContainer>
      <MenuContainer>
        <Tooltip placement="right" title={'Home'}>
          <MenuItem
            title={"home"}
            onClick={() => handleClick('home')}
            color={currentPath === 'home' ? Colors.primary : 'white'}
          >
            <Icon type="home" style={{fontSize: '16px'}}/>
          </MenuItem>
        </Tooltip>

        <Tooltip placement="right" title={'About'}>
          <MenuItem
            title={"about"}
            onClick={() => handleClick('about')}
            color={currentPath === 'about' ? Colors.primary : 'white'}
          >
            <Icon type="info" style={{fontSize: '16px'}}/>
          </MenuItem>
        </Tooltip>

        <Tooltip placement="right" title={'Membership'}>
          <MenuItem
            title={"membership"}
            onClick={() => handleClick('membership')}
            color={currentPath === 'membership' ? Colors.primary : 'white'}
          >
            <Icon type="user-add" style={{fontSize: '16px'}}/>
          </MenuItem>
        </Tooltip>

        <Tooltip placement="right" title={'All Members'}>
          <MenuItem
            title={"members"}
            onClick={() => handleClick('all-members')}
            color={currentPath === 'all-members' ? Colors.primary : 'white'}
          >
            <Icon type="team" style={{fontSize: '16px'}}/>
          </MenuItem>
        </Tooltip>

        <Tooltip placement="right" title={'Contact'}>
          <MenuItem
            title={"contact"}
            onClick={() => handleClick('contact-us')}
            color={currentPath === 'contact-us' ? Colors.primary : 'white'}
          >
            <ContactsOutlined style={{fontSize: '16px'}}/>
          </MenuItem>
        </Tooltip>

        <Tooltip placement="right" title={'Donate'}>
          <MenuItem
            title={"donate"}
            onClick={() => handleClick('donate')}
            color={currentPath === 'donate' ? Colors.primary : 'white'}
          >
            <Icon type="fund" style={{fontSize: '16px'}}/>
          </MenuItem>
        </Tooltip>

        <Tooltip placement="right" title={'Hippocrates'}>
          <MenuItem
            title={"hippocrates"}
            onClick={() => handleClick('hippocrates')}
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