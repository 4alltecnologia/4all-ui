import React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressBar from '../components/ProgressBar';
import customWithInfo from './helpers/customWithInfo';
import theme from '../styles/variables';

storiesOf('ProgressBar', module)
  .add('Primary style', customWithInfo()(() => <ProgressBar progress={50} />))
  .add(
    'Custom bar color',
    customWithInfo()(() => <ProgressBar progress={100} barColor="#333" />),
  )
  .add(
    'Custom height and width',
    customWithInfo()(() => (
      <ProgressBar progress={75} width="500px" height="10px" roundness="50px" />
    )),
  )
  .add(
    'Square style',
    customWithInfo()(() => (
      <ProgressBar progress={50} width="500px" height="10px" roundness="0" />
    )),
  )
  .add(
    'Custom styles',
    customWithInfo()(() => (
      <ProgressBar
        progress={75}
        width="500px"
        height="10px"
        barColor={theme.colors.INFO_COLOR}
        customStyles={{
          backgroundColor: theme.colors.GRAY_LIGHT,
        }}
      />
    )),
  );
