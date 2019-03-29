import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import checkIcon from '../../images/check.svg';
import searchIcon from '../../images/search.svg';
import { GlobalStyle } from '../../styles/mixins';

const Input = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  maxLength,
  disabled,
  error,
  checked,
  customStyles,
  className,
  width,
  search,
}) => {
  const hasIcon = checked || search;

  return (
    <styles.Container width={width}>
      <styles.Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        error={error}
        hasIcon={hasIcon}
        customStyles={customStyles}
        className={className}
        width={width}
      />

      {hasIcon && (
        <styles.IconContainer>
          {(search && !checked) && <styles.Icon src={searchIcon} alt="Search Icon" />}
          {checked && <styles.Icon src={checkIcon} alt="Check Icon" />}
        </styles.IconContainer>
      )}
      <GlobalStyle />
    </styles.Container>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  checked: PropTypes.bool,
  customStyles: PropTypes.object,
  className: PropTypes.string,
  width: PropTypes.string,
  search: PropTypes.bool,
};

Input.defaultProps = {
  id: '',
  name: '',
  type: 'text',
  value: '',
  placeholder: '',
  maxLength: '',
  disabled: false,
  error: false,
  checked: false,
  customStyles: {},
  className: '',
  width: '100%',
  search: false,
};

export default Input;
