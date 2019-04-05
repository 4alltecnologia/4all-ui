import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import ArrowIcon from '../Icons/Arrow';
import { default as theme } from '../../styles/variables';
import * as styles from './style';


const getInitialIndex = ({ currentPage, listVisible, pages, visible }) => {
  if (currentPage === 1) {
    return 2;
  }
  if ((currentPage + listVisible) > pages) {
    return (pages - visible) + 1;
  }

  return currentPage + 1;
};

const getListLength = ({ currentPage, listVisible, pages }) => {
  const listLength = currentPage + listVisible;

  return listLength > pages ? pages : listLength;
};

const getInitialList = ({ currentPage, listLength, listVisible }) => {
  const list = currentPage > 1 ? [currentPage - 1, currentPage] : [1];

  return (listLength - currentPage) < listVisible
    ? []
    : list;
};

const generateList = (pages, currentPage, visible) => {
  const listVisible = currentPage === 1 ? visible - 1 : visible - 2;
  const currentIdxInit = getInitialIndex({ currentPage, listVisible, pages, visible });
  const listLength = getListLength({ currentPage, listVisible, pages });
  let list = getInitialList({ currentPage, listLength, listVisible})
  
  for (let i = currentIdxInit; i <= listLength; i++) {
    list = [...list, i];
  }
  return list;
};

const buttonCustomStyles = defaultStyles => ({
  borderRadius: '100%',
  minHeight: 'unset',
  minWidth: 'unset',
  border: 'none',
  backgroundColor: defaultStyles.active
    ? defaultStyles.activeBgColor || theme.colors.MAIN_COLOR
    : defaultStyles.itemBgColor || 'transparent',
  ...defaultStyles.active ? defaultStyles.customActiveItemStyles : defaultStyles.customInactiveItemStyles,
});

const Pagination = ({
  pages,
  currentPage,
  visible,
  onChangePage,
  secondary,
  width,
  height,
  customActiveItemStyles,
  customInactiveItemStyles,
  customSharedItemStyles,
  activeBgColor,
  itemBgColor,
  itemSpacing,
}) => {
  const customStyles = {
    styles: {},
    itemBgColor,
    activeBgColor,
    customActiveItemStyles,
    customInactiveItemStyles,
    secondary,
    width,
    height,
  };
  const listPages = generateList(pages, currentPage, visible);
  return (
    <styles.PaginationContainer>
      <styles.ArrowButton
        role="button"
        onClick={() => onChangePage(currentPage > 1 ? currentPage - 1 : currentPage)}
      >
        <ArrowIcon color={theme.colors.GRAY_MEDIUM} />
      </styles.ArrowButton>
      <styles.PaginationList>
        {listPages.map(page => (
          <styles.PaginationItem
            key={page}
            customStyles={customSharedItemStyles}
            itemSpacing={itemSpacing}
          >
            <Button
              onClick={() => onChangePage(page)}
              customStyles={buttonCustomStyles({
                ...customStyles,
                active: currentPage === page,
              })}
              secondary={currentPage !== page}
              width="35px"
              height="35px"
            >
              {page}
            </Button>
          </styles.PaginationItem>
        ))}
      </styles.PaginationList>
      <styles.ArrowButton
        role="button"
        right
        onClick={() => onChangePage(currentPage < pages ? currentPage + 1 : currentPage)}
      >
        <ArrowIcon color={theme.colors.GRAY_MEDIUM} />
      </styles.ArrowButton>
    </styles.PaginationContainer>
  );
};

Pagination.propTypes = {
  pages: PropTypes.number,
  secondary: PropTypes.bool,
  currentPage: PropTypes.number,
  visible: PropTypes.number,
  onChangePage: PropTypes.func.isRequired,
  itemSpacing: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  activeBgColor: PropTypes.string,
  itemBgColor: PropTypes.string,
  customActiveItemStyles: PropTypes.object,
  customInactiveItemStyles: PropTypes.object,
  customSharedItemStyles: PropTypes.object,
};

Pagination.defaultProps = {
  secondary: true,
  pages: 10,
  currentPage: 1,
  visible: 5,
  itemSpacing: '5px',
  width: '35px',
  height: '35px',
  activeBgColor: theme.colors.MAIN_COLOR,
  itemBgColor: 'transparent',
  customActiveItemStyles: {},
  customInactiveItemStyles: {},
  customSharedItemStyles: {},
};

export default Pagination;
