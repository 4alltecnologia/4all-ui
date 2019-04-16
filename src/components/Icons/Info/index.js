import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../../styles/variables';

const InfoIcon = ({ color, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
    viewBox="0 0 20 20"
  >
    <defs>
      <path
        id="info-icon"
        d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1zm0-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="info-icon-b" fill="#fff">
        <use xlinkHref="#info-icon" />
      </mask>
      <use fill="#979797" xlinkHref="#info-icon" />
      <g fill={color} mask="url(#info-icon-b)">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

InfoIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

InfoIcon.defaultProps = {
  color: theme.colors.MAIN_COLOR,
  width: '20px',
  height: '20px',
};

export default InfoIcon;
