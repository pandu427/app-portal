import React from 'react';
import { Content } from 'carbon-components-react';
import Button1 from './Button1';
import { faPlusSquare, faChartBar } from '@fortawesome/free-solid-svg-icons';
import './StoryContent.scss';
import { useHistory } from 'react-router-dom';
// import Demo from './Demo';
import { Link } from 'react-router-dom';
// import styled from "styled-components";

// const StyledDiv=styled.div`
// >.bx--offset-lg-3 {
//   margin-left: 3%;

//   +.bx--row {
//     display: flex;
//     flex-wrap: wrap;
//     margin-right: -1rem;
//     margin-left: -1rem;
//     background-color: rgb(248, 244, 244) ;
//     height: 100vh;

//     +.bx--btn--primary {
//       color: #ffffff;
//       background-color: rgb(73, 158, 184);
//       border-color: transparent;
//       border-style: solid;
//       border-width: 1px;
//       width: 219px;
//       height: 13vh;
//       font-size: 26px;
//   }

// }
// }

// `;

export const StoryContent = () => {
  let history = useHistory();
  const onchange = () => {
    history.push('/Demo');
  };
  const content = (
    // <StyledDiv>
    <div className="bx--grid">
      <div className="bx--row">
        <section className="bx--offset-lg-3 bx--col-lg-13">
          <h2
            style={{
              fontWeight: '800',
              margin: '30px 0',
              fontSize: '20px'
            }}>
            TimeSheets Management System
          </h2>
          <p style={{ lineHeight: '20px' }}>
            The shell is perhaps the most crucial piece of any UI built with Carbon. It contains the
            shared navigation framework for the entire design system and ties the products in IBM’s
            portfolio together in a cohesive and elegant way. The shell is the home of the topmost
            navigation, where users can quickly and dependably gain their bearings and move between
            pages.
            <br />
          </p>
          <Link to="/demo">
            <Button1 title="ADD NEW" icon={faPlusSquare}></Button1>
          </Link>
          <Button1 title="REPORTS" icon={faChartBar}></Button1>
          <Button1 title="REVIEW" icon={faChartBar}></Button1>
        </section>
      </div>
    </div>
    // </StyledDiv>
  );

  return <Content id="main-content">{content}</Content>;
};
