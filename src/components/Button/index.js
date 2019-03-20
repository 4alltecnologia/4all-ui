import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import theme from '../../styles/variables';
import { GlobalStyle } from '../../styles/mixins';
import Loader from '../Loader';

const Button = ({
  id,
  className,
  isLoading,
  width,
  height,
  borderColor,
  bgColor,
  disabled,
  customStyles,
  onClick,
  color,
  border,
  children,
  secondary,
  loaderSize,
  loaderWidth,
  noHover,
}) => (
  <Fragment>
    <GlobalStyle />
    <styles.CustomButton
      id={id}
      className={`btn-4all ${className}`}
      color={color}
      width={width}
      height={height}
      borderColor={borderColor}
      bgColor={bgColor}
      border={border}
      isLoading={isLoading}
      disabled={disabled}
      customStyles={customStyles}
      onClick={onClick}
      secondary={secondary}
      loaderSize={loaderSize}
      loaderWidth={loaderWidth}
      noHover={noHover}
    >
      {isLoading && (
        <Loader size={loaderSize} color={color} width={loaderWidth} />
      )}
      {children}
    </styles.CustomButton>
  </Fragment>
);

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
  border: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  customStyles: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  secondary: PropTypes.bool,
  loaderSize: PropTypes.string,
  loaderWidth: PropTypes.string,
  noHover: PropTypes.bool,
};

Button.defaultProps = {
  id: null,
  className: null,
  color: '#FFF',
  width: 'auto',
  height: 'auto',
  borderColor: '',
  border: 'none',
  bgColor: theme.colors.MAIN_COLOR,
  isLoading: false,
  disabled: false,
  customStyles: null,
  secondary: false,
  loaderSize: '20px',
  loaderWidth: '3px',
  noHover: false,
};


export default Button;
