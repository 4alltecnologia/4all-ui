import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import theme from '../../styles/variables';
import InfoIcon from '../Icons/Info';

const Tooltip = ({
  id,
  className,
  top,
  right,
  secondary,
  children,
  backgroundColor,
  fontColor,
  width,
  buttonSize,
  customStyles,
}) => (
  <styles.Container
    id={id}
    className={`tooltip-4all ${className}`}
    buttonSize={buttonSize}
    tabIndex="0"
    customStyles={customStyles}
  >
    <styles.Button
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      secondary={secondary}
      buttonSize={buttonSize}
      className="tooltip-4all-button"
    >
      <InfoIcon
        className="tooltip-4all-icon"
        color={secondary ? theme.colors.GRAY_DARKER : backgroundColor}
        width={`${buttonSize}px`}
        height={`${buttonSize}px`}
      />
    </styles.Button>
    <styles.Tooltip
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      top={top}
      right={right}
      secondary={secondary}
      width={width}
      buttonSize={buttonSize}
      className="tooltip-4all-text"
    >
      {children}
    </styles.Tooltip>
  </styles.Container>
);

Tooltip.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  top: PropTypes.bool,
  right: PropTypes.bool,
  secondary: PropTypes.bool,
  children: PropTypes.any.isRequired,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  width: PropTypes.string,
  buttonSize: PropTypes.number,
  customStyles: PropTypes.object,
};

Tooltip.defaultProps = {
  id: '',
  className: '',
  top: true,
  right: true,
  secondary: false,
  backgroundColor: theme.colors.MAIN_COLOR,
  fontColor: theme.colors.WHITE,
  width: '250px',
  buttonSize: 20,
  customStyles: {},
};

export default Tooltip;
