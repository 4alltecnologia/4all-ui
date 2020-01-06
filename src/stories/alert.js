import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from '../components/Alert';
import theme from '../styles/variables';
import customWithInfo from './helpers/customWithInfo';

storiesOf('Alert', module)
  .addDecorator(customWithInfo())
  .add('Primary style', () => <Alert>Lorem ipsum dolor sit amet consectetur adipiscing elit</Alert>)
  .add('Secondary style', () => (
    <Alert secondary>Lorem ipsum dolor sit amet consectetur adipiscing elit</Alert>
  ))
  .add('Custom colors', () => (
    <Alert
      fontColor={theme.colors.MAIN_COLOR}
      iconColor={theme.colors.MAIN_COLOR}
      backgroundColor={theme.colors.GRAY_LIGHT}
    >
      Lorem ipsum dolor sit amet consectetur adipiscing elit
    </Alert>
  ))
  .add('Custom icon', () => (
    <Alert iconColor={theme.colors.WHITE} iconSize="20px">
      Lorem ipsum dolor sit amet consectetur adipiscing elit
    </Alert>
  ))
  .add('Custom style', () => (
    <Alert
      fontColor={theme.colors.MAIN_COLOR}
      iconColor={theme.colors.MAIN_COLOR}
      backgroundColor={theme.colors.GRAY_LIGHT}
      customStyles={{
        border: `1px dashed ${theme.colors.MAIN_COLOR}`,
        fontStyle: 'italic',
        fontWeight: 400,
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipiscing elit
    </Alert>
  ));
