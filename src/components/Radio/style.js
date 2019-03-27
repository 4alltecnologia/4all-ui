import styled from 'styled-components';
import { flexPosition, fontStyle } from '../../styles/mixins';
import theme from '../../styles/variables';

export const RadioContainer = styled.div`
  ${flexPosition({ align: 'flex-start', justify: 'flex-start' })};
  margin-top: ${({ customDescStyles }) => (customDescStyles ? '28px' : '0px')};
  label {
    margin-bottom: ${({ customDescStyles }) => (customDescStyles ? '0px' : '')};
  }
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const Label = styled.span`
  ${fontStyle(
    theme.colors.GRAY_DARKER,
    theme.fontSizes.SIZE_7,
    theme.fontWeights.NORMAL,
  )}
`;

export const Desc = styled.span`
  ${fontStyle(
    theme.colors.GRAY_MEDIUM,
    theme.fontSizes.SIZE_7,
    theme.fontWeights.NORMAL,
  )}
`;

export const LabelContainer = styled.label`
  ${flexPosition({ align: 'flex-start', justify: 'flex-start' })}
`;

export const CustomRadio = styled.span`
  ${({ checked, disabled }) => {
    let color = 'transparent';

    if (disabled) {
      color = theme.colors.GRAY_LIGHT;
    } else if (checked) {
      color = theme.colors.MAIN_COLOR;
    }

    return `
      background-color: ${color};
      border: ${checked || disabled ? 'none' : `1px solid ${theme.colors.GRAY_LIGHT_2}`};
    `;
  }}

  border-radius: 100px;
  cursor: pointer;
  height: 18px;
  position: relative;
  width: 18px;
`;

export const InputContainer = styled.span`
  ${flexPosition({})}
  margin-right: 8px;
  margin-top: ${({ customDescStyles }) => (customDescStyles ? '0px' : '2px')};
  position: relative;

  > ${RadioInput}:focus ~ ${CustomRadio} {
    outline-width: 2px;
    outline-style: solid;
    outline-color: Highlight;
  }
`;

export const DescContainer = styled.span`
  ${flexPosition({})}
  flex-direction: column;
  ${({ customDescStyles }) => customDescStyles}
`;
