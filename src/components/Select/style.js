import styled from 'styled-components';
import theme from '../../styles/variables';
import { flexPosition, fontStyle } from '../../styles/mixins';
import { lightenDarkenColor } from '../../helpers/helpers';

export const groupStyles = {
  display: 'flex',
  alignItems: 'center',
};

export const GroupLabel = {
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSizes.SIZE_7,
  fontWeight: theme.fontWeights.SEMIBOLD,
  color: theme.colors.GRAY_MEDIUM,
  textTransform: 'initial',
};

export const customStyles = ({
  error,
  customStyle = {},
  canRemove,
  optionCustomDisabledStyles,
  containerCustomStyles,
}) => ({
  container: styles => ({
    ...styles,
    ...containerCustomStyles,
    width: '100%',
  }),
  group: styles => ({
    ...styles,
    padding: '4px 0',
  }),
  option: (stylesProvided, { isFocused, isDisabled }) => ({
    ...stylesProvided,
    fontFamily: theme.fontFamily,
    color: isDisabled ? theme.colors.GRAY_MEDIUM_3 : theme.colors.GRAY_DARKER,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
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
    },
    ...isDisabled
      ? optionCustomDisabledStyles
      : {},
  }),
  control: () => ({
    width: '100%',
    height: customStyle.height || 40,
    display: 'flex',
    border: `1px solid ${error ? theme.colors.DANGER_COLOR : theme.colors.GRAY_LIGHT_2}`,
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
  multiValueRemove: styles => !canRemove
    ? ({
      display: 'none',
    }) : ({
      ...styles,
      color: customStyle.multiRemoveBgColor || '#FFF',
      borderTopRightRadius: '15px',
      borderBottomRightRadius: '15px',
      cursor: 'pointer',
      paddingLeft: '2px',
      marginLeft: '2px',
      ':hover': {
        backgroundColor: lightenDarkenColor(
          customStyle.valueBgColor
          || theme.colors.MAIN_COLOR,
        ),
      },
    }),
  placeholder: styles => ({
    ...styles,
    fontSize: theme.fontSizes.SIZE_7,
    color: theme.colors.GRAY_MEDIUM,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeights.SEMIBOLD,
  }),
  valueContainer: styles => ({
    ...styles,
    paddingRight: '20px',
    /* flexWrap: 'nowrap', */
    '.select__single-value': {
      fontSize: theme.fontSizes.SIZE_7,
      fontWeight: theme.fontWeights.SEMIBOLD,
      color: customStyle.valueColor || theme.colors.GRAY_DARKER,
      backgroundColor: customStyle.valueBgColor || 'transparent',
      fontFamily: theme.fontFamily,
      ...customStyle.customValueStyles,
    }
  }),
});

export const QtdOptions = styled.span`
  ${flexPosition({ align: 'center', justify: 'center' })}
  ${fontStyle(theme.colors.GRAY_DARKER, theme.fontSizes.SIZE_7, theme.fontWeights.SEMIBOLD)}
  position: absolute;
  right: 0px;
  border-radius: 100%;
  padding: 0px 4px;
  height: 20px;
`;
