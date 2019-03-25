import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions'; // eslint-disable-line import/no-extraneous-dependencies
import { Store, StateDecorator } from '@sambego/storybook-state';
import Switch from '../components/Switch';

const store = new Store({
  checked: false,
});

const toggle = () => {
  store.set({ checked: !store.get('checked') });
};

storiesOf('Switch', module)
  .addDecorator(StateDecorator(store))
  .add('Primary', () => (
    <Switch
      onClick={action('On Click Switch')}
      onChange={toggle}
      checked={store.get('checked')}
    />
  ))
  .add('Disabled', () => (
    <div style={{ display: 'flex' }}>
      <Switch disabled />
    </div>
  ));
