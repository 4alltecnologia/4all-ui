import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import { GlobalStyle } from '../../styles/mixins';

const Switch = ({
  id,
  className,
  checked,
  disabled,
  onChange,
  customStyles,
  sliderStyles,
  labelStyles,
  children,
}) => {
  return (
    <Fragment>
      <styles.Switch>
        <GlobalStyle />
        <styles.SwitchBlock>
          <styles.SwitchInput
            id={id}
            className={`switch-4all ${className}`}
            checked={checked}
            type="checkbox"
            onChange={onChange}
            disabled={disabled}
          />
          <styles.Slider
            checked={checked}
            customStyles={customStyles}
            sliderStyles={sliderStyles}
          />
        </styles.SwitchBlock>
        <styles.SwitchText labelStyles={labelStyles}>
          {children}
        </styles.SwitchText>
      </styles.Switch>
    </Fragment>
  );
};

Switch.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  customStyles: PropTypes.object,
  sliderStyles: PropTypes.object,
  labelStyles: PropTypes.object,
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
  sliderStyles: null,
  labelStyles: null,
  children: '',
};


export default Switch;
