import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import customWithInfo from './helpers/customWithInfo';
import Checkbox from '../components/Checkbox';

const store = new Store({
  input: false,
  inputDisabled: true,
  mixed: false,
  mixedDisabled: true,
  customStyle: false,
});
const handleChange = e => store.set({ [e.target.name]: !store.get(e.target.name) });

storiesOf('Checkbox', module)
  .addDecorator(storyFn => (
    <State store={store}>
      {state => (storyFn(state))}
    </State>
  ))
  .add('Primary style', customWithInfo()(state => (
    <Checkbox
      onChange={handleChange}
      checked={state.input}
      name="input"
      label="Primary style"
    />
  )))
  .add('Disabled style', customWithInfo()(() => (
    <Checkbox
      onChange={handleChange}
      name="inputDisabled"
      label="Disabled"
      disabled
    />
  )))
  .add('Checked disabled style', customWithInfo()(() => (
    <Checkbox
      onChange={handleChange}
      name="inputDisabled"
      label="Disabled"
      checked
      disabled
    />
  )))
  .add('Mixed style', customWithInfo()(state => (
    <Checkbox
      onChange={handleChange}
      checked={state.mixed}
      name="mixed"
      label="Mixed"
      mixed
    />
  )))
  .add('Mixed disabled style', customWithInfo()(() => (
    <Checkbox
      onChange={handleChange}
      checked
      name="mixedDisabled"
      label="Mixed disabled"
      mixed
      disabled
    />
  )))
  .add('Custom style', customWithInfo()(state => (
    <Checkbox
      onChange={handleChange}
      checked={state.customStyle}
      name="customStyle"
      label="Custom style"
      customStyles={{
        '&.checkbox--checked': {
          '.checkbox-check': {
            backgroundColor: '#4482a4',
            borderColor: '#4482a4',
          },
        },
        '.checkbox-label': {
          fontWeight: 'bold',
          color: '#4482a4',
        },
      }}
    />
  )));
