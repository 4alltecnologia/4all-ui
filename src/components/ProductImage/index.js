import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import PhotoIcon from '../Icons/Photo';
import theme from '../../styles/variables';

const ProductImage = ({
  id,
  className,
  image,
  small,
  alt,
  title,
  size,
  backgroundColor,
  fontColor,
  fontSize,
  iconSize,
  iconColor,
  customStyles,
  emptyText,
}) => (
  image ? (
    <styles.Image
      backgroundColor={backgroundColor}
      className={`product-image-4all ${className}`}
      id={id}
      small={small}
      src={image}
      alt={alt}
      title={title}
      customStyles={customStyles}
      size={small ? '40px' : size}
    />
  ) : (
    <styles.EmptyImage
      backgroundColor={backgroundColor}
      className={`product-image-4all product-image-4all--empty ${className}`}
      id={id}
      small={small}
      size={small ? '40px' : size}
      customStyles={customStyles}
    >
      <PhotoIcon
        className="product-image-4all__icon"
        color={iconColor}
        size={small ? '25px' : iconSize}
      />
      {!small && (
        <styles.Text
          fontSize={fontSize}
          className="product-image-4all__text"
          fontColor={fontColor}
        >
          {emptyText}
        </styles.Text>
      )}
    </styles.EmptyImage>
  )
);

ProductImage.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.any,
  small: PropTypes.bool,
  alt: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  iconColor: PropTypes.string,
  fontSize: PropTypes.string,
  customStyles: PropTypes.object,
  iconSize: PropTypes.string,
  emptyText: PropTypes.string,
};

ProductImage.defaultProps = {
  id: '',
  className: '',
  image: null,
  small: false,
  alt: '',
  title: '',
  size: '68px',
  backgroundColor: theme.colors.GRAY_LIGHT_2,
  fontColor: theme.colors.GRAY_MEDIUM,
  iconColor: theme.colors.GRAY_MEDIUM,
  fontSize: '10px',
  customStyles: {},
  iconSize: '30px',
  emptyText: 'Sem foto',
};

export default ProductImage;
