import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../../styles/variables';

const PhotoIcon = ({ className, color, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={`photo-icon ${className}`}
  >
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g id="icon/camera/white" stroke={color} strokeWidth="1.67">
        <path
          d="M23.125,15.4166667 C23.125,18.4075958 20.6992624,20.8333333 17.7083333,20.8333333 C14.7167103,20.8333333 12.2916667,18.4079852 12.2916667,15.4166667 C12.2916667,12.4246542 14.7163209,10 17.7083333,10 C20.6996518,10 23.125,12.4250436 23.125,15.4166667 Z M8.33333333,12.4166667 C8.33333333,13.4748031 7.47480311,14.3333333 6.41666667,14.3333333 C5.3578534,14.3333333 4.5,13.4750848 4.5,12.4166667 C4.5,11.3575719 5.35757189,10.5 6.41666667,10.5 C7.47508479,10.5 8.33333333,11.3578534 8.33333333,12.4166667 Z"
          id="Combined-Shape"
          fillRule="nonzero"
        />
        <path
          d="M6,8 C6.68517889,8 7.37035779,8 8.05553668,8 C12.8619226,8 14.1898027,5.55638587 17.8298234,5.55638587 C21.469844,5.55638587 21.3931299,7.28347365 24.9913383,8 C25.1302823,8.02766849 25.2703809,8.0512861 25.4116341,8.07085283 L25.4116344,8.07085053 C26.8952648,8.27636647 28,9.54468086 28,11.0424779 L28,21 C28,22.6568542 26.6568542,24 25,24 L5,24 C3.34314575,24 2,22.6568542 2,21 L2,12 C2,9.790861 3.790861,8 6,8 Z"
          id="Rectangle"
        />
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
