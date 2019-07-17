import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import SearchIcon from '../Icons/Search';

const SearchInput = ({
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
  customStyles,
  className,
  width,
  debounceTimeout,
  minLength,
}) => {
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
        customStyles={customStyles}
        className={`input-4all ${className}`}
        width={width}
        debounceTimeout={debounceTimeout}
        minLength={minLength}
      />

      <styles.IconContainer>
        <SearchIcon />
      </styles.IconContainer>
    </styles.Container>
  );
};

SearchInput.propTypes = {
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
  customStyles: PropTypes.object,
  className: PropTypes.string,
  width: PropTypes.string,
  minLength: PropTypes.number,
  debounceTimeout: PropTypes.number,
};

SearchInput.defaultProps = {
  id: '',
  name: '',
  type: 'text',
  value: '',
  onFocus: null,
  placeholder: '',
  maxLength: '',
  disabled: false,
  error: false,
  customStyles: {},
  className: '',
  width: '100%',
  minLength: 2,
  debounceTimeout: 300,
};

export default SearchInput;
