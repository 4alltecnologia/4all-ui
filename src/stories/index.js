import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions'; // eslint-disable-line import/no-extraneous-dependencies
import Button from '../components/Button';
import { GRAY_DARKER, FONT_SIZE_4, INFO_COLOR } from '../styles/variables';
import Loader from '../components/Loader';

storiesOf('Button', module)
  .add('primary style', () => (
    <Button onClick={action('Primary Style Click')}>Hello Button</Button>
  ))
  .add('secondary style', () => (
    <Button onClick={action('Secondary Style Click')} secondary>Hello Button</Button>
  ))
  .add('disabled style', () => (
    <Button onClick={action('Disabled Style Click')} disabled>Hello Button</Button>
  ))
  // .add('loading style', () => (
  //   <Button onClick={action('Loading Style Click')} isLoading>Hello Button</Button>
  // ))
  .add('with Icon', () => (
    <Button onClick={action('With Icon Click')}>
      <img
        style={{ display: 'flex', width: '30px' }}
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KICA8ZyBmaWxsPSIjRkZGIj4KICAgIDxwYXRoIGQ9Ik0xNSAyOGM3LjE4IDAgMTMtNS44MiAxMy0xM1MyMi4xOCAyIDE1IDIgMiA3LjgyIDIgMTVzNS44MiAxMyAxMyAxM3ptMCAyQzYuNzE2IDMwIDAgMjMuMjg0IDAgMTUgMCA2LjcxNiA2LjcxNiAwIDE1IDBjOC4yODQgMCAxNSA2LjcxNiAxNSAxNSAwIDguMjg0LTYuNzE2IDE1LTE1IDE1eiIvPgogICAgPHBhdGggZD0iTTE0IDhhMSAxIDAgMCAxIDIgMHYxNGExIDEgMCAwIDEtMiAwVjh6Ii8+CiAgICA8cGF0aCBkPSJNOCAxNmExIDEgMCAwIDEgMC0yaDE0YTEgMSAwIDAgMSAwIDJIOHoiLz4KICA8L2c+Cjwvc3ZnPgo="
        alt="Icone 4all"
      />
    </Button>
  ))
  .add('with text and image', () => (
    <Button onClick={action('With text and image')}>
      <img
        style={{ marginRight: '8px', display: 'flex', width: '30px' }}
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KICA8ZyBmaWxsPSIjRkZGIj4KICAgIDxwYXRoIGQ9Ik0xNSAyOGM3LjE4IDAgMTMtNS44MiAxMy0xM1MyMi4xOCAyIDE1IDIgMiA3LjgyIDIgMTVzNS44MiAxMyAxMyAxM3ptMCAyQzYuNzE2IDMwIDAgMjMuMjg0IDAgMTUgMCA2LjcxNiA2LjcxNiAwIDE1IDBjOC4yODQgMCAxNSA2LjcxNiAxNSAxNSAwIDguMjg0LTYuNzE2IDE1LTE1IDE1eiIvPgogICAgPHBhdGggZD0iTTE0IDhhMSAxIDAgMCAxIDIgMHYxNGExIDEgMCAwIDEtMiAwVjh6Ii8+CiAgICA8cGF0aCBkPSJNOCAxNmExIDEgMCAwIDEgMC0yaDE0YTEgMSAwIDAgMSAwIDJIOHoiLz4KICA8L2c+Cjwvc3ZnPgo="
        alt="Icone 4all"
      />
      Hello Button
    </Button>
  ))
  .add('with custom styles', () => (
    <Button
      bgColor={GRAY_DARKER}
      width="200px"
      height="70px"
      border="4px dashed #fff"
      customStyles={{
        fontSize: FONT_SIZE_4,
        borderRadius: '50px',
      }}
      onClick={action('With Custom Styles')}
    >
      Hello Button
    </Button>
  ));

storiesOf('Loader', module)
  .add('Primary Style', () => (
    <Loader />
  ))
  .add('Custom Style', () => (
    <Loader
      color={INFO_COLOR}
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
        color={INFO_COLOR}
        size="60px"
        width="10px"
      />
    </div>
  ));
