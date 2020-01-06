import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import theme from '../../styles/variables';
import AlertIcon from '../Icons/Alert';

const Alert = ({
  id,
  className,
  fontColor,
  backgroundColor,
  iconColor,
  iconSize,
  secondary,
  customStyles,
  children,
  width,
}) => (
  <styles.Alert
    id={id}
    className={`alert-4all ${className}`}
    backgroundColor={backgroundColor}
    fontColor={fontColor}
    customStyles={customStyles}
    secondary={secondary}
    width={width}
  >
    <AlertIcon
      size={iconSize}
      className="alert-icon"
      color={secondary ? theme.colors.DANGER_COLOR : iconColor}
    />

    {children}
  </styles.Alert>
);

Alert.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.string,
  secondary: PropTypes.bool,
  customStyles: PropTypes.object,
  children: PropTypes.any.isRequired,
  width: PropTypes.string,
};

Alert.defaultProps = {
  id: '',
  className: '',
  fontColor: theme.colors.WHITE,
  backgroundColor: theme.colors.DANGER_COLOR,
  iconColor: theme.colors.WHITE,
  iconSize: '30px',
  secondary: false,
  customStyles: {},
  width: '250px',
};

export default Alert;
