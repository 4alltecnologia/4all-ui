import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import theme from '../../styles/variables';
import closeIcon from '../../images/close.svg';
import { GlobalStyle } from '../../styles/mixins';

const Tag = ({
  id,
  tag,
  className,
  color,
  height,
  width,
  bgColor,
  border,
  disabled,
  customStyles,
  onHoverTag,
  onBlurTag,
  onClick,
  showCloseIcon,
  children,
  secondary,
  error,
}) => (
  <Fragment>
    <GlobalStyle />
    <styles.CustomTag
      id={id}
      className={`tag-4all ${className}`}
      color={color}
      height={height}
      width={width}
      bgColor={bgColor}
      disabled={disabled}
      customStyles={customStyles}
      border={border}
      onMouseLeave={onBlurTag ? () => onBlurTag : null}
      onMouseOver={onHoverTag ? () => onHoverTag(tag) : null}
      onFocus={onHoverTag ? () => onHoverTag(tag) : null}
      onClick={onClick}
      showCloseIcon={showCloseIcon}
      secondary={secondary}
      error={error}
    >
      {children}
      {showCloseIcon && (
        <styles.CloseIcon
          src={closeIcon}
          alt="Icone 4all"
        />
      )}
    </styles.CustomTag>
  </Fragment>
);

Tag.propTypes = {
  id: PropTypes.string,
  tag: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
  border: PropTypes.string,
  onHoverTag: PropTypes.func,
  onBlurTag: PropTypes.func,
  disabled: PropTypes.bool,
  customStyles: PropTypes.object,
  onClick: PropTypes.func,
  showCloseIcon: PropTypes.bool,
  children: PropTypes.any.isRequired,
  secondary: PropTypes.bool,
  error: PropTypes.bool,
};

Tag.defaultProps = {
  id: null,
  tag: {},
  className: '',
  color: '#FFF',
  height: 'auto',
  width: 'auto',
  bgColor: theme.colors.MAIN_COLOR,
  disabled: false,
  border: 'none',
  onHoverTag: null,
  onBlurTag: null,
  onClick: null,
  showCloseIcon: false,
  customStyles: null,
  secondary: false,
  error: false,
};


export default Tag;
