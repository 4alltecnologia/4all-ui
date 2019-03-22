
import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../../../styles/sharedComponents/tabs';

const NavTab = ({
  children,
  customStyles,
  path,
  exact,
  activeStyle,
  hoverStyle,
  width,
  height,
  hoverColor,
  activeBorderColor,
  noOutline,
}) => {
  return (
    <styles.CustomNavLink
      exact={!!exact}
      activeClassName="active"
      to={path}
      customStyles={customStyles}
      activeStyle={activeStyle}
      hoverStyle={hoverStyle}
      width={width}
      height={height}
      hoverColor={hoverColor}
      activeBorderColor={activeBorderColor}
      noOutline={noOutline}
    >
      {children}
    </styles.CustomNavLink>
  );
};

NavTab.propTypes = {
  customStyles: PropTypes.object,
  children: PropTypes.any.isRequired,
  path: PropTypes.string,
  exact: PropTypes.bool,
  activeStyle: PropTypes.object,
  hoverStyle: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  hoverColor: PropTypes.string,
  activeBorderColor: PropTypes.string,
  noOutline: PropTypes.bool,
};

NavTab.defaultProps = {
  customStyles: null,
  path: null,
  exact: false,
  activeStyle: null,
  hoverStyle: null,
  width: null,
  height: null,
  hoverColor: null,
  activeBorderColor: null,
  noOutline: false,
};

export default NavTab;
