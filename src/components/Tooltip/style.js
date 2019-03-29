import styled from 'styled-components';
import theme from '../../styles/variables';
import { fontStyle } from '../../styles/mixins';

export const Tooltip = styled.div`
  background-color: ${({ secondary, backgroundColor }) => secondary ? theme.colors.GRAY_DARKER : backgroundColor};
  border-radius: ${theme.borders.RADIUS_1};
  ${({ secondary, fontColor }) => fontStyle(secondary ? theme.colors.WHITE : fontColor, theme.fontSizes.SIZE_6, theme.fontWeights.NORMAL)};
  line-height: 1.5;
  opacity: 0;
  outline: none;
  padding: 10px 15px;
  position: absolute;
  transition: opacity 300ms ease;
  width: ${({ width }) => width};

  ${({ top, right, buttonSize }) => {
    const gutter = 10;
    const size = `${buttonSize + gutter}px`;

    return `
      ${top ? 'bottom' : 'top'}: ${size};
      ${right ? 'left' : 'right'}: 0;
    `;
  }}
`;

export const Container = styled.div`
  display: block;
  ${({ buttonSize }) => `
    height: ${buttonSize}px;
    width: ${buttonSize}px;
  `}
  position: relative;
  overflow: hidden;

  &:focus,
  &:hover {
    overflow: initial;

    & > ${Tooltip} {
      opacity: 1;
    }
  }

  ${({ customStyles }) => customStyles}
`;

export const Button = styled.div`
  background-color: transparent;
  border: none;
  border-radius: ${theme.borders.RADIUS_ROUND};
  ${({ secondary, fontColor }) => fontStyle(secondary ? theme.colors.GRAY_DARKER : fontColor, theme.fontSizes.SIZE_7, theme.fontWeights.NORMAL)};
  ${({ buttonSize }) => `
    height: ${buttonSize}px;
    width: ${buttonSize}px;
  `}
  padding: 0;

  > svg {
    display: block;
  }
`;
