import styled, { css } from 'styled-components';
import theme from '../../styles/variables';
import { flexPosition, globalStyle } from '../../styles/mixins';

const sharedStyles = (size, backgroundColor, customStyles) => css`
  ${globalStyle()}
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
  font-size: ${({ fontSize }) => fontSize};
  line-height: 1;
  margin: 0;
  padding: 0 5px;
  text-align: center;
`;
