import React from 'react';
import { Store, State } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { Tabs, Tab } from '../components/Tabs';
import styles from '../styles/variables';
import customWithInfo from './helpers/customWithInfo';

const store = new Store({
  currentTab: 1,
});

storiesOf('Tabs', module)
  .addDecorator(customWithInfo())
  .addDecorator(storyFn => (
    <State store={store}>{state => [storyFn(state)]}</State>
  ))
  .add('primary style', state => (
    <Tabs>
      <Tab
        active={state.currentTab === 1}
        onClick={() => store.set({ currentTab: 1 })}
      >
        Tab 1
      </Tab>
      <Tab
        active={state.currentTab === 2}
        onClick={() => store.set({ currentTab: 2 })}
      >
        Tab 2
      </Tab>
      <Tab
        active={state.currentTab === 3}
        onClick={() => store.set({ currentTab: 3 })}
      >
        Tab 3
      </Tab>
    </Tabs>
  ))
  .add('secondary style', state => (
    <Tabs secondary>
      <Tab
        active={state.currentTab === 1}
        onClick={() => store.set({ currentTab: 1 })}
      >
        Tab 1
      </Tab>
      <Tab
        active={state.currentTab === 2}
        onClick={() => store.set({ currentTab: 2 })}
      >
        Tab 2
      </Tab>
      <Tab
        active={state.currentTab === 3}
        onClick={() => store.set({ currentTab: 3 })}
      >
        Tab 3
      </Tab>
    </Tabs>
  ))
  .add('custom style', state => (
    <Tabs>
      <Tab
        active={state.currentTab === 1}
        onClick={() => store.set({ currentTab: 1 })}
        width="200px"
        height="40px"
        activeBorderColor={styles.colors.DANGER_COLOR}
        customStyles={{
          marginRight: '20px',
          borderBottom: `1px solid ${styles.colors.GRAY_LIGHT_2}`,
        }}
        activeStyle={{ borderWidth: '3px' }}
      >
        Tab 1
      </Tab>
      <Tab
        active={state.currentTab === 2}
        onClick={() => store.set({ currentTab: 2 })}
        width="200px"
        height="40px"
        activeBorderColor={styles.colors.DANGER_COLOR}
        customStyles={{
          marginRight: '20px',
          borderBottom: `1px solid ${styles.colors.GRAY_LIGHT_2}`,
        }}
        activeStyle={{ borderWidth: '3px' }}
      >
        Tab 2
      </Tab>
      <Tab
        active={state.currentTab === 3}
        onClick={() => store.set({ currentTab: 3 })}
        width="200px"
        height="40px"
        activeBorderColor={styles.colors.DANGER_COLOR}
        customStyles={{
          marginRight: '20px',
          borderBottom: `1px solid ${styles.colors.GRAY_LIGHT_2}`,
        }}
        activeStyle={{ borderWidth: '3px' }}
      >
        Tab 3
      </Tab>
    </Tabs>
  ));
