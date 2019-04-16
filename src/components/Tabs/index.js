import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../../styles/sharedComponents/tabs';
import { GlobalStyle } from '../../styles/mixins';
import Tab from './Tab';

const Tabs = ({ children, customStyles, secondary }) => (
  <styles.TabsContainer customStyles={customStyles} secondary={secondary}>
    <GlobalStyle />
    {children}
  </styles.TabsContainer>
);

Tabs.propTypes = {
  customStyles: PropTypes.object,
  children: PropTypes.any.isRequired,
  secondary: PropTypes.bool,
};

Tabs.defaultProps = {
  customStyles: {},
  secondary: false,
};

export { Tabs, Tab };
