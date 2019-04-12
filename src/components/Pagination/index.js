/* eslint-disable import/no-named-default */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import localeInfo from 'rc-pagination/lib/locale/pt_BR';
import { default as CustomPagination } from 'rc-pagination';
import Button from '../Button';
import IconArrowPagination from '../Icons/ArrowPagination';
import { default as theme } from '../../styles/variables';
import * as styles from './style';

const buttonCustomStyles = defaultStyles => ({
  borderRadius: '100%',
  minHeight: 'unset',
  minWidth: 'unset',
  border: 'none',
  width: defaultStyles.itemWidth,
  height: defaultStyles.itemHeight,
  outline: 'none',
  backgroundColor: defaultStyles.active
    ? defaultStyles.activeBgColor || theme.colors.MAIN_COLOR
    : defaultStyles.itemBgColor || 'transparent',
  ...defaultStyles.active
    ? defaultStyles.customActiveItemStyles
    : defaultStyles.customInactiveItemStyles,
});

const arrow = ({
  next = false,
  current,
  pages,
  iconColor,
}) => (
  <styles.ArrowButton disabled={next ? current === pages : current === 1} right={next}>
    <IconArrowPagination color={iconColor} />
  </styles.ArrowButton>
);

const renderItem = ({
  current,
  customStyles,
  currentPage,
}) => (
  <styles.PaginationItem>
    <Button
      customStyles={buttonCustomStyles({
        ...customStyles,
        active: current === currentPage,
      })}
      secondary={current !== currentPage}
      tabIndex="-1"
    >
      {current}
    </Button>
  </styles.PaginationItem>
);

const itemRender = ({
  current,
  type,
  element,
  pages,
  currentPage,
  customStyles,
  iconColor,
}) => {
  switch (type) {
    case 'page':
      return renderItem({ current, customStyles, currentPage });
    case 'prev':
      return arrow({ current: currentPage, iconColor, pages });
    case 'next':
      return arrow({ next: true, current: currentPage, iconColor, pages });
    case 'jump-prev':
      return <styles.DotsSeparator>...</styles.DotsSeparator>;
    case 'jump-next':
      return <styles.DotsSeparator>...</styles.DotsSeparator>;
    default:
      return element;
  }
};

const Pagination = ({
  pages,
  currentPage,
  onChangePage,
  secondary,
  itemWidth,
  itemHeight,
  customActiveItemStyles,
  customInactiveItemStyles,
  activeBgColor,
  itemBgColor,
  showLessItems,
  iconColor,
  itemSpacing,
  id,
  className,
}) => {
  const customStyles = {
    styles: {},
    itemBgColor,
    activeBgColor: secondary ? theme.colors.INFO_COLOR : activeBgColor,
    customActiveItemStyles,
    customInactiveItemStyles,
    secondary,
    itemWidth,
    itemHeight,
  };

  return (
    <styles.PaginationContainer itemSpacing={itemSpacing}>
      <CustomPagination
        id={id}
        className={`pagination-4all ${className}`}
        locale={localeInfo}
        current={currentPage}
        onChange={onChangePage}
        defaultCurrent={currentPage}
        showLessItems={showLessItems}
        total={pages}
        pageSize={1}
        itemRender={(current, type, element) => itemRender({
          current,
          type,
          element,
          customStyles,
          pages,
          currentPage,
          iconColor: secondary ? theme.colors.INFO_COLOR : iconColor,
        })}
      />
    </styles.PaginationContainer>
  );
};

Pagination.propTypes = {
  pages: PropTypes.number,
  secondary: PropTypes.bool,
  currentPage: PropTypes.number,
  onChangePage: PropTypes.func.isRequired,
  itemWidth: PropTypes.string,
  itemHeight: PropTypes.string,
  activeBgColor: PropTypes.string,
  itemBgColor: PropTypes.string,
  customActiveItemStyles: PropTypes.object,
  customInactiveItemStyles: PropTypes.object,
  showLessItems: PropTypes.bool,
  iconColor: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
};

Pagination.defaultProps = {
  id: 'pagination-4all',
  className: '',
  secondary: false,
  pages: 10,
  currentPage: 1,
  itemWidth: '35px',
  itemHeight: '35px',
  activeBgColor: theme.colors.MAIN_COLOR,
  itemBgColor: 'transparent',
  customActiveItemStyles: {},
  customInactiveItemStyles: {},
  iconColor: theme.colors.MAIN_COLOR,
  showLessItems: false,
};

export default Pagination;
