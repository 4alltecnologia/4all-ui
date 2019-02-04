import styled from 'styled-components';
import { MAIN_COLOR } from '../../styles/variables';
import { flexPosition } from '../../styles/mixins';

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${props => props.fullScreen ? (`
    position: absolute;
    top: 60px;
    height: calc(100vh - 60px);
    background: #fff;`
  ) : (`
    height: 100%;
    margin: 0 auto;
    width: 100%;
  `)}
  ${flexPosition('center', 'center')}
`;

export const Loading = styled.i`
  display: flex;
  width: ${props => props.size};
  height: ${props => props.size};
  animation: rotation 1.5s infinite ease-in-out;
  border: ${({ color, width }) => `${width} solid ${color}`};
  border-top-color: rgba(255, 255, 255, 0);
  border-bottom-color: rgba(255, 255, 255, 0);
  border-radius: 50%;

  @keyframes rotation {
    to {
      transform: rotate(360deg);
    }
  }
`;
