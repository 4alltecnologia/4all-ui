import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import BreadCrumb from '../BreadCrumb';
import ArrowComponent from '../Icons/Arrow';

const renderBackLink = backLink => (
  <React.Fragment>
    {backLink.external ? (
      <styles.ExternalLink href={backLink.link}>
        <ArrowComponent rotate="left" size="30" />
        {backLink.text}
      </styles.ExternalLink>
    ) : (
      <styles.InternalLink to={backLink.link}>
        <ArrowComponent rotate="left" size="30" />
        {backLink.text}
      </styles.InternalLink>
    )}
  </React.Fragment>
);

function Header({ breadcrumbLinks, title, backLink, containerStyles }) {
  return (
    <styles.Header>
      <styles.Container containerStyles={containerStyles}>
        <styles.InnerHeader>
          <styles.LeftHeader>
            <styles.SmallHeader>
              {breadcrumbLinks.length && <BreadCrumb links={breadcrumbLinks} />}
            </styles.SmallHeader>
            <styles.Title>{title}</styles.Title>
          </styles.LeftHeader>
          {backLink && <styles.RightHeader>{renderBackLink(backLink)}</styles.RightHeader>}
        </styles.InnerHeader>
      </styles.Container>
    </styles.Header>
  );
}

Header.defaultProps = {
  title: '',
  breadcrumbLinks: [{ external: true, link: '/', text: 'Home' }, { link: '/', text: 'Listagem' }],
  backLink: null,
  containerStyles: {
    width: '100%',
    margin: '0 auto',
    maxWidth: '1170px',
    padding: '0px 15px',
  },
};

Header.propTypes = {
  title: PropTypes.string,
  backLink: PropTypes.object,
  breadcrumbLinks: PropTypes.array,
  containerStyles: PropTypes.object,
};

export default Header;
