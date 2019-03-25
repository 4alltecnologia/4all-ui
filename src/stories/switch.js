import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { State, Store, StateDecorator } from '@sambego/storybook-state';
import Switch from '../components/Switch';

const store = new Store({
  primaryChecked: false,
  withLabelChecked: false,
});

storiesOf('Switch', module)
  .addDecorator(StateDecorator(store))
  .add('Primary', () => (
    <State store={store}>
      {state => [
        <Switch
          checked={state.primaryChecked}
          onChange={() => store.set({ primaryChecked: !state.primaryChecked })}
        />,
      ]}
    </State>
  ))
  .addDecorator(StateDecorator(store))
  .add('With Label', () => (
    <State store={store}>
      {state => [
        <Switch
          checked={state.withLabelChecked}
          onChange={() => store.set({ withLabelChecked: !state.withLabelChecked })}
        >
          {state.withLabelChecked ? 'On' : 'Off'}
        </Switch>,
      ]}
    </State>
  ))
  .add('Disabled', () => (
    <div style={{ display: 'flex' }}>
      <Switch disabled />
    </div>
  ));
