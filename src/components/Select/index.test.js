import React from 'react';
import { shallow } from 'enzyme';
import Select from '.';

const options = [
  {
    id: 4864,
    label: 'Promoções',
    value: 4864,
  },
  {
    id: 4865,
    label: 'Sabores de Inverno',
    value: 4865,
  },
  {
    id: 4866,
    label: 'Combinados',
    value: 4866,
  },
];

describe('<Select />', () => {
  it('should render the component correctly', () => {
    const component = shallow(
      <Select id="test" name="test" options={options} onChange={() => {}} />,
    );

    expect(component).toMatchSnapshot();
  });

  it('should render the component with the properties', () => {
    const placeholder = 'Placeholder teste';
    const component = shallow(
      <Select
        id="test"
        name="select"
        options={options}
        placeholder={placeholder}
        onChange={() => console.log('ok')}
      />,
    );

    const stateManager = component.find('StateManager').props();

    expect(stateManager.options).toHaveLength(3);
    expect(stateManager.id).toEqual('select-test');
    expect(stateManager.name).toEqual('select-test');
    expect(stateManager.placeholder).toEqual(placeholder);
  });
});
