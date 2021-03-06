import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../../styles/sharedComponents/tabs';
import NavTab from './NavTab';

const NavTabs = ({ children, customStyles, secondary }) => (
  <styles.TabsContainer customStyles={customStyles} secondary={secondary}>
    {children}
  </styles.TabsContainer>
);

NavTabs.propTypes = {
  customStyles: PropTypes.object,
  children: PropTypes.any.isRequired,
  secondary: PropTypes.bool,
};

NavTabs.defaultProps = {
  customStyles: {},
  secondary: false,
};

export { NavTabs, NavTab };
