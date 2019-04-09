
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/variables';

const IconArrowPagination = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size || '30px'}
      height={size || '30px'}
      viewBox="0 0 30 30"
    >
      <defs>
        <path
          id="arrowPagination"
          d="M17.32 16H10.5a1 1 0 1 1 0-2h6.829l-1.59-1.848a1 1 0 0 1 1.517-1.304l3.002 3.49a1 1 0 0 1 .002 1.303l-3.003 3.51a1 1 0 1 1-1.52-1.301L17.32 16z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="arrowPaginationB" fill="#fff">
          <use xlinkHref="#arrowPagination" />
        </mask>
        <use fill={color} fillRule="nonzero" xlinkHref="#arrowPagination" />
        <g fill={color} mask="url(#arrowPaginationB)">
          <path d="M0 0h30v30H0z" />
        </g>
      </g>
    </svg>
  );
};

IconArrowPagination.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

IconArrowPagination.defaultProps = {
  size: '30px',
  color: styles.colors.MAIN_COLOR,
};

export default IconArrowPagination;
