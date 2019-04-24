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
  * {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }
`;
