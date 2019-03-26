import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../styles/variables';
import Loader from '../components/Loader';
import customWithInfo from './helpers/customWithInfo';


storiesOf('Loader', module)
  .addDecorator(customWithInfo())
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
