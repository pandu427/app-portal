import React from 'react';

import Search20 from '@carbon/icons-react/lib/search/20';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
import HeaderContainer from 'carbon-components-react/lib/components/UIShell/HeaderContainer';
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem
} from 'carbon-components-react/lib/components/UIShell';

// import "./style.css";

// const StoryContent = () => {
//   const content = (
//     <div className="bx--grid">
//       <div className="bx--row">
//         <section className="bx--offset-lg-3 bx--col-lg-13">

//         </section>
//       </div>
//     </div>
//   );

//   return <Content id="main-content">{content}</Content>;
// };

const Pratice = () => (
  <div className="container">
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="IBM Platform Name">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="IBM">
              [Platform]
            </HeaderName>
            <HeaderGlobalBar>
              <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                <Search20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
                <Notification20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
                <AppSwitcher20 />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
              <div>
                <img
                  style={{ borderRadius: '147px', width: '59px', float: 'left', margin: '10px' }}
                  src="data:image/jpeg;base64,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"
                  alt="Logo"
                />
                <h5 style={{ float: 'left', margin: '31px 7px' }}>
                  Cool MSD<br></br>EST-5593
                </h5>
                {/* <h5 style={{float:'left',margin:'10px'}}>EST-5593</h5> */}
              </div>

              <SideNavItems>
                <SideNavMenu title="Category title">
                  <SideNavMenuItem href="j">Link</SideNavMenuItem>
                  <SideNavMenuItem aria-current="page" href="">
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="">Link</SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu title="Category title">
                  <SideNavMenuItem href="">Link</SideNavMenuItem>
                  <SideNavMenuItem aria-current="page" href="">
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="">Link</SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu title="Category title">
                  <SideNavMenuItem href="">Link</SideNavMenuItem>
                  <SideNavMenuItem aria-current="page" href="">
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="">Link</SideNavMenuItem>
                </SideNavMenu>
                <SideNavLink href="">Link</SideNavLink>
                <SideNavLink href="">Link</SideNavLink>
              </SideNavItems>
            </SideNav>
          </Header>
          {/* <StoryContent /> */}
        </>
      )}
    />
  </div>
);

export default Pratice;
