import React, { Fragment } from 'react';
import PropType from 'prop-types';
import * as styles from './style';
import { GlobalStyle } from '../../styles/mixins';

const Textarea = ({
  id,
  name,
  className,
  value,
  height,
  width,
  onChange,
  customStyles,
  placeholder,
  disabled,
  error,
}) => (
  <Fragment>
    <styles.Textarea
      id={id}
      name={name}
      className={className}
      value={value}
      customStyles={customStyles}
      width={width}
      onChange={onChange}
      height={height}
      placeholder={placeholder}
      disabled={disabled}
      error={error}
    />
    <GlobalStyle />
  </Fragment>
);

Textarea.propTypes = {
  value: PropType.string,
  height: PropType.string,
  onChange: PropType.func.isRequired,
  id: PropType.string,
  name: PropType.string,
  className: PropType.string,
  width: PropType.string,
  customStyles: PropType.object,
  placeholder: PropType.string,
  disabled: PropType.bool,
  error: PropType.bool,
};

Textarea.defaultProps = {
  value: '',
  height: '150px',
  id: '',
  name: '',
  className: '',
  width: '100%',
  customStyles: {},
  placeholder: '',
  disabled: false,
  error: false,
};

export default Textarea;
