import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import {
  formatPrice,
  priceToInt,
  getFormattedValue,
  adjustCaretPosition,
  getTargetInputParams,
} from '../../helpers/price';

export default class InputCurrency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caretPosition: null,
      event: null,
    };
  }

  componentDidUpdate(prevProps) {
    const value = this.props;
    const { caretPosition, event } = this.state;
    if (prevProps.value !== value && !!caretPosition) {
      event.target.setSelectionRange(caretPosition, caretPosition);
    }
  }

  onChangePrice = (e, onChange) => {
    e.persist();
    const targetInputParams = getTargetInputParams(e);
    const hasLetters = e.target.value.match(/[a-z]/i);
    const formattedValue = getFormattedValue(e);
    if (!hasLetters) {
      this.setState({
        event: e,
        caretPosition: adjustCaretPosition(targetInputParams, formattedValue),
      });
    }

    return onChange(e, formattedValue);
  };

  render() {
    const {
      id,
      name,
      type,
      value,
      onChange,
      placeholder,
      disabled,
      error,
      customStyles,
      checked,
      className,
      width,
    } = this.props;
    return (
      <Input
        id={id}
        name={name}
        type={type}
        value={formatPrice(priceToInt(value) / 100)}
        onChange={e => this.onChangePrice(e, onChange)}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        customStyles={customStyles}
        checked={checked}
        className={`input-currency-4all ${className}`}
        width={width}
      />
    );
  }
}

InputCurrency.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  customStyles: PropTypes.object,
  checked: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.string,
};

InputCurrency.defaultProps = {
  id: '',
  name: '',
  type: 'text',
  value: '',
  placeholder: 'R$',
  disabled: false,
  error: false,
  checked: false,
  customStyles: {},
  className: '',
  width: '100%',
};
