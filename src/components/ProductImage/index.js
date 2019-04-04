import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import PhotoIcon from '../Icons/Photo';
import { theme } from '../..';

const ProductImage = ({
  id,
  className,
  image,
  small,
  path,
  alt,
  title,
  size,
  backgroundColor,
  fontColor,
  customStyles,
}) => (
  image ? (
    <styles.Image
      backgroundColor={backgroundColor}
      className={`product-image ${className}`}
      id={id}
      small={small}
      src={path ? `${path}/${image}` : image}
      alt={alt}
      title={title}
      customStyles={customStyles}
      size={size}
    />
  ) : (
    <styles.EmptyImage
      backgroundColor={backgroundColor}
      className={`product-image product-image--empty ${className}`}
      id={id}
      small={small}
      size={size}
      customStyles={customStyles}
    >
      <PhotoIcon
        className="product-image__icon"
        color={fontColor}
        size={small ? '25px' : '30px'}
      />
      {!small && (
        <styles.Text className="product-image__text" fontColor={fontColor}>
          Sem foto
        </styles.Text>
      )}
    </styles.EmptyImage>
  )
);

ProductImage.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.any.isRequired,
  small: PropTypes.bool,
  path: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  customStyles: PropTypes.object,
};

ProductImage.defaultProps = {
  id: '',
  className: '',
  small: false,
  path: '',
  alt: '',
  title: '',
  size: '68px',
  backgroundColor: theme.styles.colors.GRAY_LIGHT_2,
  fontColor: theme.styles.colors.GRAY_MEDIUM,
  customStyles: {},
};

export default ProductImage;
