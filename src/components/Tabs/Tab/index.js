
import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../../../styles/sharedComponents/tabs';

const Tab = ({
  children,
  customStyles,
  active,
  onClick,
  activeStyle,
  hoverStyle,
  width,
  height,
  hoverColor,
  activeBorderColor,
  noOutline,
}) => {
  return (
    <styles.CustomButtonTab
      className={active ? 'active' : ''}
      customStyles={customStyles}
      activeStyle={activeStyle}
      hoverStyle={hoverStyle}
      width={width}
      height={height}
      hoverColor={hoverColor}
      activeBorderColor={activeBorderColor}
      onClick={onClick}
      noOutline={noOutline}
    >
      {children}
    </styles.CustomButtonTab>
  );
};

Tab.propTypes = {
  customStyles: PropTypes.object,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  activeStyle: PropTypes.object,
  hoverStyle: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  hoverColor: PropTypes.string,
  activeBorderColor: PropTypes.string,
  active: PropTypes.bool,
  noOutline: PropTypes.bool,
};

Tab.defaultProps = {
  customStyles: null,
  activeStyle: null,
  hoverStyle: null,
  width: null,
  height: null,
  hoverColor: null,
  activeBorderColor: null,
  active: false,
  noOutline: false,
};

export default Tab;
