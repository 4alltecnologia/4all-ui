import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import theme from '../../styles/variables';

const Loader = ({ size, color, width }) => (
  <styles.Loading color={color} size={size} width={width} />
);

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
};

Loader.defaultProps = {
  size: '40px',
  color: theme.colors.MAIN_COLOR,
  width: '6px',
};

export default Loader;
