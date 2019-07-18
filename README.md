# 4all-ui

> Biblioteca de componentes de UI utilizados pela 4all

[![NPM](https://img.shields.io/npm/v/4all-ui.svg)](https://www.npmjs.com/package/4all-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-eslint-brightgreen.svg)](https://www.npmjs.com/package/eslint-config-airbnb) [![Build Status](https://travis-ci.org/4alltecnologia/4all-ui.svg?branch=master)](https://travis-ci.org/4alltecnologia/4all-ui)

![npm-badge](https://nodei.co/npm/4all-ui.png?downloads=true&stars=true)

## [Storybook](https://4alltecnologia.github.io/4all-ui)
Use this link to see the library storybook and all components variations

## Install

```bash
npm install --save 4all-ui
```

## Usage

```jsx
import React, { Component } from 'react'

import Button from '4all-ui/components/Button';

class Example extends Component {
  render () {
    return (
      <Button onClick={() => console.log('Click')}>Button Text</Button>
    )
  }
}
```

# Components
## Button
Component Button Props
- `width` - width of the button (`type: String`)
- `height` - height of the button (`type: String`)
- `type` - type of the button (`type: String`, e.g.   `submit, reset`)
- `borderColor` - color of the button border (`type: String`)
- `bgColor` - background-color of the button (`type: String`)
- `disabled` - disabled style (`type: boolean`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type (`type: default style object`)
- `onClick` - function for button click event (`type: function`)
- `color` - font color of the button (`type: String`)
- `border` - border of the button (e.g.  `1px solid #ccc`)
- `secondary` - secondary style (`type: boolean`)
- `border` - border of the button (`type: String`, e.g.  `1px solid #ccc`)
- `link` - link style (`type: boolean`)
<br /><br />

## Loader
Loader props
- `size` - size of the Loader (`type: String`)
- `width` - border width of the Loader (`type: String`)
- `color` - color of the Loader (`type: String`)
<br /><br />

## NavTabs
Component Button Props
- `secondary` - secondary styles for NavTab (`type: boolean`)
- `customStyles` - custom styles to be inserted inside styled-components with high prority (`type: default's react style object`)
- `children` - the component [NavTab](#NavTab) (type: jsx)
<br /><br />

## NavTab
Component Button Props
- `path` - path to go when click in NavTab (`type: String`)
- `exact` - active style will be applied only if location match exact as the path ([react router feature](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md#exact-bool)) (`type: boolean`)
- `activeStyle` - custom styles to be inserted inside styled-components with high prority only for active tab (`type: default's react style object`)
- `hoverStyle` - custom styles to be inserted inside styled-components with high prority only for hovered tab (`type: default's react style object`)
- `width` - width of the tab (`type: String`)
- `height` - height of the tab (`type: String`)
- `hoverColor` - color of the tab when hovering (`type: String`)
- `activeBorderColor` - color of the border when tab is active (`type: String`)
- `noOutline` - remove default outline style when tab is focused (`type: boolean`)
- `children` - anything, but normally just a string (`type: jsx`)
- `customStyles` - custom styles to be inserted inside styled-components with high prority (`type: default's react style object`)
<br /><br />

## Tabs
Component Button Props
- `secondary` - secondary styles for NavTab (`type: boolean`)
- `customStyles` - custom styles to be inserted inside styled-components with high prority (`type: default's react style object`)
- `children` - the component [Tab](#Tab) (`type: jsx`)
<br /><br />

## Tab
Component Button Props
- `onClick` - function to be called when Tab is clicked (`type: function`)
- `active` - true/false that indicates if the current Tab is active (`type: boolean`)
- `activeStyle` - custom styles to be inserted inside styled-components with high prority only for active tab (`type: default's react style object`)
- `hoverStyle` - custom styles to be inserted inside styled-components with high prority only for hovered tab (`type: default's react style object`)
- `width` - width of the tab (`type: String`)
- `height` - height of the tab (`type: String`)
- `hoverColor` - color of the tab when hovering (`type: String`)
- `activeBorderColor` - color of the border when tab is active (`type: String`)
- `noOutline` - remove default outline style when tab is focused (`type: boolean`)
- `children` - anything, but normally just a string (`type: jsx`)
- `customStyles` - custom styles to be inserted inside styled-components with high prority (`type: default's react style object`)
<br /><br />

## Tag
Tag props
- `width` - width of the tag (`type: String`)
- `height` - height of the tag (`type: String`)
- `bgColor` - background-color of the tag (`type: String`)
- `disabled` - disabled style (`type: boolean`)
- `border` - border of the tag (e.g.  `1px solid #ccc`)
- `onHoverTag` - function for tag hover event (`type: function`)
- `onBlurTag` - function for tag blur event (`type: function`)
- `onClick` - function for tag click event (`type: function`)
- `onRemoveTag` - function for tag icon click event (`type: function`)
- `color` - font color of the tag (`type: String`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type (`type: default style object`)
- `secondary` - secondary style (`type: boolean`)
<br /><br />

## Input
Input props
- `disabled` - disabled style (`type: boolean`)
- `error` - error style (`type: boolean`)
- `onChange` - function for input change event (`type: function`)
- `onFocus` - function for input focus event (`type: function`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type (`type: default style object`)
- `type` - input type (`type: String`)
- `value` - input value (`type: any`)
- `placeholder` - default input placeholder (`type: String`)
- `maxLength` - set a maximum length (`type: String`)
- `checked` - checked style (`type: bool`)
- `search` - search style (`type: bool`)
- `customIcon` - customIcon to be inserted inside the input  (`type: any`)
- `onIconClick` - function for customIcon click event (`type: function`)
<br /><br />

## InputCurrency
InputCurrency props
- `disabled` - disabled style (`type: boolean`)
- `error` - error style (`type: boolean`)
- `onChange` - function for input change event (`type: function`)
- `onFocus` - function for input focus event (`type: function`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type (`type: default style object`)
- `type` - input type (`type: String`)
- `value` - input value (`type: any`)
- `placeholder` - default input placeholder (`type: String`)
- `checked` - checked style (`type: bool`)
<br /><br />

## SearchInput
_For this component we are using `react-debounce-input` and customizing it, if you want to see its [docs](https://www.npmjs.com/package/react-debounce-input)_

Search Input props
- `disabled` - disabled style (`type: boolean`)
- `error` - error style (`type: boolean`)
- `onChange` - function for input change event (`type: function`)
- `onFocus` - function for input focus event (`type: function`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type (`type: default style object`)
- `type` - input type (`type: String`)
- `value` - input value (`type: any`)
- `placeholder` - default input placeholder (`type: String`)
- `maxLength` - set a maximum length (`type: String`)
- `checked` - checked style (`type: bool`)
- `minLength` - min length of string typed to search (`type: number`, `default: 2`)
- `debounceTimeout` - timeout to call onChange callback function of string typed to search (`type: number`, `default: 300`)
<br /><br />

## Switch
Switch props
- `checked` - check/uncheck the switch (`type: boolean`)
- `disabled` - disabled style (`type: boolean`)
- `onChange` - function for switch state change (`type: function`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type (`type: default style object`)
- `sliderStyles` - custom styles for the circle inside the switch (`type: default style object`)
- `labelStyles`- custom styles for the text next to the switch (`type: default style object`)
<br /><br />

## Alert
Alert props
- `secondary` - secondary style (`type: bool`)
- `fontColor` - custom font color (`type: String`)
- `backgroundColor` - custom background color (`type: String`)
- `iconColor` - custom icon color (`type: String`)
- `width`- component width (`type: String`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type (`type: default style object`)
<br /><br />

## ProgressBar
ProgressBar props
- `progress` - current progress (`type: String`)
- `barColor` - progress bar's bar color (`type: String`)
- `height` - component's height (`type: String`)
- `width` - component's width (`type: String`)
- `roundness`- component's roundness/border-radius (`type: String`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type (`type: default style object`)
<br /><br />

## Textarea
Textarea props
- `value` - input value (`type: any`)
- `disabled` - disabled style (`type: boolean`)
- `onChange` - function for state change (`type: function`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type (`type: default style object`)
- `error` - error style (`type: boolean`)
- `height` - component height (`type: String`)
- `width` - component width (`type: String`)
- `placeholder` - default input placeholder (`type: String`)
<br /><br />

## Radio
Radio props
- `checked` - check/uncheck the radio (`type: boolean`)
- `disabled` - disabled style (`type: boolean`)
- `onChange` - function for radio change (`type: function`)
- `customDescStyles` - custom styles to be inserted into the styled-components with high prority type (`type: default style object`)
- `value` - input value (`type: any`)
- `label` - radio label text (`type: String`)
- `desc` - radio description (`type: String`)
<br /><br />

## Checkbox
Checkbox props
- `checked` - check/uncheck the checkbox (`type: boolean`)
- `disabled` - disabled style (`type: boolean`)
- `onChange` - function for state change (`type: function`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type(`type: default style object`)
- `label` - checkbox label text (`type: String`)
- `mixed`- mixed style (`type: boolean`)
<br /><br />

## Tooltip
Tooltip props
- `top` - tooltip above the button flag (`type: boolean`)
- `right` - tooltip at the right of the button flag (`type: boolean`)
- `secondary` - secondary style (`type: boolean`)
- `backgroundColor` - background color (`type: String`)
- `fontColor` - font color (`type: String`)
- `width` - tooltip width (`type: String`)
- `buttonSize` - button width/height (`type: Number`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type (`type: default style object`)
<br /><br />

## Select
_For this component we are using `react-select` and customizing it, if you want to see its [docs](https://react-select.com/)_

Select props
- `id` - id of the select (`type: String`)
- `value` - object passed as [option](https://react-select.com/props#select-props) (`type: object`)
- `options` - array of options that can be selected [docs](https://react-select.com/props#select-props) (`type: array`)
- `name` - name of the select (`type: String`)
- `onChange` - function triggered when some option is clicked or removed (`type: boolean`)
- `isMultiple` - can select more than one value (`type: boolean`)
- `formatLabel` - function to format the selected label [example](https://4alltecnologia.github.io/4all-ui/?path=/story/select--custom-select-label) (`type: String`)
- `error` - style if some error ocurred on input (`type: boolean`)
- `closeMenuOnSelect` - should close menu when select after select an option (`type: boolean`)
- `customValueStyles` - object with custom styles to be applied to the value label (`type: object`)
- `canRemove` - in multiselect show button to remove selected option (`type: boolean`)
- `valueBgColor` - background color of the selected option label (`type: String`)
- `valueColor` - color color of the selected option label (`type: String`)
- `iconColor` - color of the icons (`type: String`)
- `height` - height of the select input (`type: String`)
- `optionHeight` - height of the options (`type: String`)
- `disabled` - disabled select (`type boolean`)
- `containerCustomStyles` - object with custom styles to be applied to the select container element (`type: object`)
- `optionIconColor` - option check icon's color (`type: string`)
- `dotOptions` - dot configuration object (`type: object`)
- `width` - component's width (`type: string`)
- `borderColor` - component's border color (`type: string`)
- `customPlaceholderStyles` - placeholder custom styles (`type: object`)
- `customValueContainerStyles` - value container custom styles (`type: object`)
- `customDropdownIndicatorStyles` - dropdown indicator custom styles (`type: object`)
- `isSearchable` - disables the search behavior (`type: boolean`)
<br /><br />

## ProductImage
ProductImage props
- `image` - image path (`type: String`)
- `small` - set the size to small (`type: boolean`)
- `alt` - image alt text (`type: String`)
- `title` - image title text (`type: String`)
- `size` - image size (`type: String`)
- `backgroundColor` - background color (`type: String`)
- `fontColor` - font color (`type: String`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type (`type: default style object`)
- `fontSize` - text font size (`type: String`)
- `iconSize` - icon size (`type: String`)
- `iconColor` - icon color (`type: String`)
- `emptyText` - custom text to show when there is no image (`type: String`)
- `iconOnly` - hides the empty image text (`type: boolean`)
<br /><br />

## Pagination
_For this component we are using `rc-pagination` and customizing it, if you want to see its [docs](https://www.npmjs.com/package/rc-pagination)_

Select props
- `id` - id of the pagination (`type: String`)
- `className` - class of the pagination (`type: String`)
- `pages` - number of pages (`type: Number`)
- `secondary` - apply secondary style (`type: boolean`)
- `currentPage` - current page with active style of the pagination component (`type: Number`)
- `onChangePage` - function triggered when some page or next/prev/jump is clicked  (`type: function`)
- `itemWidth` - width of every page button (`type: String`)
- `itemHeight` - height of every page button (`type: String`)
- `activeBgColor` - background-color of active page (`type: String`)
- `itemBgColor` - background-color of page not selected (`type: String`)
- `customActiveItemStyles` - object with custom styles to be applied active page (`type: object`)
- `customInactiveItemStyles` - object with custom styles to be applied page not active (`type: object`)
- `iconColor` - color of the icons (`type: String`)
- `showLessItems` - show less pages (3), the default is always 5 (`type: boolean`)
<br /><br />

## Box
Box Props
- `colSize` - number between 1 and 12 to identify the size of the box (`type: Number`)
- `colSpacing` - Number in px to put spacing between boxes (`margin-right`) (`type: Number`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type (`type: default style object`)
<br /><br />

## Theme

### Usage
```javascript
import styled from 'styled-components';
import { styles, mixins } from '4all-ui/styles';

const ContainerDiv = styled.div`
  background-color: ${styles.colors.MAIN_COLOR};
  ${mixins.flexPosition({ align: 'center', justify: 'space-between', direction: 'column' })}
`;

```

### Properties
```javascript
const theme = {
  styles: {
    fontSizes: {
      SIZE_1: '35px',
      SIZE_2: '30px',
      SIZE_3: '25px',
      SIZE_4: '20px',
      SIZE_5: '16px',
      SIZE_6: '14px',
      SIZE_7: '12px',
    },
    fontWeights: {
      BOLD: '700',
      SEMIBOLD: '600',
      NORMAL: 'normal',
    },
    fontFamily: "'Open Sans', sans-serif",
    buttons: {
      HEIGHT_SMALL: '40px',
      HEIGHT_MEDIUM: '45px',
      HEIGHT_LARGE: '50px',
    },
    colors: {
      MAIN_COLOR: '#4FA444',
      DANGER_COLOR: '#D34848',
      INFO_COLOR: '#588de7',
      HIGHLIGHT_COLOR: '#E29A09',
      GRAY_DARKER: '#333333',
      GRAY_MEDIUM: '#979797',
      GRAY_MEDIUM_3: '#a0a0a0',
      GRAY_LIGHT: '#F5F5F5',
      GRAY_LIGHT_2: '#E4E4E4',
      WHITE: '#FFFFFF',
    },
    borders: {
      RADIUS_1: '3px',
      RADIUS_ROUND: '50%',
    },
  },
  mixins: {
    flexPosition: function({ align/*(align-items)*/, justify/*(justify-content)*/, direction/*(flex-direction)*/ }) {
      /* return string to be inserted into your styled-component */
      },
    fontStyle: function(color, fontSize, fontWeight) {
      /* return string to be inserted into your styled-component */
    },
    customScrollbar: function() {
      /* return string to be inserted into your styled-component */
    },
    globalStyle: function() {
      /* return string to be inserted into your styled-component */
    }
  }
}
```
<br /><br />

## License

MIT © [4all Tecnologia](https://github.com/4alltecnologia)
