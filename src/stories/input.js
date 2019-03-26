import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { State, Store } from '@sambego/storybook-state'; // eslint-disable-line import/no-extraneous-dependencies
import Input from '../components/Input';

const store = new Store({
  primary: '',
  disabled: '',
  error: '',
  checked: '',
  custom: '',
  disabledChecked: '',
});
const handleChange = e => store.set({ [e.target.name]: e.target.value });

storiesOf('Input', module)
  .addDecorator(storyFn => (
    <State store={store}>
      {state => (storyFn(state))}
    </State>
  ))
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
        border: '3px dashed #118473',
      }}
    />
  ));
