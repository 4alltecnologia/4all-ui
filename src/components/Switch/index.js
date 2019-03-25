import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';

const Switch = ({
  id,
  className,
  checked,
  disabled,
  onChange,
  customStyles,
  children,
}) => {
  return (
    <Fragment>
      <styles.Switch>
        <styles.SwitchInput
          id={id}
          className={`switch-4all ${className}`}
          checked={checked}
          type="checkbox"
          onChange={onChange}
          disabled={disabled}
          customStyles={customStyles}
        />
        <styles.Slider checked={checked} />
      </styles.Switch>
      <styles.SwitchText>
        {children}
      </styles.SwitchText>
    </Fragment>
  );
};

Switch.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  customStyles: PropTypes.object,
  onChange: PropTypes.func,
  children: PropTypes.any,
};

Switch.defaultProps = {
  id: null,
  className: '',
  checked: false,
  disabled: false,
  onChange: null,
  customStyles: null,
  children: '',
};


export default Switch;
