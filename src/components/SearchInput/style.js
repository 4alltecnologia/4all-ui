import styled from 'styled-components';
import DebounceInput from 'react-debounce-input';
import { fontStyle, flexPosition, globalStyle } from '../../styles/mixins';
import theme from '../../styles/variables';

export const Input = styled(DebounceInput)`
  border: 1px solid
    ${({ error }) => (error ? theme.colors.DANGER_COLOR : theme.colors.GRAY_LIGHT_2)};
  border-radius: 3px;
  ${fontStyle(theme.colors.GRAY_DARKER, theme.fontSizes.SIZE_7, theme.fontWeights.SEMIBOLD)};
  height: 40px;
  max-width: 100%;
  padding: 10px 15px;
  padding-right: 47px;
  width: 100%;

  ${({ customStyles }) => customStyles}

  ::placeholder {
    color: ${theme.colors.GRAY_MEDIUM};
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

export const IconContainer = styled.button`
  ${flexPosition({ align: 'center', justify: 'center' })}
  height: 40px;
  position: absolute;
  right: 0;
  top: 0;
  width: 47px;
  outline: none;
  background-color: transparent;
  border: none;
`;

export const BtnAction = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;