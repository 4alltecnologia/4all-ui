import React from 'react';
import { storiesOf } from '@storybook/react';
import customWithInfo from './helpers/customWithInfo';
import Tooltip from '../components/Tooltip';
import theme from '../styles/variables';

storiesOf('Tooltip', module)
  .addDecorator(customWithInfo())
  .addDecorator(storyFn => (
    <div style={{ marginTop: '150px', marginLeft: '250px' }}>{storyFn()}</div>
  ))
  .add('primary style', () => (
    <Tooltip>
      Excepteur adipisicing dolor sit ex duis. Reprehenderit magna ea in id
      ullamco deserunt labore aliquip consequat anim ad in.
    </Tooltip>
  ))
  .add('secondary style', () => (
    <Tooltip secondary>
      Excepteur adipisicing dolor sit ex duis. Reprehenderit magna ea in id
      ullamco deserunt labore aliquip consequat anim ad in.
    </Tooltip>
  ))
  .add('custom position', () => (
    <Tooltip top={false} right={false}>
      Excepteur adipisicing dolor sit ex duis. Reprehenderit magna ea in id
      ullamco deserunt labore aliquip consequat anim ad in.
    </Tooltip>
  ))
  .add('custom button size', () => (
    <Tooltip buttonSize={30}>
      Excepteur adipisicing dolor sit ex duis. Reprehenderit magna ea in id
      ullamco deserunt labore aliquip consequat anim ad in.
    </Tooltip>
  ))
  .add('custom colors', () => (
    <Tooltip
      backgroundColor={theme.colors.INFO_COLOR}
      fontColor={theme.colors.WHITE}
    >
      Excepteur adipisicing dolor sit ex duis. Reprehenderit magna ea in id
      ullamco deserunt labore aliquip consequat anim ad in.
    </Tooltip>
  ))
  .add('custom style', () => (
    <Tooltip
      customStyles={{
        '.tooltip-4all-text': {
          fontStyle: 'italic',
        },
      }}
    >
      Excepteur adipisicing dolor sit ex duis. Reprehenderit magna ea in id
      ullamco deserunt labore aliquip consequat anim ad in.
    </Tooltip>
  ));
