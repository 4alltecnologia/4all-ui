import React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressBar from '../components/ProgressBar';
import customWithInfo from './helpers/customWithInfo';
import theme from '../styles/variables';

storiesOf('ProgressBar', module)
  .addDecorator(customWithInfo())
  .add('Primary style', () => <ProgressBar progress={50} />)
  .add('Custom bar color', () => <ProgressBar progress={100} barColor="#333" />)
  .add('Custom height and width', () => (
    <ProgressBar progress={75} width="500px" height="10px" roundness="50px" />
  ))
  .add('Square style', () => (
    <ProgressBar progress={50} width="500px" height="10px" roundness="0" />
  ))
  .add('Custom styles', () => (
    <ProgressBar
      progress={75}
      width="500px"
      height="10px"
      barColor={theme.colors.INFO_COLOR}
      customStyles={{
        backgroundColor: theme.colors.GRAY_LIGHT,
      }}
    />
  ));
