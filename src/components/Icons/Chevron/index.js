import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/variables';

const IconChevron = ({ size, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 17 17">
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 6l5.5 5L14 6"
      />
    </svg>
  );
};

IconChevron.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

IconChevron.defaultProps = {
  size: '17px',
  color: styles.colors.MAIN_COLOR,
};

export default IconChevron;
