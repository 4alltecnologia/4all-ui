import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../../../styles/sharedComponents/tabs';

const Tab = ({
  id,
  className,
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
}) => (
  <styles.CustomButtonTab
    key={id}
    id={id}
    className={active ? `active ${className}` : className}
    customStyles={customStyles}
    activeStyle={activeStyle}
    hoverstyle={hoverStyle || undefined}
    width={width}
    height={height}
    hovercolor={hoverColor || undefined}
    activebordercolor={activeBorderColor || undefined}
    onClick={onClick}
    nooutline={noOutline || undefined}
  >
    {children}
  </styles.CustomButtonTab>
);

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
  id: PropTypes.string,
  className: PropTypes.string,
};

Tab.defaultProps = {
  id: '',
  className: '',
  customStyles: {},
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
