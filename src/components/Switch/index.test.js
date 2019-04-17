import React from 'react';
import { shallow } from 'enzyme';
import Switch from '.';

const onClick = jest.fn();

describe('<Switch />', () => {
  it('should render the component correctly', () => {
    const component = shallow(
      <Switch id="test" className="test" onChange={onClick} checked />,
    );

    expect(component).toMatchSnapshot();
  });
});
