import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../../styles/variables';

const CheckIcon = ({ size, color, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 30 30"
    className={`check-icon ${className}`}
  >
    <path
      fill={color}
      fillRule="nonzero"
      d="M22.293 10a1 1 0 0 1 0 1.414l-8.94 8.94a1 1 0 0 1-1.415-.002l-3.376-3.39a1 1 0 1 1 1.417-1.411l2.669 2.68L20.878 10a1 1 0 0 1 1.415 0z"
    />
  </svg>
);

CheckIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

CheckIcon.defaultProps = {
  size: '22px',
  color: theme.colors.MAIN_COLOR,
  className: '',
};

export default CheckIcon;
