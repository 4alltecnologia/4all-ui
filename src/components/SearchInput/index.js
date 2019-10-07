import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../Icons/Close';
import * as styles from './style';
import { default as theme } from '../../styles/variables';
import SearchIcon from '../Icons/Search';

const SearchInput = ({
  id,
  name,
  type,
  value,
  onChange,
  onChangeAccessible,
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
  iconColor,
  onClearSearch,
}) => {
  const handleChange = e => {
    if (e.keyCode === 13) {
      onChangeAccessible();
    }
  };

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
        onKeyDown={handleChange}
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
        {value && onClearSearch ? (
          <styles.BtnAction onClick={onClearSearch}>
            <CloseIcon color={theme.colors.GRAY_MEDIUM} />
          </styles.BtnAction>
        ) : (
          <styles.BtnAction onClick={onChangeAccessible}>
            <SearchIcon color={iconColor} />
          </styles.BtnAction>
        )}
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
  iconColor: PropTypes.string,
  onClearSearch: PropTypes.func,
  onChangeAccessible: PropTypes.func,
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
  minLength: 0,
  debounceTimeout: 300,
  iconColor: theme.colors.MAIN_COLOR,
  onClearSearch: null,
  onChangeAccessible: () => {},
};

export default SearchInput;
