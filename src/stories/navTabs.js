import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StoryRouter from 'storybook-react-router'; // eslint-disable-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { NavTabs, NavTab } from '../components/NavTabs';
import theme from '../styles/variables';

const RouterMock = ({ children }) => (  // eslint-disable-line
  <BrowserRouter>
    <Fragment>
      <Route path="/1" />
      <Route path="/2" />
      <Route path="/3" />
      {children}
    </Fragment>
  </BrowserRouter>
);

storiesOf('NavTabs (current location)', module)
  .addDecorator(StoryRouter())
  .add('primary style', () => (
    <NavTabs>
      <Route path="/1" />
      <Route path="/2" />
      <Route path="/3" />
      <NavTab path="/1" exact>Tab 1</NavTab>
      <NavTab path="/2" exact>Tab 2</NavTab>
      <NavTab path="/3" exact>Tab 3</NavTab>
    </NavTabs>
  ))
  .add('secondary style', () => (
    <NavTabs secondary>
      <Route path="/1" />
      <Route path="/2" />
      <Route path="/3" />
      <NavTab path="/1" exact>Tab 1</NavTab>
      <NavTab path="/2" exact>Tab 2</NavTab>
      <NavTab path="/3" exact>Tab 3</NavTab>
    </NavTabs>
  ))
  .add('custom style', () => (
    <NavTabs>
      <Route path="/1" />
      <Route path="/2" />
      <Route path="/3" />
      <NavTab
        path="/1"
        exact
        width="200px"
        height="40px"
        activeBorderColor={theme.colors.DANGER_COLOR}
        customStyles={{
          marginRight: '20px',
          borderBottom: `1px solid ${theme.colors.GRAY_LIGHT_2}`,
        }}
        activeStyle={{ borderWidth: '3px' }}
      >
        Tab 1
      </NavTab>
      <NavTab
        path="/2"
        exact
        width="200px"
        height="40px"
        activeBorderColor={theme.colors.DANGER_COLOR}
        customStyles={{
          marginRight: '20px',
          borderBottom: `1px solid ${theme.colors.GRAY_LIGHT_2}`,
        }}
        activeStyle={{ borderWidth: '3px' }}
      >
        Tab 2
      </NavTab>
      <NavTab
        path="/3"
        exact
        width="200px"
        height="40px"
        activeBorderColor={theme.colors.DANGER_COLOR}
        customStyles={{
          marginRight: '20px',
          borderBottom: `1px solid ${theme.colors.GRAY_LIGHT_2}`,
        }}
        activeStyle={{ borderWidth: '3px' }}
      >
        Tab 3
      </NavTab>
    </NavTabs>
  ));
