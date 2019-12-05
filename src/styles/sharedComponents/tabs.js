import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { flexPosition, fontStyle, globalStyle } from '../mixins';
import styles from '../variables';

const removeLinkEffects = css`
  &:hover,
  &:active,
  &:focus,
  &:visited {
    text-decoration: none;
  }
  box-sizing: border-box;
`;

const tabStyle = css`
  ${fontStyle(styles.colors.GRAY_MEDIUM_3, styles.fontSizes.SIZE_7, styles.fontWeights.SEMIBOLD)}
  ${flexPosition({ align: 'center', justify: 'center' })}
  text-align: center;
  padding: 5px 25px;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || '64px'};
  text-decoration: none;
  ${({ nooutline }) => (nooutline ? 'outline: none;' : {})}
  &.active {
    border-bottom: 4px solid
      ${({ activebordercolor }) => activebordercolor || styles.colors.MAIN_COLOR};
    padding-bottom: 1px;
    color: ${styles.colors.GRAY_DARKER};
    ${({ activestyle }) => activestyle}
  }
  &:hover {
    text-decoration: none;
    color: ${({ hovercolor }) => hovercolor || styles.colors.GRAY_DARKER};
    ${({ hoverstyle }) => hoverstyle}
  }
  &:focus {
    color: ${({ hovercolor }) => hovercolor || styles.colors.GRAY_DARKER};
  }
  ${({ customstyles }) => customstyles}
`;

export const CustomNavLink = styled(NavLink)`
  ${removeLinkEffects}
  ${tabStyle}
  ${({ customStyles }) => customStyles}
`;

export const CustomButtonTab = styled.button`
  ${removeLinkEffects}
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${tabStyle}
`;

const secondaryStyle = css`
  ${CustomNavLink}, ${CustomButtonTab} {
    border-bottom: 1px solid ${styles.colors.GRAY_LIGHT_2};
    &.active {
      border-bottom: 4px solid ${styles.colors.INFO_COLOR};
      padding-bottom: 2px;
    }
  }
`;

export const TabsContainer = styled.div`
  ${globalStyle()}
  ${flexPosition({ align: 'flex-end', justify: 'flex-start' })}
  ${({ secondary }) => (secondary ? secondaryStyle : {})}
`;
