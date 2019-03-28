import styled from 'styled-components';
import theme from '../../styles/variables';
import { fontStyle, flexPosition } from '../../styles/mixins';

const getIcon = (mixed, checked) => {
  if (checked && mixed) {
    return `
      &::before {
        background-color: ${theme.colors.WHITE};
      }
    `;
  }

  if (checked) {
    return `
      &::after {
        border-bottom-color: ${theme.colors.WHITE};
        border-right-color: ${theme.colors.WHITE};
      }
    `;
  }

  return null;
};

const getColor = disabled => disabled ? theme.colors.GRAY_LIGHT_2 : theme.colors.MAIN_COLOR;

export const Label = styled.span`
  ${fontStyle(
    theme.colors.GRAY_DARKER,
    theme.fontSizes.SIZE_7,
    theme.fontWeights.NORMAL,
  )}
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;
`;

export const Checkbox = styled.span`
  background-color: ${theme.colors.WHITE};
  border: 1px solid ${theme.colors.GRAY_LIGHT_2};
  border-radius: ${theme.borders.RADIUS_1};
  display: block;
  height: 18px;
  position: relative;
  width: 18px;

  &::after,
  &::before {
    background-color: transparent;
    border-radius: 0;
    box-sizing: border-box;
    content: '';
    cursor: pointer;
    position: absolute;
  }

  &::before {
    height: 2px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
  }

  &::after {
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
    height: 12px;
    left: 6px;
    top: 0;
    transform: rotate(45deg);
    width: 6px;
  }

  ${Input}:focus ~ & {
    outline-width: 2px;
    outline-style: solid;
    outline-color: Highlight;
  }
`;

export const InputContainer = styled.span`
  margin-right: 8px;
`;

export const CheckboxContainer = styled.label`
  ${flexPosition({ align: 'center' })}

  &.checkbox--checked {
    ${Checkbox} {
      border-color: ${({ disabled }) => getColor(disabled)};
      background-color: ${({ disabled }) => getColor(disabled)};
      
      ${({ mixed, checked }) => getIcon(mixed, checked)}
    }
  }

  ${({ customStyles }) => customStyles}
`;

export const Container = styled.div`
  display: inline-block;
`;
