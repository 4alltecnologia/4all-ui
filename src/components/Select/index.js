import React, { PureComponent, Fragment } from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';
import * as stylesSelect from './style';
import styles from '../../styles/variables';
import { formatSelectValues } from '../../helpers/select';
import {
  formatGroupLabel,
  DropdownIndicator,
  MultiValueLabel,
  ValueContainer,
  Option,
} from './custom';

class Select extends PureComponent {
  componentDidMount() {
    this.shouldFormatSelectValues();
  }

  componentDidUpdate() {
    this.shouldFormatSelectValues();
  }

  shouldFormatSelectValues = () => {
    const { isMultiple } = this.props;
    if (isMultiple) {
      formatSelectValues();
    }
  }

  render() {
    const {
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
      customValueStyles,
      canRemove,
      valueBgColor,
      valueColor,
      multiRemoveBgColor,
      iconColor,
      height,
      optionCustomDisabledStyles,
      optionHeight,
      containerCustomStyles,
    } = this.props;
    const style = {
      valueBgColor,
      valueColor,
      multiRemoveBgColor,
      customValueStyles,
      iconColor,
      height,
      optionHeight,
    };
    return (
      <Fragment>
        <stylesSelect.GlobalSelectStyle />
        <ReactSelect
          id={`select-${id}`}
          name={`${name}-${id}`}
          onChange={onChange}
          options={options}
          value={value}
          isMulti={isMultiple}
          styles={stylesSelect.customStyles({
            error,
            customStyle: style,
            canRemove,
            optionCustomDisabledStyles,
            containerCustomStyles,
          })}
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
            Option: props => Option(props, style),
            DropdownIndicator: props => DropdownIndicator(props, style),
            IndicatorSeparator: () => null,
            ValueContainer,
            MultiValueLabel: props => MultiValueLabel(props, formatLabel),
          }}
        />
      </Fragment>
    );
  }
}

Select.propTypes = {
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
  canRemove: PropTypes.bool,
  customValueStyles: PropTypes.object,
  valueBgColor: PropTypes.string,
  valueColor: PropTypes.string,
  multiRemoveBgColor: PropTypes.string,
  iconColor: PropTypes.string,
  height: PropTypes.string,
  optionHeight: PropTypes.string,
  optionCustomDisabledStyles: PropTypes.object,
  containerCustomStyles: PropTypes.object,
};

Select.defaultProps = {
  options: [],
  isMultiple: false,
  placeholder: 'Selecione',
  error: false,
  closeMenuOnSelect: false,
  formatLabel: null,
  id: 'dropdown',
  name: '',
  value: null,
  canRemove: true,
  customValueStyles: {},
  valueBgColor: null,
  valueColor: null,
  multiRemoveBgColor: null,
  iconColor: styles.colors.MAIN_COLOR,
  height: styles.input.DEFAULT_HEIGHT,
  optionHeight: styles.input.DEFAULT_HEIGHT,
  optionCustomDisabledStyles: {},
  containerCustomStyles: {},
};

export default Select;
