import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import theme from '../styles/variables';
import Loader from '../components/Loader';


storiesOf('Loader', module)
  .addDecorator(withInfo())
  .add('Primary Style', () => (
    <Loader />
  ))
  .add('Custom Style', () => (
    <Loader
      color={theme.colors.INFO_COLOR}
      size="60px"
      width="10px"
    />
  ))
  .add('Full Screen Style', () => (
    <div style={{
      width: '100%',
      height: '100vh',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <Loader
        color={theme.colors.INFO_COLOR}
        size="60px"
        width="10px"
      />
    </div>
  ));
