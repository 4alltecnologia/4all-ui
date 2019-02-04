import styled, { css } from 'styled-components'
import { flexPosition, fontStyle } from '../../styles/mixins';
import { FONT_WEIGHT_BOLD, MAIN_COLOR, BORDER_RADIUS_1, GRAY_MEDIUM_2, GRAY_DARKER, GRAY_MEDIUM } from '../../styles/variables';
import { lightenDarkenColor } from '../../helpers/helpers';

const secondaryButton = css`
  ${fontStyle(GRAY_DARKER, '14px', FONT_WEIGHT_BOLD)}
  border: 1px solid ${GRAY_MEDIUM};
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

export const CustomButton = styled.button`
  position: relative;
  ${flexPosition({ align: 'center', justify: 'center' })}
  color: ${({ color }) => color || '#FFF'};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-weight: ${({ fontWeight }) => fontWeight || FONT_WEIGHT_BOLD};
  min-width: 50px;
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  background-color: ${({ bgColor }) => bgColor || MAIN_COLOR};
  border: ${({ border }) => border || 'none'};
  border-radius: ${BORDER_RADIUS_1};
  padding: 15px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  i {
    margin-right: ${({ isLoading }) => isLoading ? '10px' : '0px'};
  }
  &:hover {
    background-color: ${({ bgColor }) => bgColor === '#000000'
    ? lightenDarkenColor(bgColor, 30)
    : lightenDarkenColor(bgColor, -30)};
  }
  ${({ customStyles }) => customStyles};
  ${({ secondary }) => secondary ? secondaryButton : null};
  ${({ disabled }) => disabled ? `
    border: none;
    background-color: ${GRAY_MEDIUM_2};
    &:hover {
      background-color: ${GRAY_MEDIUM_2};
    }
    color: #fff;
  ` : null};
`;
