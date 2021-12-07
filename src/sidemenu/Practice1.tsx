// import { SideNavItem } from 'carbon-components-react';
import React from 'react';
import styled from 'styled-components';
import { Dropdown, Checkbox } from 'carbon-components-react';
// import { Select, SelectItem, SelectItemGroup } from 'carbon-components-react';
// import { } from 'carbon-components-react';

const Styleddiv = styled.div`
  position: absolute;
  height: 300px;
  width: 200px;
  top: 136px;
  right: 120px;
  background-color: white;
  float: lift;
  color: black;
`;

const Practice1 = () => {
  const items = [
    {
      id: 'option-1',
      label: 'Option 1'
    },
    {
      id: 'option-2',
      label: 'Option 2'
    },
    {
      id: 'option-3',
      label: 'Option 3'
    },
    {
      id: 'option-4',
      label: 'Option 4'
    }
  ];

  return (
    <Styleddiv>
      <fieldset className="bx--fieldset">
        {/* <legend className="bx--label">Checkbox heading</legend> */}
        <Dropdown id="carbon-dropdown-example" items={items} label="Add New">
          <input
            id="bx--checkbox-blue"
            className="bx--checkbox"
            type="checkbox"
            value="yellow"
            name="checkbox"
          />
        </Dropdown>
        <Checkbox defaultChecked labelText="Checkbox label" id="checked"></Checkbox>

        <Checkbox labelText="Checkbox label" id="checked-2" />
      </fieldset>
    </Styleddiv>
  );
};

export default Practice1;
