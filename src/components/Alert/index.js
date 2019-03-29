import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import theme from '../../styles/variables';
import AlertIcon from '../Icons/Alert';
import { GlobalStyle } from '../../styles/mixins';

const Alert = ({
  id,
  className,
  fontColor,
  backgroundColor,
  iconColor,
  secondary,
  customStyles,
  children,
  width,
}) => (
  <Fragment>
    <styles.Alert
      id={id}
      className={`alert ${className}`}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      customStyles={customStyles}
      secondary={secondary}
      width={width}
    >
      <AlertIcon
        className="alert-icon"
        color={secondary ? theme.colors.DANGER_COLOR : iconColor}
      />

      {children}
    </styles.Alert>
    <GlobalStyle />
  </Fragment>
);

Alert.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  iconColor: PropTypes.string,
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
  secondary: false,
  customStyles: {},
  width: '300px',
};

export default Alert;
