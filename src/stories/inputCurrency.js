import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { State, Store } from '@sambego/storybook-state'; // eslint-disable-line import/no-extraneous-dependencies
import InputCurrency from '../components/InputCurrency';

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
  .add('Primary style', state => (
    <InputCurrency
      name="primary"
      onChange={handleChange}
      value={state.primary}
      placeholder="Primary style"
    />
  ))
  .add('Disabled style', state => (
    <InputCurrency
      name="disabled"
      onChange={handleChange}
      value={state.disabled}
      placeholder="Disabled style"
      disabled
    />
  ))
  .add('Error style', state => (
    <InputCurrency
      name="error"
      onChange={handleChange}
      value={state.error}
      placeholder="Error style"
      error
    />
  ))
  .add('Checked style', state => (
    <InputCurrency
      name="checked"
      onChange={handleChange}
      value={state.checked}
      placeholder="Checked style"
      checked
    />
  ))
  .add('Disabled checked style', state => (
    <InputCurrency
      name="disabledChecked"
      onChange={handleChange}
      value={state.disabledChecked}
      placeholder="Disabled checked style"
      disabled
      checked
    />
  ))
  .add('Custom style', state => (
    <InputCurrency
      name="custom"
      onChange={handleChange}
      value={state.custom}
      placeholder="Custom style"
      customStyles={{
        backgroundColor: '#f1f1f1',
        color: '#118473',
        border: '1px dashed #118473',
      }}
    />
  ));
