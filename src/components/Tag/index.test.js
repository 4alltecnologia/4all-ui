import React from 'react';
import { shallow } from 'enzyme';
import Tag from '.';
import { singleTag } from '../../__mocks__/tag';

const clickFn = jest.fn();

describe('<Tag />', () => {
  it('should render the component', () => {
    const component = shallow(
      <Tag className="tag-item" tag={singleTag} onClick={clickFn}>
        {singleTag.label}
      </Tag>,
    );

    expect(component).toMatchSnapshot();
  });

  it('should call the click function and contain string passed', () => {
    const component = shallow(
      <Tag className="tag-item" tag={singleTag} onClick={clickFn}>
        {singleTag.label}
      </Tag>,
    );
    component.find('.tag-item').simulate('click');

    expect(clickFn).toHaveBeenCalled();
    expect(component.text()).toContain(singleTag.label);
  });
});
