import { css } from 'styled-components';
import styles from './variables';

export const flexPosition = ({ align = '', justify = '', direction = '' }) => `
  display: flex;
  ${align && `align-items: ${align};`}
  ${justify && `justify-content: ${justify};`}
  ${direction && `flex-direction: ${direction};`}
`;

export const fontStyle = (color, fontSize, fontWeight) => `
  ${color && `color: ${color};`}
  ${fontSize && `font-size: ${fontSize};`}
  ${fontWeight && `font-weight: ${fontWeight};`}
`;

export const customScrollbar = () => css`
  &::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: ${styles.colors.GRAY_LIGHT};
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${styles.colors.GRAY_LIGHT_2};
  }
`;

export const globalStyle = () => css`
  &,
  * {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    text-decoration: none;
  }
`;

export const getColSize = (colSize = 1) => {
  let col = colSize < 0 ? 1 : colSize;
  col = colSize > 12 ? 12 : colSize;
  const spacing = colSize === 1 ? styles.grid.COL_SPACING : styles.grid.COL_SPACING * (colSize - 1);
  return `${col * styles.grid.COL_SIZE + spacing}px`;
};
