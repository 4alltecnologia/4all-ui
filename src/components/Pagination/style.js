import styled, { css } from 'styled-components';
import { flexPosition, fontStyle, globalStyle } from '../../styles/mixins';
import styles from '../../styles/variables';

export const PaginationItem = styled.div`
  ${({ customStyles }) => customStyles}
`;

export const PaginationContainer = styled.div`
  ${globalStyle()}

  .rc-pagination {
    ${flexPosition({ align: 'center', justify: 'flex-start' })}
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      &.rc-pagination-item {
        margin-right: ${({ itemSpacing }) => itemSpacing || '0px'};

        &:first-child {
          margin-right: 0;
        }
      }
    }
  }
`;

const arrowRightStyle = css`
  svg {
    transform: rotate(0deg);
  }
  margin-left: ${({ marginLeft }) => (marginLeft ? '10px' : '0px')};
  margin-right: 0px;
`;

const arrowDisabledStyle = css`
  visibility: hidden;
  opacity: 0;
  margin: 0;
  width: 0;
`;

export const ArrowButton = styled.div`
  display: flex;
  svg {
    transform: rotate(180deg);
  }
  cursor: pointer;
  background-color: transparent;
  height: 100%;
  border: none;
  margin-right: 20px;
  ${({ right }) => (right ? arrowRightStyle : null)}
  visibility: visible;
  opacity: 1;
  transition: all 0.2s ease;
  ${({ disabled }) => (disabled ? arrowDisabledStyle : null)}
`;

export const DotsSeparator = styled.span`
  ${fontStyle(
    styles.colors.GRAY_DARKER,
    styles.fontSizes.SIZE_7,
    styles.fontWeights.SEMIBOLD,
  )}
  cursor: pointer;
  padding: 0px 10px;
  margin-top: 8px;
`;
