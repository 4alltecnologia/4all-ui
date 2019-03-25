import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';

const Switch = ({
  id,
  className,
  checked,
  disabled,
  onChange,
  onClick,
  customStyles,
}) => {
  return (
    <styles.Switch>
      <styles.SwitchInput
        id={id}
        className={`switch-4all ${className}`}
        checked={checked}
        type="checkbox"
        onChange={onChange}
        onClick={onClick}
        disabled={disabled}
        customStyles={customStyles}
      />
      <styles.Slider checked={checked} />
    </styles.Switch>
  );
};

Switch.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  customStyles: PropTypes.object,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

Switch.defaultProps = {
  id: null,
  className: '',
  checked: false,
  disabled: false,
  onChange: null,
  onClick: null,
  customStyles: null,
};


export default Switch;
