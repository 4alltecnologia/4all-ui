import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import InputCurrency from '../components/InputCurrency';
import customWithInfo from './helpers/customWithInfo';

const store = new Store({
  primary: 0,
  disabled: 0,
  error: 0,
  checked: 0,
  custom: 0,
  disabledChecked: 0,
});
const handleChange = (e, value) => store.set({ [e.target.name]: value });

storiesOf('InputCurrency', module)
  .addDecorator(storyFn => (
    <State store={store}>
      {state => (storyFn(state))}
    </State>
  ))
  .add('Primary style', customWithInfo()(state => (
    <InputCurrency
      name="primary"
      onChange={handleChange}
      value={state.primary}
      placeholder="Primary style"
      width="250px"
    />
  )))
  .add('Disabled style', customWithInfo()(state => (
    <InputCurrency
      name="disabled"
      onChange={handleChange}
      value={state.disabled}
      placeholder="Disabled style"
      width="250px"
      disabled
    />
  )))
  .add('Error style', customWithInfo()(state => (
    <InputCurrency
      name="error"
      onChange={handleChange}
      value={state.error}
      placeholder="Error style"
      width="250px"
      error
    />
  )))
  .add('Checked style', customWithInfo()(state => (
    <InputCurrency
      name="checked"
      onChange={handleChange}
      value={state.checked}
      placeholder="Checked style"
      width="250px"
      checked
    />
  )))
  .add('Disabled checked style', customWithInfo()(state => (
    <InputCurrency
      name="disabledChecked"
      onChange={handleChange}
      value={state.disabledChecked}
      placeholder="Disabled checked style"
      width="250px"
      disabled
      checked
    />
  )))
  .add('Custom style', customWithInfo()(state => (
    <InputCurrency
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
  )));
