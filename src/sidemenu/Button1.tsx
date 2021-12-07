import React from 'react';
import { Button } from 'carbon-components-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
type done = {
  title: string;
  icon: any;
};
const StyledDiv = styled.div`
  float: left;
  margin: 40px;
  padding: 20px;
`;
const Button1 = (props: done) => {
  return (
    <>
      <div>
        <StyledDiv>
          <Button style={{ borderRadius: '10px', fontSize: '22px' }} className="div">
            <FontAwesomeIcon size="2x" icon={props.icon} />
            {props.title}
          </Button>
        </StyledDiv>
      </div>
    </>
  );
};
export default Button1;
