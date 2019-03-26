import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import {
  formatPrice,
  priceToInt,
  getFormattedValue,
} from '../../helpers/price';

const InputCurrency = ({
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
}) => (
  <Input
    id={id}
    name={name}
    type={type}
    value={formatPrice(priceToInt(value) / 100)}
    onChange={e => onChange(e, getFormattedValue(e))}
    placeholder={placeholder}
    disabled={disabled}
    error={error}
    customStyles={customStyles}
    checked={checked}
    className={className}
    width={width}
  />
);

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

export default InputCurrency;
