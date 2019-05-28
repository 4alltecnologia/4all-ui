import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColSize } from '../../styles/mixins';

const BoxContainer = styled.div`
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
  width: ${({ size }) => (size ? getColSize(size) : '100%')};
  margin-right: ${({ colSpacing }) => (colSpacing ? `${colSpacing}px` : '0px')};
  ${({ customStyles }) => customStyles}
`;

const Box = ({ colSize, colSpacing, customStyles, children }) => {
  return (
    <BoxContainer size={colSize} colSpacing={colSpacing} customStyles={customStyles}>
      {children}
    </BoxContainer>
  );
};

Box.propTypes = {
  colSize: PropTypes.number,
  colSpacing: PropTypes.number,
  customStyles: PropTypes.object,
  children: PropTypes.any.isRequired,
};

Box.defaultProps = {
  colSize: 12,
  colSpacing: 0,
  customStyles: {},
};

export default Box;
