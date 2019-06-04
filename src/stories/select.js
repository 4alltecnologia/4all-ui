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
  },
  {
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

const OPTIONS_EXAMPLE_DOT = [
  { value: '1', label: 'Option 1', dot: { color: 'orange' }, background: 'orange', color: 'white' },
  { value: '2', label: 'Option 2', dot: { color: 'green' }, background: 'green', color: 'white' },
  { value: '3', label: 'Option 3', dot: { color: 'brown' }, background: 'brown', color: 'white' },
  { value: '4', label: 'Option 4', dot: { color: 'red' }, background: 'red', color: 'white' },
  { value: '5', label: 'Option 5', dot: { color: 'blue' }, background: 'blue', color: 'white' },
  { value: '6', label: 'Option 6', dot: { color: 'yellow' }, background: 'yellow', color: 'black' },
];

const formatLabelValue = (currOption, options) => {
  const currPosition = options.length
    ? options.findIndex(opt => opt.value === currOption.value)
    : 0;

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
        {currPosition >= 1 && <span style={barStyle}>/</span>}
        <span style={labelStyle}>{currOption.label}</span>
      </Fragment>
    );
  }
  return (
    <Fragment>
      {currPosition >= 1 && <span style={barStyle}>/</span>}
      <span style={labelStyle}>{currOption.label}</span>
    </Fragment>
  );
};

const store = new Store({
  selected: null,
});

storiesOf('Select', module)
  .addDecorator(customWithInfo())
  .addDecorator(storyFn => <State store={store}>{state => [storyFn(state)]}</State>)
  .addDecorator(storyFn => <div style={{ width: '350px' }}>{storyFn()}</div>)
  .add('single select primary', state => (
    <Select
      value={state.selected}
      onChange={value => store.set({ selected: value })}
      options={OPTIONS_EXAMPLE}
      optionsListHeight="200px"
    />
  ))
  .add('single select custom', state => (
    <Select
      value={state.selected}
      onChange={value => store.set({ selected: value })}
      options={OPTIONS_EXAMPLE}
      valueColor={styles.colors.DANGER_COLOR}
    />
  ))
  .add('multi select primary', state => (
    <Select
      value={state.selected}
      isMultiple
      onChange={value => store.set({ selected: value })}
      options={OPTIONS_EXAMPLE}
    />
  ))
  .add('error style', state => (
    <Select
      value={state.selected}
      isMultiple
      error
      onChange={value => store.set({ selected: value })}
      options={OPTIONS_EXAMPLE}
    />
  ))
  .add('custom select label', state => (
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
  ))
  .add('custom styles', state => (
    <Select
      value={state.selected}
      isMultiple
      onChange={value => store.set({ selected: value })}
      options={OPTIONS_EXAMPLE_2}
      valueBgColor={styles.colors.DANGER_COLOR}
      iconColor={styles.colors.INFO_COLOR}
    />
  ))
  .add('custom option disabled styles', state => (
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
  ))
  .add('custom container styles', state => (
    <Select
      value={state.selected}
      isMultiple
      onChange={value => store.set({ selected: value })}
      options={[]}
      placeholder="Carregando..."
      disabled
      containerCustomStyles={{
        cursor: 'progress',
        pointerEvents: 'initial',
      }}
    />
  ))
  .add('custom dot style', state => (
    <Select
      value={state.selected}
      onChange={value => store.set({ selected: value })}
      options={OPTIONS_EXAMPLE_DOT}
      optionsListHeight="200px"
    />
  ))
  .add('custom button style', state => {
    const bgColor =
      state.selected && state.selected.hasOwnProperty('background')
        ? state.selected.background
        : styles.colors.MAIN_COLOR;

    const fontColor =
      state.selected && state.selected.hasOwnProperty('color')
        ? state.selected.color
        : styles.colors.WHITE;

    return (
      <Select
        value={state.selected}
        onChange={value => store.set({ selected: value })}
        options={OPTIONS_EXAMPLE_DOT}
        optionsListHeight="200px"
        containerCustomStyles={{
          backgroundColor: bgColor,
          borderRadius: styles.borders.RADIUS_1,
          cursor: 'pointer',
        }}
        dotOptions={{
          singleValueDot: false,
        }}
        customValueStyles={{
          color: fontColor,
          fontSize: styles.fontSizes.SIZE_6,
          fontWeight: 700,
        }}
        customDropdownIndicatorStyles={{
          paddingRight: 15,
        }}
        customValueContainerStyles={{
          paddingLeft: 13,
        }}
        customPlaceholderStyles={{
          color: styles.colors.WHITE,
          fontSize: styles.fontSizes.SIZE_6,
          fontWeight: 700,
        }}
        height="44px"
        width="200px"
        iconColor={fontColor}
        borderColor={bgColor}
        isSearchable={false}
      />
    );
  });
