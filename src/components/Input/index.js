import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import { default as theme } from '../../styles/variables';
import CheckIcon from '../Icons/Check';
import SearchIcon from '../Icons/Search';

const Input = ({
  id,
  name,
  type,
  value,
  onChange,
  onFocus,
  placeholder,
  maxLength,
  disabled,
  error,
  checked,
  customStyles,
  className,
  width,
  search,
  customIcon,
  onIconClick,
  iconColor,
  required,
}) => {
  const hasIcon = checked || search || customIcon;
  const hasClickFunction = !!onIconClick && typeof onIconClick === 'function';
  return (
    <styles.Container width={width}>
      <styles.Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        error={error}
        hasIcon={hasIcon}
        customStyles={customStyles}
        className={`input-4all ${className}`}
        width={width}
        required={required}
      />

      {hasIcon && (
        <styles.IconContainer
          as={hasClickFunction ? 'button' : 'div'}
          onClick={onIconClick}
          hasClickFunction={hasClickFunction}
        >
          {search && !checked && <SearchIcon color={iconColor} />}
          {checked && <CheckIcon size="30px" color={iconColor} />}
          {customIcon && customIcon}
        </styles.IconContainer>
      )}
    </styles.Container>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  checked: PropTypes.bool,
  customStyles: PropTypes.object,
  className: PropTypes.string,
  width: PropTypes.string,
  search: PropTypes.bool,
  customIcon: PropTypes.any,
  onIconClick: PropTypes.func,
  iconColor: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  id: '',
  name: '',
  type: 'text',
  value: '',
  onFocus: null,
  placeholder: '',
  maxLength: '',
  disabled: false,
  error: false,
  checked: false,
  customStyles: {},
  className: '',
  width: '100%',
  search: false,
  customIcon: null,
  onIconClick: null,
  iconColor: theme.colors.MAIN_COLOR,
  required: false,
};

export default Input;
