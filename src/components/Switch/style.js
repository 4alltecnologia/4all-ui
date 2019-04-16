import styled from 'styled-components';
import { flexPosition, fontStyle } from '../../styles/mixins';
import theme from '../../styles/variables';

export const Switch = styled.div`
  ${flexPosition({ align: 'center' })};
`;

export const SwitchBlock = styled.label`
  position: relative;
  display: inline-block;
  width: 41px;
  min-width: 41px;
  height: 24px;
  margin: 0;
`;

export const SwitchText = styled.span`
  ${fontStyle(
    theme.colors.GRAY_DARKER,
    theme.fontSizes.SIZE_7,
    theme.fontWeights.NORMAL,
  )}
  position: relative;
  margin-left: 10px;
  ${({ labelStyles }) => labelStyles};
`;

export const SwitchInput = styled.input`
  position: absolute;
  opacity: 0;
  :focus {
    ~ span {
      outline-width: 2px;
      outline-style: solid;
      outline-color: Highlight;
    }
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.GRAY_LIGHT_2};
  -webkit-transition: transform 0.4s;
  transition: transform 0.4s;
  border-radius: 34px;
  background-color: ${({ checked }) => checked ? theme.colors.MAIN_COLOR : theme.colors.GRAY_LIGHTER};
  ${({ customStyles }) => customStyles};

  :before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    bottom: 4px;
    background-color: ${theme.colors.WHITE};
    -webkit-transition: transform 0.4s;
    transition: transform 0.4s;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12);
    border-radius: 50%;
    background-color: ${({ checked }) => checked ? theme.colors.WHITE : ''};
    transform: ${({ checked }) => checked ? 'translateX(20px)' : 'translateX(4px)'};
    ${({ sliderStyles }) => sliderStyles};
  }
`;
