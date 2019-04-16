import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../../styles/variables';

const PhotoIcon = ({ className, color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 30 30"
    className={`photo-icon ${className}`}
  >
    <defs>
      <path
        id="photo-icon-a"
        d="M27 15.865V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12.11l3.793-3.793a1 1 0 0 1 1.414 0l3.576 3.576 9.592-7.674a1 1 0 0 1 1.265.013L27 15.865zm0 2.603l-5.013-4.177-8.78 7.025L14.89 23H26a1 1 0 0 0 1-1v-3.532zm2-.46V22a3 3 0 0 1-3 3H14.717a1.005 1.005 0 0 1-.434 0H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3V18.008zM3.263 22.675c.182.2.445.325.737.325h8.062L7.5 18.438l-4.237 4.237zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="photo-icon-b" fill="#fff">
        <use xlinkHref="#photo-icon-a" />
      </mask>
      <use fill="#979797" fillRule="nonzero" xlinkHref="#photo-icon-a" />
      <g fill={color} mask="url(#photo-icon-b)">
        <path d="M0 0h30v30H0z" />
      </g>
    </g>
  </svg>
);

PhotoIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};

PhotoIcon.defaultProps = {
  color: theme.colors.GRAY_MEDIUM,
  size: '30px',
  className: '',
};

export default PhotoIcon;
