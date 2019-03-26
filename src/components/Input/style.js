import styled from 'styled-components';
import { fontStyle } from '../../styles/mixins';
import theme from '../../styles/variables';

export const Input = styled.input`
  border: 1px solid ${({ error }) => error ? theme.colors.DANGER_COLOR : theme.colors.GRAY_LIGHT_2};
  border-radius: 3px;
  ${fontStyle(
    theme.colors.GRAY_DARKER,
    theme.fontSizes.SIZE_6,
    theme.fontWeights.SEMIBOLD,
  )};
  height: 40px;
  max-width: 100%;
  padding: 10px;
  ${({ hasIcon }) => hasIcon && 'padding-right: 40px;'}
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
  position: relative;
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 7px;
`;
