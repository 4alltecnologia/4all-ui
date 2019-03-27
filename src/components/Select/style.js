import styled, { createGlobalStyle } from 'styled-components';
import styles from '../../styles/variables';
import { customScrollbar } from '../../styles/mixins';

export const CustomArrowImg = styled.img`
  margin: 0;
`;

export const CustomSeparator = styled.span`
`;

export const QtdOptions = styled.span`
  position: absolute;
  top: 10px;
  right: 7px;
  border: 1px solid ${styles.colors.GRAY_MEDIUM_3};
  border-radius: 100%;
  padding: 0px 6px;
`;

export const GlobalSelectStyle = createGlobalStyle`
  .react-dropdown-multiselect {
    width: 100%;
  }
`;
