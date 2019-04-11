import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';

const Radio = ({
  id,
  name,
  className,
  checked,
  onChange,
  value,
  label,
  desc,
  customDescStyles,
  disabled,
}) => {
  const idFormatted = `radio-${id || value}`;

  return (
    <styles.RadioContainer
      className={`radio radio-${checked ? 'checked' : 'unchecked'} ${className}`}
    >
      <styles.LabelContainer htmlFor={idFormatted}>
        <styles.InputContainer>
          <styles.RadioInput
            id={idFormatted}
            type="radio"
            value={value}
            name={name}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
          <styles.CustomRadio checked={checked} disabled={disabled} />
        </styles.InputContainer>
        <styles.DescContainer customDescStyles={customDescStyles}>
          <styles.Label className="radio-label">{label}</styles.Label>
          <styles.Desc className="radio-description">{desc}</styles.Desc>
        </styles.DescContainer>
      </styles.LabelContainer>
    </styles.RadioContainer>
  );
};

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  desc: PropTypes.string,
  customDescStyles: PropTypes.object,
  disabled: PropTypes.bool,
};

Radio.defaultProps = {
  id: '',
  name: '',
  className: '',
  checked: false,
  value: '',
  label: '',
  desc: '',
  customDescStyles: {},
  disabled: false,
};

export default Radio;
