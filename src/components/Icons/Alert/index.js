import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../../styles/variables';

const AlertIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 90 90"
  >
    <defs>
      <path
        id="alert-icon-a"
        d="M45 79.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm-3-47.25c0-1.243 1.343-2.25 3-2.25s3 1.007 3 2.25v31.5c0 1.243-1.343 2.25-3 2.25s-3-1.007-3-2.25v-31.5zm47.683 53.408C90.681 87.653 89.23 90 87 90H3C.77 90-.68 87.653.317 85.658l42-84c1.105-2.21 4.26-2.21 5.366 0l42 84zM82.146 84L45 9.708 7.854 84h74.292z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="alert-icon-b" fill={theme.colors.WHITE}>
        <use xlinkHref="#alert-icon-a" />
      </mask>
      <use fill={theme.colors.GRAY_MEDIUM} xlinkHref="#alert-icon-a" />
      <g fill={color} mask="url(#alert-icon-b)">
        <path d="M0 0h90v90H0z" />
      </g>
    </g>
  </svg>
);

AlertIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

AlertIcon.defaultProps = {
  size: '30px',
  color: theme.colors.DANGER_COLOR,
};

export default AlertIcon;
