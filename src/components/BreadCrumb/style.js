import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../styles/variables';
import { fontStyle } from '../../styles/mixins';

const linkStyle = css`
  display: flex;
  align-items: center;
  ${fontStyle(theme.colors.WHITE, theme.fontSizes.SIZE_7, theme.fontWeights.SEMIBOLD)}
`;

export const ExternalLink = styled.a`
  ${linkStyle}
`;

export const InternalLink = styled(Link)`
  ${linkStyle}
`;

export const BreadCrumb = styled.div`
  height: 17px;
  display: flex;
  align-items: center;
`;
