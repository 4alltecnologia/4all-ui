import styled from 'styled-components';
import theme from '../../styles/variables';
import { fontStyle, flexPosition } from '../../styles/mixins';

export const Alert = styled.div`
  background-color: ${({ secondary, backgroundColor }) => secondary ? theme.colors.WHITE : backgroundColor};
  border-radius: ${theme.borders.RADIUS_1};
  ${flexPosition({ align: 'center' })}
  ${({ secondary, fontColor }) => fontStyle(
    secondary ? theme.colors.DANGER_COLOR : fontColor,
    theme.fontSizes.SIZE_6,
    theme.fontWeights.SEMIBOLD,
  )}
  line-height: 1.5;
  padding: 15px 20px;
  width: ${({ width }) => width};

  ${({ customStyles }) => customStyles}

  > svg {
    flex-shrink: 0;
    margin-right: 20px;
  }
`;
