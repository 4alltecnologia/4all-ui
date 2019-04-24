import styled from 'styled-components';
import { fontStyle, flexPosition, globalStyle } from '../../styles/mixins';
import theme from '../../styles/variables';

export const Input = styled.input`
  border: 1px solid ${({ error }) => error ? theme.colors.DANGER_COLOR : theme.colors.GRAY_LIGHT_2};
  border-radius: 3px;
  ${fontStyle(
    theme.colors.GRAY_DARKER,
    theme.fontSizes.SIZE_7,
    theme.fontWeights.SEMIBOLD,
  )};
  height: 40px;
  max-width: 100%;
  padding: 10px 15px;
  ${({ hasIcon }) => hasIcon && 'padding-right: 47px;'}
  width: 100%;

  ${({ customStyles }) => customStyles}

  ::placeholder {
    color: ${theme.colors.GRAY_MEDIUM}
  }

  :disabled {
    background-color: ${theme.colors.GRAY_LIGHT_2};
  }
`;

export const Container = styled.div`
  ${globalStyle()}
  position: relative;
  width: ${({ width }) => width};
`;

export const Icon = styled.img`
  display: block;
`;

export const IconContainer = styled.div`
  ${flexPosition({ align: 'center', justify: 'center' })}
  height: 40px;
  position: absolute;
  right: 0;
  top: 0;
  width: 47px;
`;
