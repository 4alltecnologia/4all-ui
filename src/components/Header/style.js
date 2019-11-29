import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { flexPosition, fontStyle, globalStyle } from '../../styles/mixins';
import theme from '../../styles/variables';

export const Container = styled.div`
  ${({ containerStyles }) => containerStyles}
`;

const linkStyle = css`
  display: flex;
  align-items: center;
  ${fontStyle(theme.colors.WHITE, theme.fontSizes.SIZE_6, theme.fontWeights.SEMIBOLD)}
`;

export const ExternalLink = styled.a`
  ${linkStyle}
`;

export const InternalLink = styled(Link)`
  ${linkStyle}
`;

export const Header = styled.div`
  ${globalStyle()}
  background-color: #418b37;
  height: 140px;
`;

export const InnerHeader = styled.div`
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
`;

export const LeftHeader = styled.div`
  color: ${theme.colors.WHITE};
  flex-direction: column;
  font-weight: ${theme.fontWeights.SEMIBOLD};
  height: auto;
`;

export const RightHeader = styled.div`
  color: ${theme.colors.WHITE};
  font-weight: ${theme.fontWeights.SEMIBOLD};
  margin-top: 11px;
  display: flex;
  align-items: center;
  height: auto;
  font-size: 14px;
`;

export const SmallHeader = styled.span`
  opacity: 0.5;
  line-height: 17px;
`;

export const Title = styled.span`
  display: block;
  font-size: 25px;
  line-height: 34px;
`;

export const ContentLoader = styled.div`
  ${flexPosition({ justify: 'center' })}
  margin-top: 100px;
`;
