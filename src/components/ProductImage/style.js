import styled, { css } from 'styled-components';
import theme from '../../styles/variables';
import { flexPosition } from '../../styles/mixins';

const sharedStyles = (size, backgroundColor, customStyles) => css`
  background-color: ${backgroundColor};
  border-radius: ${theme.borders.RADIUS_1};
  height: ${size};
  width: ${size};

  ${customStyles}
`;

export const Image = styled.img`
  display: block;
  ${({ size, backgroundColor, customStyles }) => sharedStyles(size, backgroundColor, customStyles)}
`;

export const EmptyImage = styled.div`
  ${flexPosition({ align: 'center', direction: 'column', justify: 'center' })}
  ${({ size, backgroundColor, customStyles }) => sharedStyles(size, backgroundColor, customStyles)}
`;

export const Text = styled.p`
  color: ${({ fontColor }) => fontColor};
  font-size: 10px;
  line-height: 1;
  margin: 3px 0 0;
`;
