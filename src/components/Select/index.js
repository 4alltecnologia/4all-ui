import React, { Fragment } from 'react';
import Select, { components } from 'react-select';
import PropTypes from 'prop-types';
import IconCheck from '../../images/check.svg';
import IconArrow from '../../images/arrow.svg';
import * as stylesSelect from './style';
import { default as theme } from '../../styles/variables';

const customStyles = error => ({
  option: (stylesProvided, { isFocused, isDisabled }) => ({
    ...stylesProvided,
    fontFamily: theme.fontFamily,
    color: isDisabled ? theme.colors.GRAY_MEDIUM_3 : theme.colors.GRAY_DARKER,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    textDecoration: isDisabled ? 'line-through' : '',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: isFocused ? theme.colors.GRAY_LIGHT_2 : '#FFF',
    height: 40,
    ':active': {
      backgroundColor: theme.colors.GRAY_LIGHT_2,
    },
    label: {
      fontSize: theme.fontSizes.SIZE_6,
      fontWeight: 'normal',
    },
  }),
  control: () => ({
    width: '100%',
    height: 40,
    display: 'flex',
    border: `1px solid ${error ? theme.colors.DANGER_COLOR : theme.colors.GRAY_LIGHT_2}`,
    borderRadius: theme.borders.RADIUS_1,
  }),
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: 'transparent',
      borderRadius: '15px',
      fontSize: theme.fontSizes.SIZE_7,
      fontWeight: theme.fontWeights.SEMIBOLD,
      fontFamily: theme.fontFamily,
    };
  },
  multiValueLabel: styles => ({
    ...styles,
    color: theme.colors.GRAY_DARKER,
    padding: 5,
    paddingRight: 0,
    paddingLeft: '2px',
  }),
  multiValueRemove: styles => ({
    ...styles,
    display: 'none',
  }),
  placeholder: styles => ({
    ...styles,
    fontSize: theme.fontSizes.SIZE_7,
    color: theme.colors.GRAY_MEDIUM,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeights.SEMIBOLD,
  }),
  valueContainer: styles => ({
    ...styles,
    paddingRight: '30px',
    flexWrap: 'nowrap',
  }),
});


const groupStyles = {
  display: 'flex',
  alignItems: 'center',
};

const GroupLabel = {
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSizes.SIZE_6,
  fontWeight: theme.fontWeights.SEMIBOLD,
  color: theme.colors.GRAY_MEDIUM,
  textTransform: 'initial',
};

const OPTIONS_EXAMPLE = [
  {
    options: [
      { value: '4', label: 'Value 04' },
      { value: '5', label: 'Value 05' },
      { value: '6', label: 'Value 06' },
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

const Option = (option) => {
  return (
    <components.Option {...option}>
      <label>{option.label}</label>
      {(option.isSelected) ? (
        <img src={IconCheck} alt="Icone de confirmação"/>
      ) : null }
    </components.Option>
  );
};

const DropdownIndicator = (props) => {
  return components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <stylesSelect.CustomArrowImg src={IconArrow} />
    </components.DropdownIndicator>
  );
};

const MultiValueLabel = (props, formatLabel) => {
  /* eslint-disable */
  const options = props.selectProps.value;
  const currOption = props.data;
  const isLastItem = options.findIndex(opt => opt.value === currOption.value) === (options.length - 1);
  if (options.findIndex(opt => opt.value === currOption.value) > 2) {
    return isLastItem && options.length > 3 && (
      <stylesSelect.QtdOptions>{props.selectProps.value.length}</stylesSelect.QtdOptions>
    );
  }
  return formatLabel ? (
    <components.MultiValueLabel {...props}>
      {formatLabel(currOption, options)}
      {isLastItem && options.length > 3 && (
        <stylesSelect.QtdOptions>{props.selectProps.value.length}</stylesSelect.QtdOptions>
      )}
    </components.MultiValueLabel>
  ) : (
    <components.MultiValueLabel {...props} />
  );
  /* eslint-enable */
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span style={GroupLabel}>{data.label}</span>
  </div>
);

const ValueContainer = ({ children, ...props }) => (    // eslint-disable-line
  <components.ValueContainer {...props}>
    {children}
  </components.ValueContainer>
);


const SelectComponents = ({
  id,
  value,
  name,
  onChange,
  isMultiple,
  options,
  placeholder,
  formatLabel,
  error,
  closeMenuOnSelect,
}) => {
  return (
    <Fragment>
      <stylesSelect.GlobalSelectStyle />
      <Select
        id={`select-${id}`}
        name={`${name}-${id}`}
        onChange={onChange}
        options={options}
        value={value}
        isMulti={isMultiple}
        styles={customStyles(error)}
        className="react-dropdown-multiselect"
        placeholder={placeholder}
        classNamePrefix="select"
        isClearable={false}
        clearable={false}
        hideSelectedOptions={false}
        closeMenuOnSelect={closeMenuOnSelect}
        formatGroupLabel={formatGroupLabel}
        isOptionDisabled={opt => opt.disabled}
        components={{
          Option,
          DropdownIndicator,
          IndicatorSeparator: () => null,
          ValueContainer,
          MultiValueLabel: props => MultiValueLabel(props, formatLabel),
        }}
      />
    </Fragment>
  );
};

SelectComponents.propTypes = {
  id: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  options: PropTypes.array,
  isMultiple: PropTypes.bool,
  placeholder: PropTypes.string,
  formatLabel: PropTypes.func,
  closeMenuOnSelect: PropTypes.bool,
};

SelectComponents.defaultProps = {
  options: OPTIONS_EXAMPLE,
  isMultiple: false,
  placeholder: 'Selecione',
  error: false,
  closeMenuOnSelect: false,
  formatLabel: null,
  id: 'dropdown',
  name: '',
  value: null,
};

export default SelectComponents;
