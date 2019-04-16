import React from 'react';
import { storiesOf } from '@storybook/react';
import { Store, State } from '@sambego/storybook-state';
import customWithInfo from './helpers/customWithInfo';
import Radio from '../components/Radio';

const store = new Store({
  primary: false,
  selected: true,
});

const onChange = (e) => {
  const key = e.target.name;
  const resetedState = Object.keys(store.state)
    .reduce((prev, curr) => ({ ...prev, [curr]: false }), {});

  store.set({ ...resetedState, [key]: !store.get(key) });
};

storiesOf('Radio', module)
  .addDecorator(customWithInfo())
  .addDecorator(storyFn => (
    <State store={store}>{state => storyFn(state)}</State>
  ))
  .add('primary style', state => (
    <Radio
      onChange={onChange}
      name="primary"
      checked={state.primary}
      label="Primary style"
      value="1"
    />
  ))
  .add('primary style with description', state => (
    <Radio
      onChange={onChange}
      name="selected"
      checked={state.selected}
      label="Primary style"
      value="1"
      desc="Primary style description"
    />
  ))
  .add('disabled style', state => (
    <Radio
      onChange={onChange}
      name="primary"
      checked={state.primary}
      label="Primary style"
      value="1"
      disabled
    />
  ))
  .add('custom style', state => (
    <Radio
      onChange={onChange}
      name="selected"
      checked={state.selected}
      label="Primary style"
      value="3"
      desc="Primary style description"
      customDescStyles={{
        '.radio-4all-label': {
          fontWeight: 'bold',
        },
        '.radio-4all-description': {
          fontStyle: 'italic',
        },
      }}
    />
  ));
