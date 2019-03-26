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
  onRemoveTag,
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
      onMouseLeave={onBlurTag ? () => onBlurTag(tag) : null}
      onMouseOver={onHoverTag ? () => onHoverTag(tag) : null}
      onFocus={onHoverTag ? () => onHoverTag(tag) : null}
      onClick={onClick}
      onRemoveTag={!!onRemoveTag}
      secondary={secondary}
      error={error}
    >
      {children}
      {!!onRemoveTag && (
        <styles.CloseIcon
          src={closeIcon}
          alt="Icone 4all"
          onClick={onRemoveTag}
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
  onRemoveTag: PropTypes.func,
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
  onRemoveTag: null,
  customStyles: null,
  secondary: false,
  error: false,
};


export default Tag;
