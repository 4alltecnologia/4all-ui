import styled from 'styled-components';
import theme from '../../styles/variables';
import { flexPosition, fontStyle } from '../../styles/mixins';
import { lightenDarkenColor } from '../../helpers/helpers';

export const groupStyles = {
  alignItems: 'center',
  display: 'flex',
};

export const GroupLabel = {
  color: theme.colors.GRAY_MEDIUM,
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSizes.SIZE_7,
  fontWeight: theme.fontWeights.SEMIBOLD,
  textTransform: 'initial',
};

const dotLabel = options =>
  options && {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',

    ':before': {
      backgroundColor: options.color,
      border: `1px solid ${options.borderColor || options.color}`,
      borderRadius: '50%',
      content: '""',
      display: 'block',
      marginRight: options.margin || 10,
      height: options.size || 10,
      width: options.size || 10,
    },
  };

export const customStyles = ({
  error,
  customStyle = {},
  canRemove,
  optionCustomDisabledStyles,
  containerCustomStyles,
  dotOptions = {
    singleValueDot: true,
  },
}) => ({
  container: styles => ({
    ...styles,
    ...containerCustomStyles,
    width: customStyle.width || '100%',
  }),
  group: styles => ({
    ...styles,
    padding: '4px 0',
  }),
  option: (stylesProvided, { data, isFocused, isDisabled }) => ({
    ...stylesProvided,
    fontFamily: theme.fontFamily,
    color: isDisabled ? theme.colors.GRAY_MEDIUM_3 : theme.colors.GRAY_DARKER,
    cursor: isDisabled ? 'default' : 'pointer',
    textDecoration: isDisabled ? 'line-through' : '',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: isFocused ? theme.colors.GRAY_LIGHT : '#FFF',
    padding: '4px 12px',
    height: customStyle.optionHeight || theme.input.DEFAULT_HEIGHT,
    ':active': {
      backgroundColor: theme.colors.GRAY_LIGHT_2,
    },
    label: {
      fontSize: theme.fontSizes.SIZE_7,
      fontWeight: 'normal',
      marginBottom: 0,
      cursor: isDisabled ? 'default' : 'pointer',
      ...dotLabel(data && data.dot),
    },
    ...(isDisabled ? optionCustomDisabledStyles : {}),
  }),
  control: () => ({
    width: `${customStyle.width ? `${parseInt(customStyle.width) - 2}px` : '100%'}`,
    height: customStyle.height || 40,
    display: 'flex',
    border: `1px solid ${
      error ? theme.colors.DANGER_COLOR : customStyle.borderColor || theme.colors.GRAY_LIGHT_2
    }`,
    borderRadius: theme.borders.RADIUS_1,
  }),
  multiValue: styles => ({
    ...styles,
    backgroundColor: customStyle.valueBgColor || theme.colors.MAIN_COLOR,
    borderRadius: '15px',
    padding: '0px 0px 0px 5px',
    fontSize: theme.fontSizes.SIZE_7,
    fontWeight: theme.fontWeights.SEMIBOLD,
    fontFamily: theme.fontFamily,
    marginRight: '3px',
    ...customStyle.customValueStyles,
  }),
  multiValueLabel: styles => ({
    ...styles,
    color: customStyle.valueColor || '#FFF',
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizes.SIZE_7,
    fontWeight: theme.fontWeights.SEMIBOLD,
    padding: 5,
    paddingRight: 0,
    paddingLeft: '2px',
  }),
  noOptionsMessage: styles => ({
    ...styles,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizes.SIZE_7,
    fontWeight: theme.fontWeights.SEMIBOLD,
  }),
  multiValueRemove: styles =>
    !canRemove
      ? {
          display: 'none',
        }
      : {
          ...styles,
          color: customStyle.multiRemoveBgColor || '#FFF',
          borderTopRightRadius: '15px',
          borderBottomRightRadius: '15px',
          cursor: 'pointer',
          paddingLeft: '2px',
          marginLeft: '2px',
          ':hover': {
            backgroundColor: lightenDarkenColor(
              customStyle.valueBgColor || theme.colors.MAIN_COLOR
            ),
          },
        },
  placeholder: styles => ({
    ...styles,
    fontSize: theme.fontSizes.SIZE_7,
    color: theme.colors.GRAY_MEDIUM,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeights.SEMIBOLD,
    ...customStyle.customPlaceholderStyles,
  }),
  valueContainer: styles => ({
    ...styles,
    paddingRight: '20px',
    ...customStyle.customValueContainerStyles,
    /* flexWrap: 'nowrap', */
    '.select__single-value': {
      fontSize: theme.fontSizes.SIZE_7,
      fontWeight: theme.fontWeights.SEMIBOLD,
      color: customStyle.valueColor || theme.colors.GRAY_DARKER,
      backgroundColor: customStyle.valueBgColor || 'transparent',
      fontFamily: theme.fontFamily,
      ...customStyle.customValueStyles,
    },
  }),
  singleValue: (styles, { data }) => {
    let newStyle = { ...styles };

    if (dotOptions.singleValueDot) {
      newStyle = { ...newStyle, ...dotLabel(data && data.dot) };
    }

    return newStyle;
  },
  dropdownIndicator: styles => ({
    ...styles,
    ...customStyle.customDropdownIndicatorStyles,
  }),
});

export const QtdOptions = styled.span`
  ${flexPosition({ align: 'center', justify: 'center' })}
  ${fontStyle(
    theme.colors.GRAY_DARKER,
    theme.fontSizes.SIZE_7,
    theme.fontWeights.SEMIBOLD
  )}
  position: absolute;
  right: 0px;
  border-radius: 100%;
  padding: 0px 4px;
  height: 20px;
`;
