import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { State, Store } from '@sambego/storybook-state';
import Switch from '../components/Switch';

const store = new Store({
  primary: false,
  withLabel: false,
});

storiesOf('Switch', module)
  .addDecorator(storyFn => (
    <State store={store}>
      {state => [storyFn(state)]}
    </State>
  ))
  .add('Primary', state => (
    <Switch
      checked={state.primary}
      onChange={() => store.set({ primary: !state.primary })}
    />
  ))
  .add('With Label', state => (
    <Switch
      checked={state.withLabel}
      onChange={() => store.set({ withLabel: !state.withLabel })}
    >
      {state.withLabel ? 'On' : 'Off'}
    </Switch>
  ))
  .add('Disabled', () => (
    <Switch disabled />
  ));
