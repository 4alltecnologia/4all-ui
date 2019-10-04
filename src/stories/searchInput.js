import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import { action } from '@storybook/addon-actions';
import SearchInput from '../components/SearchInput';
import customWithInfo from './helpers/customWithInfo';

const store = new Store({
  primary: '',
  clear: '',
  disabled: '',
  error: '',
  custom: '',
});
const handleChange = e => {
  store.set({ [e.target.name]: e.target.value });
};

store.subscribe(state => {
  action(JSON.stringify(state))();
});

storiesOf('SearchInput', module)
  .addDecorator(customWithInfo())
  .addDecorator(storyFn => <State store={store}>{state => storyFn(state)}</State>)
  .add('Primary style', state => (
    <SearchInput
      name="primary"
      onChange={handleChange}
      value={state.primary}
      placeholder="Primary style"
      width="250px"
    />
  ))
  .add('Primary style with clear field', state => (
    <SearchInput
      name="clear"
      onChange={handleChange}
      onClearSearch={() => store.set({ clear: '' })}
      value={state.clear}
      placeholder="Primary w/ Clear style"
      width="250px"
    />
  ))
  .add('Disabled style', state => (
    <SearchInput
      name="disabled"
      onChange={handleChange}
      value={state.disabled}
      placeholder="Disabled style"
      width="250px"
      disabled
    />
  ))
  .add('Error style', state => (
    <SearchInput
      name="error"
      onChange={handleChange}
      value={state.error}
      placeholder="Error style"
      width="250px"
      error
    />
  ))
  .add('Custom style', state => (
    <SearchInput
      name="custom"
      onChange={handleChange}
      value={state.custom}
      placeholder="Custom style"
      width="250px"
      iconColor="blue"
      customStyles={{
        backgroundColor: '#f1f1f1',
        color: '#118473',
        border: '1px dashed #118473',
      }}
    />
  ));
