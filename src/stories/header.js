import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import Header from '../components/Header';
import customWithInfo from './helpers/customWithInfo';

storiesOf('Header', module)
  .addDecorator(customWithInfo())
  .addDecorator(storyFn => <BrowserRouter>{storyFn()}</BrowserRouter>)
  .add('Primary style', () => (
    <Header
      breadcrumbLinks={[{ external: true, link: '/', text: 'Home' }, { link: '/', text: 'Itens' }]}
      title="Item1"
      backLink={{ text: 'Voltar para Itens', external: true, link: '/' }}
    />
  ))
  .add('Without backlink', () => (
    <Header
      breadcrumbLinks={[{ external: true, link: '/', text: 'Home' }, { link: '/', text: 'Itens' }]}
      title="Item1"
    />
  ))
  .add('Custom style', () => (
    <Header
      breadcrumbLinks={[{ external: true, link: '/', text: 'Home' }, { link: '/', text: 'Itens' }]}
      title="Item1"
      backLink={{ text: 'Voltar para Itens', external: true, link: '/' }}
      containerStyles={{
        width: '100%',
        padding: '0 20px',
      }}
    />
  ));
