import styled from 'styled-components';
import theme from '../../styles/variables';
import { fontStyle, globalStyle } from '../../styles/mixins';

export const Textarea = styled.textarea`
  ${globalStyle()}
  background-color: ${theme.colors.WHITE};
  border: 1px solid ${({ error }) => error ? theme.colors.DANGER_COLOR : theme.colors.GRAY_LIGHT_2};
  border-radius: ${theme.borders.RADIUS_1};
  ${fontStyle(theme.colors.GRAY_DARKER, theme.fontSizes.SIZE_7, theme.fontWeights.SEMIBOLD)};
  line-height: 18px;
  max-width: ${({ width }) => width};
  padding: 10px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  ${({ customStyles }) => customStyles}

  :disabled {
    background-color: ${theme.colors.GRAY_LIGHT_2};
  }
`;
