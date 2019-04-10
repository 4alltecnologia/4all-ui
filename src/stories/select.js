import React, { Fragment } from 'react';
import { Store, State } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import Select from '../components/Select';
import customWithInfo from './helpers/customWithInfo';
import styles from '../styles/variables';


const OPTIONS_EXAMPLE = [
  {
    options: [
      { value: '4', label: 'Value 041231121', disabled: true },
      { value: '5', label: '05' },
      { value: '6', label: '06' },
    ],
  }, {
    label: 'Example',
    options: [
      { value: '1', label: 'Value 01' },
      { value: '2', label: 'Value 02' },
      { value: '3', label: 'Value 03' },
    ],
  },
];

const OPTIONS_EXAMPLE_2 = [
  { value: '4', label: 'Value 041231121' },
  { value: '5', label: '05' },
  { value: '6', label: '06' },
  { value: '1', label: 'Value 01' },
  { value: '2', label: 'Value 02' },
  { value: '3', label: 'Value 03' },
];
const formatLabelValue = (currOption, options) => {
  const currPosition = options.findIndex(opt => opt.value === currOption.value);
  const barStyle = {
    marginRight: '10px',
    /* fontSize: styles.fontSizes.SIZE_5, */
    color: styles.colors.DANGER_COLOR,
  };
  const labelStyle = {
    /* fontSize: styles.fontSizes.SIZE_5, */
    color: styles.colors.INFO_COLOR,
  };

  if (currOption.value === 'delivery') {
    return (
      <Fragment>
        {currPosition >= 1 && (
          <span style={barStyle}>/</span>
        )}
        <span style={labelStyle}>{currOption.label}</span>

      </Fragment>
    );
  }
  return (
    <Fragment>
      {currPosition >= 1 && (
        <span style={barStyle}>/</span>
      )}
      <span style={labelStyle}>{currOption.label}</span>
    </Fragment>
  );
};


const store = new Store({
  selected: null,
});

storiesOf('Select', module)
  .addDecorator(storyFn => (
    <State store={store}>
      {state => [storyFn(state)]}
    </State>
  ))
  .addDecorator(storyFn => (
    <div style={{ width: '350px' }}>
      {storyFn()}
    </div>
  ))
  .add('single select primary', customWithInfo()(state => (
    <Select
      value={state.selected}
      onChange={value => store.set({ selected: value })}
      options={OPTIONS_EXAMPLE}
    />
  )))
  .add('single select custom', customWithInfo()(state => (
    <Select
      value={state.selected}
      onChange={value => store.set({ selected: value })}
      options={OPTIONS_EXAMPLE}
      valueColor={styles.colors.DANGER_COLOR}
    />
  )))
  .add('multi select primary', customWithInfo()(state => (
    <Select
      value={state.selected}
      isMultiple
      onChange={value => store.set({ selected: value })}
      options={OPTIONS_EXAMPLE}
    />
  )))
  .add('error style', customWithInfo()(state => (
    <Select
      value={state.selected}
      isMultiple
      error
      onChange={value => store.set({ selected: value })}
      options={OPTIONS_EXAMPLE}
    />
  )))
  .add('custom select label', customWithInfo()(state => (
    <Select
      value={state.selected}
      isMultiple
      canRemove={false}
      formatLabel={formatLabelValue}
      onChange={value => store.set({ selected: value })}
      options={OPTIONS_EXAMPLE}
      valueBgColor="transparent"
      height="50px"
      optionHeight="30px"
    />
  )))
  .add('custom styles', customWithInfo()(state => (
    <Select
      value={state.selected}
      isMultiple
      onChange={value => store.set({ selected: value })}
      options={OPTIONS_EXAMPLE_2}
      valueBgColor={styles.colors.DANGER_COLOR}
      iconColor={styles.colors.INFO_COLOR}
    />
  )))
  .add('custom option disabled styles', customWithInfo()(state => (
    <Select
      value={state.selected}
      isMultiple
      onChange={value => store.set({ selected: value })}
      options={OPTIONS_EXAMPLE}
      optionCustomDisabledStyles={{
        opacity: '0.5',
        fontStyle: 'italic',
        color: styles.colors.HIGHLIGHT_COLOR,
        ':hover, :active, :focus': {
          backgroundColor: 'transparent',
        },
        cursor: 'not-allowed',
      }}
    />
  )));
