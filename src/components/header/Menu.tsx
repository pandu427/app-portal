import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  SkipToContent
} from 'carbon-components-react';
// import { AppSwitcher20, Notification20, UserAvatar20 } from '@carbon/icons-react';
// import { Link } from 'react-router-dom';
const Menu = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="/" prefix="">
          ESTUATE EMPLOYEE MANAGEMENT SYSTEM
        </HeaderName>
        {/* <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
        </HeaderNavigation> */}

        {/* <HeaderGlobalBar>
  <HeaderGlobalAction aria-label="Notifications">
    <Notification20 />
 
  </HeaderGlobalAction>
</HeaderGlobalBar> */}
      </Header>
    )}
  />
);

export default Menu;
