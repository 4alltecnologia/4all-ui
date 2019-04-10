import React from 'react';
import { storiesOf } from '@storybook/react';
import { Store, State } from '@sambego/storybook-state';
import Pagination from '../components/Pagination';
import customWithInfo from './helpers/customWithInfo';
import styles from '../styles/variables';

const store = new Store({
  currentPage: 1,
});

storiesOf('Pagination', module)
  .addDecorator((storyFn) => {
    store.set({ currentPage: 1 });
    return (
      <State store={store}>
        {state => [storyFn(state)]}
      </State>
    );
  })
  .add('primary style', customWithInfo()(state => (
    <Pagination
      pages={10}
      onChangePage={page => store.set({ currentPage: page })}
      currentPage={state.currentPage}
    />
  )))
  .add('secondary style', customWithInfo()(state => (
    <Pagination
      pages={10}
      secondary
      onChangePage={page => store.set({ currentPage: page })}
      currentPage={state.currentPage}
    />
  )))
  .add('show less items', customWithInfo()(state => (
    <Pagination
      pages={10}
      showLessItems
      onChangePage={page => store.set({ currentPage: page })}
      currentPage={state.currentPage}
    />
  )))
  .add('customStyles', customWithInfo()(state => (
    <Pagination
      pages={10}
      onChangePage={page => store.set({ currentPage: page })}
      currentPage={state.currentPage}
      itemSpacing="7px"
      customActiveItemStyles={{
        backgroundColor: styles.colors.HIGHLIGHT_COLOR,
        boxShadow: '0px 0px 7px -1px rgba(0,0,0,0.8)',
        borderRadius: '5px',
      }}
      customInactiveItemStyles={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        color: styles.colors.HIGHLIGHT_COLOR,
      }}
      iconColor={styles.colors.HIGHLIGHT_COLOR}
    />
  )));
