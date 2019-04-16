import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Icon = styled.svg`
  cursor: pointer;
`;

const CloseIcon = ({
  size,
  color,
  className,
  onClick,
}) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 30 30"
    className={`close-icon ${className}`}
    onClick={onClick}
  >
    <defs>
      <path
        d="M15.9773624,14.0226376 L21.0226376,14.0226376 C21.56242,14.0226376 22,14.4602177 22,15 C22,15.5397823 21.56242,15.9773624 21.0226376,15.9773624 L15.9773624,15.9773624 L15.9773624,21.0226376 C15.9773624,21.56242 15.5397823,22 15,22 C14.4602177,22 14.0226376,21.56242 14.0226376,21.0226376 L14.0226376,15.9773624 L8.97736239,15.9773624 C8.43758005,15.9773624 8,15.5397823 8,15 C8,14.4602177 8.43758005,14.0226376 8.97736239,14.0226376 L14.0226376,14.0226376 L14.0226376,8.97736239 C14.0226376,8.43758005 14.4602177,8 15,8 C15.5397823,8 15.9773624,8.43758005 15.9773624,8.97736239 L15.9773624,14.0226376 Z"
        id="close-path-1"
      />
    </defs>
    <g
      id="icon/close/"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <mask id="close-mask-2" fill="white">
        <use xlinkHref="#close-path-1" />
      </mask>
      <use
        id="close"
        fill={color}
        fillRule="nonzero"
        transform="translate(15.000000, 15.000000) rotate(-315.000000) translate(-15.000000, -15.000000) "
        xlinkHref="#close-path-1"
      />
    </g>
  </Icon>
);

CloseIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

CloseIcon.defaultProps = {
  size: '25px',
  color: '#FFF',
  className: '',
  onClick: null,
};

export default CloseIcon;
