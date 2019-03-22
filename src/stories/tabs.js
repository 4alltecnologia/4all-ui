import React, { useState } from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Tabs, Tab } from '../components/Tabs';
import styles from '../styles/variables';

const ProvideTabManager = (WrappedComponent) => {  // eslint-disable-line
  const MockComponent = (props) => {
    const [currentTab, setCurrentTab] = useState(1);
    return (
      <WrappedComponent props={props} setCurrentTab={setCurrentTab} currentTab={currentTab} />
    );
  };

  return <MockComponent />;
};

storiesOf('Tabs', module)
  .add('primary style', () => {
    const FirstStory = ({ currentTab, setCurrentTab }) => (
      <Tabs>
        <Tab active={currentTab === 1} onClick={() => setCurrentTab(1)}>Tab 1</Tab>
        <Tab active={currentTab === 2} onClick={() => setCurrentTab(2)}>Tab 2</Tab>
        <Tab active={currentTab === 3} onClick={() => setCurrentTab(3)}>Tab 3</Tab>
      </Tabs>
    );
    return ProvideTabManager(FirstStory);
  })
  .add('secondary style', () => {
    const FirstStory = ({ currentTab, setCurrentTab }) => (
      <Tabs secondary>
        <Tab active={currentTab === 1} onClick={() => setCurrentTab(1)}>Tab 1</Tab>
        <Tab active={currentTab === 2} onClick={() => setCurrentTab(2)}>Tab 2</Tab>
        <Tab active={currentTab === 3} onClick={() => setCurrentTab(3)}>Tab 3</Tab>
      </Tabs>
    );
    return ProvideTabManager(FirstStory);
  })
  .add('custom style', () => {
    const FirstStory = ({ currentTab, setCurrentTab }) => (
      <Tabs>
        <Tab
          active={currentTab === 1}
          onClick={() => setCurrentTab(1)}
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
          active={currentTab === 2}
          onClick={() => setCurrentTab(2)}
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
          active={currentTab === 3}
          onClick={() => setCurrentTab(3)}
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
    );
    return ProvideTabManager(FirstStory);
  });
