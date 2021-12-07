import React from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from 'carbon-components-react';
// import Practice from './Practice1';
import { DataTableSkeleton } from 'carbon-components-react';
import {
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink
} from 'carbon-components-react/lib/components/UIShell';
// import Practice1 from './Practice1';
import './StoryContent.scss';
import styled from 'styled-components';
const StyleHeader = styled.div`
  margin-left: 201px;
  font-size: 34px;
`;
const Skeleton1 = () => {
  const Fade16 = () => (
    // <svg width="16" height="16" viewBox="0 0 32 32">
    <Checkbox labelText="" id="checked-2" />
  );
  return (
    <>
      <div style={{ width: '100%', margin: '100px' }}>
        <StyleHeader>TimeSheet Managements</StyleHeader>

        {/* <div className="bx--grid" id="dummy">
        <div className="bx--row">
          <section className="bx--offset-lg-3 bx--col-lg-13"> */}

        <DataTableSkeleton columnCount={9} rowCount={8} />
        {/* <Practice1 /> */}
        <SideNav aria-label="Side navigation" className="bx--side-nav1">
          <SideNavItems className="bx--side-nav__items">
            <SideNavMenu renderIcon={Fade16} title="Time Sheet">
              {/* <fieldset className="bx--fieldset">
                  <Checkbox defaultChecked labelText="Daily" id="checked" />
                  <Checkbox labelText="Weekly" id="checked-2" />
                </fieldset> */}
              <SideNavMenuItem>Weekly</SideNavMenuItem>

              <SideNavMenuItem>Daily</SideNavMenuItem>
            </SideNavMenu>
            <SideNavLink renderIcon={Fade16}>Reports</SideNavLink>
            <SideNavLink renderIcon={Fade16}>Review</SideNavLink>
          </SideNavItems>
        </SideNav>

        <Link to="/">Home</Link>
        {/* </section>
        </div>
      </div>  */}
      </div>
    </>
  );
};

export default Skeleton1;
