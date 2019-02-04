import { createGlobalStyle } from 'styled-components';

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

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  }
`;
