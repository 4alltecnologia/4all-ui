import styled, { css } from 'styled-components'
import { flexPosition, fontStyle } from '../../styles/mixins';
import theme from '../../styles/variables';
import { lightenDarkenColor } from '../../helpers/helpers';

const secondaryButton = css`
  ${fontStyle(theme.colors.GRAY_DARKER, '14px', theme.fontWeights.BOLD)}
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
  color: ${({ color }) => color || '#FFF'};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-weight: ${({ fontWeight }) => fontWeight || theme.fontWeights.BOLD};
  min-width: 50px;
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  background-color: ${({ bgColor }) => bgColor || theme.colors.MAIN_COLOR};
  border: ${({ border }) => border || 'none'};
  border-radius: ${theme.borders.RADIUS_1};
  padding: 15px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  i {
    margin-right: ${({ isLoading }) => isLoading ? '10px' : '0px'};
  }
  ${({ noHover }) => !noHover ? hoverButton : null}
  ${({ secondary }) => secondary ? secondaryButton : null};
  ${({ disabled }) => disabled ? `
    border: none;
    background-color: ${theme.colors.GRAY_LIGHT_2};
    &:hover {
      background-color: ${theme.colors.GRAY_LIGHT_2};
    }
    color: #fff;
    ` : null};
  ${({ customStyles }) => customStyles};
`;
