import styled, { css } from 'styled-components';
import { flexPosition } from '../../styles/mixins';

export const PaginationList = styled.ul`
  ${flexPosition({ align: 'center', justify: 'flex-start' })}
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const PaginationItem = styled.li`
  margin-right: ${({ itemSpacing }) => itemSpacing || '5px'};
  &:last-of-type {
    margin-right: 0px;
  }
  ${({ customStyles }) => customStyles}
`;

export const PaginationContainer = styled.div`
  ${flexPosition({ align: 'center', justify: 'flex-start' })}
`;

const arrowRightStyle = css`
  svg {
    transform: rotate(-90deg);
  }
  margin-left: 20px;
  margin-right: 0px;
`;

export const ArrowButton = styled.button`
svg {
  transform: rotate(90deg);
}
  cursor: pointer;
  background-color: transparent;
  height: 100%;
  border: none;
  display: flex;
  margin-right: 20px;
  ${({ right }) => right ? arrowRightStyle : null}
`;
