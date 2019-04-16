import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../../../styles/sharedComponents/tabs';

const NavTab = ({
  id,
  className,
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
}) => (
  <styles.CustomNavLink
    id={id}
    className={className}
    exact={!!exact}
    activeClassName="active"
    to={path}
    customstyles={customStyles || undefined}
    activeStyle={activeStyle}
    hoverstyle={hoverStyle || undefined}
    width={width}
    height={height}
    hovercolor={hoverColor || undefined}
    activebordercolor={activeBorderColor || undefined}
    nooutline={noOutline || undefined}
  >
    {children}
  </styles.CustomNavLink>
);

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
  id: PropTypes.string,
  className: PropTypes.string,
};

NavTab.defaultProps = {
  customStyles: {},
  path: null,
  exact: false,
  activeStyle: null,
  hoverStyle: null,
  width: null,
  height: null,
  hoverColor: null,
  activeBorderColor: null,
  noOutline: false,
  id: '',
  className: '',
};

export default NavTab;
