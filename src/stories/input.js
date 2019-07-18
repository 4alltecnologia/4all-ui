import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import { action } from '@storybook/addon-actions';
import Input from '../components/Input';
import customWithInfo from './helpers/customWithInfo';

const store = new Store({
  primary: '',
  disabled: '',
  error: '',
  checked: '',
  customIcon: '',
  custom: '',
  disabledChecked: '',
  search: '',
});
const handleChange = e => store.set({ [e.target.name]: e.target.value });

storiesOf('Input', module)
  .addDecorator(customWithInfo())
  .addDecorator(storyFn => <State store={store}>{state => storyFn(state)}</State>)
  .add('Primary style', state => (
    <Input
      name="primary"
      onChange={handleChange}
      value={state.primary}
      placeholder="Primary style"
      width="250px"
    />
  ))
  .add('Disabled style', state => (
    <Input
      name="disabled"
      onChange={handleChange}
      value={state.disabled}
      placeholder="Disabled style"
      width="250px"
      disabled
    />
  ))
  .add('Error style', state => (
    <Input
      name="error"
      onChange={handleChange}
      value={state.error}
      placeholder="Error style"
      width="250px"
      error
    />
  ))
  .add('Checked style', state => (
    <Input
      name="checked"
      onChange={handleChange}
      value={state.checked}
      placeholder="Checked style"
      width="250px"
      checked
    />
  ))
  .add('Disabled checked style', state => (
    <Input
      name="disabledChecked"
      onChange={handleChange}
      value={state.disabledChecked}
      placeholder="Disabled checked style"
      width="250px"
      disabled
      checked
    />
  ))
  .add('Search style', state => (
    <Input
      name="search"
      onChange={handleChange}
      value={state.search}
      placeholder="Search style"
      width="250px"
      search
    />
  ))
  .add('Search disabled style', state => (
    <Input
      name="search"
      onChange={handleChange}
      value={state.search}
      placeholder="Search style"
      width="250px"
      search
      disabled
    />
  ))
  .add('Custom icon', state => (
    <Input
      name="customIcon"
      onChange={handleChange}
      value={state.customIcon}
      placeholder="Custom icon style"
      width="250px"
      customIcon="😀"
      onIconClick={action('Custom icon clicked')}
    />
  ))
  .add('Custom style', state => (
    <Input
      name="custom"
      onChange={handleChange}
      value={state.custom}
      placeholder="Custom style"
      width="250px"
      customStyles={{
        backgroundColor: '#f1f1f1',
        color: '#118473',
        border: '1px dashed #118473',
      }}
    />
  ));
