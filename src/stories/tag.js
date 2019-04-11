import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Tag from '../components/Tag';
import theme from '../styles/variables';
import customWithInfo from './helpers/customWithInfo';

storiesOf('Tag', module)
  .addDecorator(customWithInfo())
  .addDecorator(storyFn => <div style={{ display: 'flex' }}>{storyFn()}</div>)
  .add('Primary', () => (
    <Tag onHoverTag={action('On Hover Tag')} onBlurTag={action('On Blur Tag')}>
      Label
    </Tag>
  ))
  .add('Error', () => <Tag error>Label</Tag>)
  .add('Secondary', () => <Tag secondary>Label</Tag>)
  .add('Disabled', () => <Tag disabled>Label</Tag>)
  .add('Custom Style', () => (
    <Tag
      bgColor={theme.colors.WHITE}
      color={theme.colors.INFO_COLOR}
      border={`1px solid ${theme.colors.GRAY_LIGHT_2}`}
    >
      Label
    </Tag>
  ))
  .add('Primary with Close Button', () => (
    <Tag onRemoveTag={action('With onRemoveTag Function')}>Label</Tag>
  ))
  .add('Error with Close Button', () => (
    <Tag onRemoveTag={action('With onRemoveTag Function')} error>
      Label
    </Tag>
  ))
  .add('Secondary with Close Button', () => (
    <Tag onRemoveTag={action('With onRemoveTag Function')} secondary>
      Label
    </Tag>
  ))
  .add('Disabled with Close Button', () => (
    <Tag onRemoveTag={action('With onRemoveTag Function')} disabled>
      Label
    </Tag>
  ))
  .add('Custom Style with Close Button', () => (
    <Tag
      bgColor={theme.colors.WHITE}
      color={theme.colors.INFO_COLOR}
      border={`1px solid ${theme.colors.INFO_COLOR}`}
      iconColor={theme.colors.INFO_COLOR}
      onRemoveTag={action('With onRemoveTag Function')}
    >
      Label
    </Tag>
  ));
