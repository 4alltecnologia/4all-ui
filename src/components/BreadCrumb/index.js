import React from 'react';
import PropTypes from 'prop-types';
import ArrowComponent from '../Icons/Arrow';
import * as styles from './style';

function BreadCrumb({ links }) {
  return (
    <styles.BreadCrumb>
      {links.map((item, index) => (
        <React.Fragment>
          {item.external ? (
            <styles.ExternalLink href={item.link}>{item.text}</styles.ExternalLink>
          ) : (
            <styles.InternalLink to={item.link}>{item.text}</styles.InternalLink>
          )}
          {index !== links.length - 1 && <ArrowComponent />}
        </React.Fragment>
      ))}
    </styles.BreadCrumb>
  );
}

BreadCrumb.defaultProps = {
  links: [],
};

BreadCrumb.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      external: PropTypes.bool,
      link: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default BreadCrumb;
