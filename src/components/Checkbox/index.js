import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';

const Checkbox = ({
  id,
  label,
  name,
  checked,
  mixed,
  className,
  disabled,
  customStyles,
  onChange,
}) => {
  const formattedId = `checkbox-${id || name}`;

  return (
    <styles.Container>
      <styles.CheckboxContainer
        htmlFor={formattedId}
        className={`checkbox-4all checkbox--${!checked ? 'unchecked' : 'checked'} ${className}`}
        customStyles={customStyles}
        disabled={disabled}
        mixed={mixed}
        checked={checked}
      >
        <styles.InputContainer>
          <styles.Input
            id={formattedId}
            name={name}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
          <styles.Checkbox className="checkbox-check" />
        </styles.InputContainer>
        <styles.Label className="checkbox-label">{label}</styles.Label>
      </styles.CheckboxContainer>
    </styles.Container>
  );
};

Checkbox.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  checked: PropTypes.bool,
  mixed: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  customStyles: PropTypes.object,
};

Checkbox.defaultProps = {
  id: '',
  name: '',
  checked: false,
  mixed: false,
  className: '',
  label: '',
  disabled: false,
  customStyles: {},
};

export default Checkbox;
