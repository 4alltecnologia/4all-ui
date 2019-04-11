import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../../styles/variables';

const SearchIcon = ({ size, color, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 30 30"
    className={`search-icon ${className}`}
  >
    <defs>
      <path
        id="search-icon-a"
        d="M11.18 20.097l-2.603 1.735a1 1 0 1 1-1.11-1.664l2.462-1.642a7 7 0 1 1 1.25 1.57zM15.977 20a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="search-icon-b" fill="#fff">
        <use xlinkHref="#search-icon-a" />
      </mask>
      <use fill="#FFF" fillRule="nonzero" xlinkHref="#search-icon-a" />
      <g fill={color} mask="url(#search-icon-b)">
        <path d="M0 0h30v30H0z" />
      </g>
    </g>
  </svg>
);

SearchIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

SearchIcon.defaultProps = {
  size: '30px',
  color: theme.colors.MAIN_COLOR,
  className: '',
};

export default SearchIcon;
