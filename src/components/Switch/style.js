import styled from 'styled-components';
import theme from '../../styles/variables';

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 41px;
  min-width: 41px;
  height: 24px;
  margin: 0;
  ${({ customStyles }) => customStyles};
`;

export const SwitchText = styled.span`
  position: relative;
  top: -7px;
  margin-left: 10px;
  user-select: none;
  ${({ labelStyles }) => labelStyles};
`;

export const SwitchInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.GRAY_MEDIUM_2};
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  background-color: ${props => props.checked ? theme.colors.MAIN_COLOR : theme.colors.GRAY_LIGHTER};
  
  :before{
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    bottom: 4px;
    background-color: ${theme.colors.WHITE};
    -webkit-transition: .4s;
    transition: .4s;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12);
    border-radius: 50%;
    background-color: ${props => props.checked ? '#fff' : ''};
    transform: ${props => props.checked ? 'translateX(20px)' : 'translateX(4px)'};
    -webkit-transform: ${props => props.checked ? 'translateX(20px)' : 'translateX(4px)'};
    -ms-transform: ${props => props.checked ? 'translateX(20px)' : 'translateX(4px)'};
  }
`;
