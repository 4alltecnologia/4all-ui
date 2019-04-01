import styled, { css } from 'styled-components';
import { flexPosition, fontStyle } from '../../styles/mixins';
import theme from '../../styles/variables';
import { lightenDarkenColor } from '../../helpers/helpers';

const secondaryButton = css`
  ${fontStyle(
    theme.colors.GRAY_DARKER,
    theme.fontSizes.SIZE_6,
    theme.fontWeights.BOLD,
  )}
  border: 1px solid ${theme.colors.GRAY_LIGHT_2};
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const hoverButton = css`
  &:hover {
    background-color: ${({ bgColor }) => bgColor === '#000000'
    ? lightenDarkenColor(bgColor, 30)
    : lightenDarkenColor(bgColor, -30)};
  }
`;

export const CustomButton = styled.button`
  position: relative;
  ${flexPosition({ align: 'center', justify: 'center' })}
  color: ${({ color }) => color || theme.colors.WHITE};
  font-size: ${({ fontSize }) => fontSize || theme.fontSizes.SIZE_6};
  font-weight: ${({ fontWeight }) => fontWeight || theme.fontWeights.BOLD};
  min-width: 40px;
  min-height: 40px;
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  background-color: ${({ bgColor }) => bgColor || theme.colors.MAIN_COLOR};
  border: ${({ border }) => border || 'none'};
  border-radius: ${theme.borders.RADIUS_1};
  padding: 0 15px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease, width 0.3s ease, height 0.3s ease;
  i {
    margin-right: ${({ isLoading }) => isLoading ? '10px' : '0px'};
  }
  ${({ noHover }) => !noHover ? hoverButton : null}
  ${({ secondary }) => secondary ? secondaryButton : null};
  ${({ disabled }) => disabled ? `
    border: none;
    background-color: ${theme.colors.GRAY_LIGHT_2};
    color: ${theme.colors.WHITE};

    &:hover {
      background-color: ${theme.colors.GRAY_LIGHT_2};
    }
    ` : null};
  ${({ customStyles }) => customStyles};
`;
