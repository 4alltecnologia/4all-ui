import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from '../components/Alert';
import styles from '../styles/variables';
import customWithInfo from './helpers/customWithInfo';
import Box from '../components/Box';

storiesOf('Box', module)
  .addDecorator(storyFn => (
    <div
      style={{
        width: '100%',
        height: '300px',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {storyFn()}
    </div>
  ))
  .addDecorator(customWithInfo())
  .add('Primary style', () => (
    <Box customStyles={{ height: '100%' }}>
      <div style={{ padding: '20px' }}>Lorem ipsum dolor sit amet consectetur adipiscing elit</div>
    </Box>
  ))
  .add('Custom Style', () => (
    <Box
      colSize={6}
      customStyles={{
        backgroundColor: styles.colors.INFO_COLOR,
        borderRadius: '10px',
        height: '300px',
      }}
    >
      <div style={{ padding: '20px' }}>Lorem ipsum dolor sit amet consectetur adipiscing elit</div>
    </Box>
  ));
