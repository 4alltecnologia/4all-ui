import styled, { css } from 'styled-components';
import { fontStyle, flexPosition } from '../../styles/mixins';
import theme from '../../styles/variables';

const errorTag = css`
  ${fontStyle(theme.colors.GRAY_LIGHT, theme.fontSizes.SIZE_6, theme.fontWeights.BOLD)}
  background-color: ${theme.colors.DANGER_COLOR};
`;

const secondaryTag = css`
  ${fontStyle(theme.colors.GRAY_DARKER, theme.fontSizes.FONT_SIZE_6, theme.fontWeights.FONT_WEIGHT_BOLD)};
  border: 1px solid ${theme.colors.GRAY_LIGHT_2};
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const disabledStyle = css`
  border: none;
  cursor: not-allowed;
  background-color: ${theme.colors.GRAY_LIGHT_2};
  &:hover {
    background-color: ${theme.colors.GRAY_LIGHT_2};
  }
  color: #fff;
`;

export const CustomTag = styled.div`
  position: relative;
  ${flexPosition({ align: 'center', justify: 'center' })}
  ${fontStyle(props => props.color, theme.fontSizes.SIZE_6, theme.fontWeights.BOLD)}
  min-width: 50px;
  border-radius: 20px;
  padding: ${({ onRemoveTag }) => onRemoveTag ? '1px 15px' : '6px 25px'};
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: ${props => props.bgColor};
  color: ${({ color }) => color || '#FFF'};
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  border: ${({ border }) => border};
  &:hover {
    ${props => props.hoverStyle};
  }
  ${({ onRemoveTag }) => onRemoveTag ? 'justify-content: space-between' : null}
  ${({ customStyles }) => customStyles};
  ${({ error }) => error ? errorTag : null};
  ${({ secondary }) => secondary ? secondaryTag : null};
  ${({ disabled }) => disabled ? disabledStyle : null};
`;

export const CloseIcon = styled.img`
  margin-right: 0px;
  margin-left: 25px;
  width: 27px;
  cursor: pointer;
`;
