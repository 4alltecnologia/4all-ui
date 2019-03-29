import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/variables';

const IconCheck = ({ size, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 30 30">
      <path
        fill={color}
        fillRule="nonzero"
        d="M22.293 10a1 1 0 0 1 0 1.414l-8.94 8.94a1 1 0 0 1-1.415-.002l-3.376-3.39a1 1 0 1 1 1.417-1.411l2.669 2.68L20.878 10a1 1 0 0 1 1.415 0z"
      />
    </svg>
  );
};

IconCheck.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

IconCheck.defaultProps = {
  size: '22px',
  color: styles.colors.MAIN_COLOR,
};

export default IconCheck;
