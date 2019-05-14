import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import theme from '../../styles/variables';
import Loader from '../Loader';

const Button = ({
  id,
  className,
  isLoading,
  type,
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
  link,
  tabIndex,
}) => (
  <styles.CustomButton
    id={id}
    className={`btn-4all ${className}`}
    color={color}
    type={type}
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
    link={link}
    tabIndex={tabIndex}
  >
    {isLoading && (
      <Loader size={loaderSize} color={color} width={loaderWidth} />
    )}
    {children}
  </styles.CustomButton>
);

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
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
  link: PropTypes.bool,
  tabIndex: PropTypes.string,
};

Button.defaultProps = {
  id: null,
  className: null,
  color: '#FFF',
  type: 'button',
  width: 'auto',
  height: 'auto',
  borderColor: '',
  border: `1px solid ${theme.colors.MAIN_COLOR}`,
  bgColor: theme.colors.MAIN_COLOR,
  isLoading: false,
  disabled: false,
  customStyles: {},
  secondary: false,
  loaderSize: '20px',
  loaderWidth: '3px',
  noHover: false,
  link: false,
  tabIndex: '0',
};

export default Button;
