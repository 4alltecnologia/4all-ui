import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import theme from '../../styles/variables';
import CloseIcon from '../Icons/Close';

const getIconColor = ({ iconColor, disabled, secondary }) => {
  if (iconColor) {
    return iconColor;
  }

  if (disabled || secondary) {
    return theme.colors.GRAY_MEDIUM_3;
  }

  return theme.colors.white;
};

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
  maxWidth,
  withEllipsis,
  error,
  iconColor,
}) => (
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
    removeTag={!!onRemoveTag}
    secondary={secondary}
    maxWidth={maxWidth}
    withEllipsis={withEllipsis}
    error={error}
  >
    {children}
    {!!onRemoveTag && (
      <CloseIcon
        color={getIconColor({
          iconColor,
          disabled,
          secondary,
        })}
        onClick={onRemoveTag}
      />
    )}
  </styles.CustomTag>
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
  maxWidth: PropTypes.string,
  withEllipsis: PropTypes.bool,
  error: PropTypes.bool,
  iconColor: PropTypes.string,
};

Tag.defaultProps = {
  id: null,
  tag: {},
  className: '',
  color: theme.colors.white,
  height: 'auto',
  width: 'auto',
  bgColor: theme.colors.MAIN_COLOR,
  disabled: false,
  border: `1px solid ${theme.colors.MAIN_COLOR}`,
  onHoverTag: null,
  onBlurTag: null,
  onClick: null,
  onRemoveTag: null,
  customStyles: {},
  secondary: false,
  maxWidth: '',
  withEllipsis: false,
  error: false,
  iconColor: theme.colors.white,
};

export default Tag;
