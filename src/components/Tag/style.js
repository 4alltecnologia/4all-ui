import styled, { css } from 'styled-components';
import { fontStyle, flexPosition, globalStyle } from '../../styles/mixins';
import theme from '../../styles/variables';
import { Icon } from '../Icons/Close';

const errorTag = css`
  color: ${theme.colors.GRAY_LIGHT};
  background-color: ${theme.colors.DANGER_COLOR};
  border-color: ${theme.colors.DANGER_COLOR};
`;

const secondaryTag = css`
  color: ${theme.colors.GRAY_DARKER};
  background-color: transparent;
  border-color: ${theme.colors.GRAY_LIGHT_2};

  &:hover {
    background-color: transparent;
  }
`;

const disabledStyle = css`
  background-color: ${theme.colors.GRAY_LIGHT_2};
  border-color: ${theme.colors.GRAY_LIGHT_2};
  color: ${theme.colors.GRAY_MEDIUM_3};

  &:hover {
    background-color: ${theme.colors.GRAY_LIGHT_2};
  }
`;

export const CustomTag = styled.div`
  ${globalStyle()}
  background-color: ${({ bgColor }) => bgColor};
  border: ${({ border }) => border};
  border-radius: 20px;
  color: ${({ color }) => color || theme.colors.WHITE};
  ${flexPosition({ align: 'center', justify: 'center' })}
  ${fontStyle(
    ({ color }) => color,
    theme.fontSizes.SIZE_7,
    theme.fontWeights.SEMIBOLD,
  )}
  height: ${({ height }) => height || 'auto'};
  line-height: 17px;
  margin-right: 10px;
  margin-bottom: 10px;
  min-width: 50px;
  padding: ${({ removeTag }) => (removeTag ? '0 5px 0 15px' : '3px 15px')};
  position: relative;
  width: ${({ width }) => width || 'auto'};

  &:hover {
    ${({ hoverStyle }) => hoverStyle};
  }

  &:last-child {
    margin-right: 0;
  }

  ${Icon} {
    flex-shrink: 0;
    margin: -1px 0 -1px 10px;
  }
  
  ${({ removeTag }) => (removeTag ? 'justify-content: space-between' : {})}
  ${({ error }) => (error ? errorTag : {})};
  ${({ secondary }) => (secondary ? secondaryTag : {})};
  ${({ disabled }) => (disabled ? disabledStyle : {})};
  ${({ customStyles }) => customStyles};
`;
