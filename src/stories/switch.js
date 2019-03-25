import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { State, Store, StateDecorator } from '@sambego/storybook-state';
import Switch from '../components/Switch';

const store = new Store({
  primary: false,
  withLabel: false,
});

storiesOf('Switch', module)
  .addDecorator(StateDecorator(store))
  .add('Primary', () => (
    <State store={store}>
      {state => [
        <Switch
          checked={state.primary}
          onChange={() => store.set({ primary: !state.primary })}
        />,
      ]}
    </State>
  ))
  .addDecorator(StateDecorator(store))
  .add('With Label', () => (
    <State store={store}>
      {state => [
        <Switch
          checked={state.withLabel}
          onChange={() => store.set({ withLabel: !state.withLabel })}
        >
          {state.withLabel ? 'On' : 'Off'}
        </Switch>,
      ]}
    </State>
  ))
  .add('Disabled', () => (
    <div style={{ display: 'flex' }}>
      <Switch disabled />
    </div>
  ));
