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
    box-sizing: border-box;
  }

  @keyframes highlight {
    0% {
      box-shadow: 0px 0px 0px 0px rgba(0,0,0, 0.2);
    }
    20% {
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.4);
    }
    100% {
      box-shadow: 0px 0px 0px 0px rgba(0,0,0, 0.2);
    }
  }
`;
