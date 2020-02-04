import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../../styles/variables';

const Arrow = styled.svg`
  transform-origin: center;
  fill: #fff;
  ${props =>
    props.direction === 'right' &&
    `
    transform: rotate(0deg);
  `}
  ${props =>
    props.direction === 'left' &&
    `
    transform: rotate(-180deg);
  `}
  ${props =>
    props.direction === 'up' &&
    `
    transform: rotate(-90deg);
  `}
  ${props =>
    props.direction === 'down' &&
    `
    transform: rotate(90deg);
  `}

`;

const ArrowComponent = ({ color, size, rotate, opacity }) => {
  return (
    <Arrow
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      direction={rotate}
      color={color}
      viewBox="0 0 25 25"
    >
      <defs>
        <path
          id="arrow-icon-path"
          d="M7.38 1.04l2.502 2.909a.833.833 0 01.001 1.085L7.381 7.958a.833.833 0 11-1.266-1.083l1.318-1.542H1.75a.833.833 0 110-1.666l5.69-.001-1.324-1.54A.833.833 0 017.38 1.04z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" opacity={opacity} transform="translate(7 8)">
        <mask id="arrow-icon-mask" fill="#fff">
          <use xlinkHref="#arrow-icon-path" />
        </mask>
        <use fill={color} fillRule="nonzero" xlinkHref="#arrow-icon-path" />
        <g fill={color} mask="url(#arrow-icon-mask)">
          <path d="M-7-8h25v25H-7z" />
        </g>
      </g>
    </Arrow>
  );
};

ArrowComponent.defaultProps = {
  color: theme.colors.WHITE,
  size: '25',
  rotate: 'right',
  opacity: 1,
};

ArrowComponent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  rotate: PropTypes.string,
  opacity: PropTypes.number,
};

export default ArrowComponent;
