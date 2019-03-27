import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import Textarea from '../components/Textarea';
import customWithInfo from './helpers/customWithInfo';

const store = new Store({
  primary: '',
  disabled: '',
  error: '',
  custom: '',
});
const handleChange = e => store.set({ [e.target.name]: e.target.value });

storiesOf('Textarea', module)
  .addDecorator(storyFn => (
    <State store={store}>{state => storyFn(state)}</State>
  ))
  .add(
    'Primary style',
    customWithInfo()(state => (
      <Textarea
        name="primary"
        value={state.primary}
        onChange={handleChange}
        width="500px"
        placeholder="Primary style"
      />
    )),
  )
  .add(
    'Disabled style',
    customWithInfo()(state => (
      <Textarea
        name="disabled"
        value={state.disabled}
        onChange={handleChange}
        width="500px"
        placeholder="Disabled style"
        disabled
      />
    )),
  )
  .add(
    'Error style',
    customWithInfo()(state => (
      <Textarea
        name="error"
        value={state.error}
        onChange={handleChange}
        width="500px"
        placeholder="Error style"
        error
      />
    )),
  )
  .add(
    'Custom style',
    customWithInfo()(state => (
      <Textarea
        name="custom"
        value={state.custom}
        onChange={handleChange}
        width="500px"
        placeholder="Custom style"
        customStyles={{
          border: '3px dotted #4fa444',
          borderRadius: '20px',
          color: '#4fa444',
          fontWeight: 700,
        }}
      />
    )),
  );
