import styled from 'styled-components';
import theme from '../../styles/variables';
import { fontStyle, flexPosition, globalStyle } from '../../styles/mixins';

export const Alert = styled.div`
  ${globalStyle()}
  background-color: ${({ secondary, backgroundColor }) => secondary ? theme.colors.WHITE : backgroundColor};
  border-radius: ${theme.borders.RADIUS_1};
  ${flexPosition({ align: 'center' })}
  ${({ secondary, fontColor }) => fontStyle(
    secondary ? theme.colors.DANGER_COLOR : fontColor,
    theme.fontSizes.SIZE_7,
    theme.fontWeights.SEMIBOLD,
  )}
  line-height: 17px;
  padding: 15px 20px 15px 15px;
  width: ${({ width }) => width};

  ${({ customStyles }) => customStyles}

  > svg {
    flex-shrink: 0;
    margin-right: 15px;
  }
`;
