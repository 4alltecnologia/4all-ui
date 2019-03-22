import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { flexPosition, fontStyle } from '../../styles/mixins';
import styles from '../../styles/variables';

const removeLinkEffects = css`
  &:hover, &:active, &:focus, &:visited {
    text-decoration: none;
  }
  box-sizing: border-box;
`;

export const CustomNavLink = styled(NavLink)`
  ${removeLinkEffects}
  ${fontStyle(styles.colors.GRAY_MEDIUM_3, styles.fontSizes.SIZE_7, styles.fontWeights.SEMIBOLD)}
  ${flexPosition({ align: 'center', justify: 'center' })}
  text-align: center;
  padding: 5px 25px;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || '64px'};
  text-decoration: none;
  &.active {
    border-bottom: 4px solid ${({ activeBorderColor }) => activeBorderColor || styles.colors.MAIN_COLOR};
    padding-bottom: 1px;
    color: ${styles.colors.GRAY_DARKER};
    ${({ activeStyle }) => activeStyle}
  }
  &:hover {
    text-decoration: none;
    color: ${({ hoverColor }) => hoverColor || styles.colors.GRAY_DARKER};
    ${({ hoverStyle }) => hoverStyle}
  }
  &:focus {
    color: ${({ hoverColor }) => hoverColor || styles.colors.GRAY_DARKER};
  }
  ${({ customStyles }) => customStyles}
`;

const secondaryStyle = css`
  ${CustomNavLink} {
    border-bottom: 1px solid ${styles.colors.GRAY_LIGHT_2};
    &.active {
      border-bottom: 4px solid ${styles.colors.INFO_COLOR};
    }
  }
`;

export const TabsContainer = styled.div`
  ${flexPosition({ align: 'flex-end', justify: 'flex-start' })}
  ${({ secondary }) => secondary ? secondaryStyle : null}
`;
