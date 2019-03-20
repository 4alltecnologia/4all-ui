import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import theme from '../styles/variables';
import Tag from '../components/Tag';

storiesOf('Tag', module)
  .add('With Close Button', () => (
    <div style={{ display: 'flex' }}>
      <Tag showCloseIcon>Label</Tag>
    </div>
  ))
  .add('Primary', () => (
    <div style={{ display: 'flex' }}>
      <Tag>Label</Tag>
    </div>
  ))
  .add('Error', () => (
    <div style={{ display: 'flex' }}>
      <Tag error>Label</Tag>
    </div>
  ))
  .add('Secondary', () => (
    <div style={{ display: 'flex' }}>
      <Tag secondary>Label</Tag>
    </div>
  ))
  .add('Disabled', () => (
    <div style={{ display: 'flex' }}>
      <Tag disabled>Label</Tag>
    </div>
  ))
  .add('Custom Style', () => (
    <div style={{ display: 'flex' }}>
      <Tag
        bgColor={theme.colors.WHITE}
        color={theme.colors.INFO_COLOR}
        border={`1px solid ${theme.colors.GRAY_MEDIUM_2}`}
      >
        Label
      </Tag>
      <Tag
        bgColor={theme.colors.WHITE}
        color={theme.colors.MAIN_COLOR}
        border={`1px solid ${theme.colors.GRAY_MEDIUM_2}`}
      >
        Label
      </Tag>
      <Tag
        bgColor={theme.colors.WHITE}
        color="black"
        border={`1px solid ${theme.colors.GRAY_MEDIUM_2}`}
      >
        Label
      </Tag>
      <Tag
        bgColor={theme.colors.WHITE}
        color={theme.colors.HIGHLIGHT_COLOR}
        border={`1px solid ${theme.colors.GRAY_MEDIUM_2}`}
      >
        Label
      </Tag>
      <Tag
        bgColor={theme.colors.WHITE}
        color={theme.colors.DANGER_COLOR}
        border={`1px solid ${theme.colors.GRAY_MEDIUM_2}`}
      >
        Label
      </Tag>
    </div>
  ));
