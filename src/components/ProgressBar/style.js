import styled from 'styled-components';
import { globalStyle } from '../../styles/mixins';
import theme from '../../styles/variables';

export const Container = styled.div`
  ${globalStyle()}
  background-color: ${theme.colors.GRAY_LIGHT_2};
  border-radius: ${({ roundness }) => roundness};
  height: ${({ height }) => height};
  overflow: hidden;
  position: relative;
  width: ${({ width }) => width};

  ${({ customStyles }) => customStyles}
`;

export const Bar = styled.div`
  background-color: ${({ barColor }) => barColor};
  border-radius: ${({ roundness }) => roundness};
  height: ${({ height }) => height};
  left: 0;
  position: absolute;
  top: 0;
  width: ${({ progress }) => `${progress}%`};
`;
