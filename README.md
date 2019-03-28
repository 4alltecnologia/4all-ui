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

import { Button } from '4all-ui'

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
- `borderColor` - color of the button border (`type: String`)
- `bgColor` - background-color of the button (`type: String`)
- `disabled` - disabled style (`type: boolean`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type (`type: default style object`)
- `onClick` - function for button click event (`type: function`)
- `color` - font color of the button (`type: String`)
- `border` - border of the button (e.g.  `1px solid #ccc`)
- `secondary` - secondary style (`type: boolean`)
- `border` - border of the button (`type: string`, e.g.  `1px solid #ccc`)

## Loader
Loader props
- `size` - size of the Loader (`type: String`)
- `width` - border width of the Loader (`type: String`)
- `color` - color of the Loader (`type: String`)

## NavTabs
Component Button Props
- `secondary` - secondary styles for NavTab (`type: boolean`)
- `customStyles` - custom styles to be inserted inside styled-components with high prority (`type: default's react style object`)
- `children` - the component [NavTab](#NavTab) (type: jsx)

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

## Tabs
Component Button Props
- `secondary` - secondary styles for NavTab (`type: boolean`)
- `customStyles` - custom styles to be inserted inside styled-components with high prority (`type: default's react style object`)
- `children` - the component [Tab](#Tab) (`type: jsx`)

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

## Input
Input props
- `disabled` - disabled style (`type: boolean`)
- `error` - error style (`type: boolean`)
- `onChange` - function for input change event (`type: function`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type (`type: default style object`)
- `type` - input type (`type: string`)
- `value` - input value (`type: any`)
- `placeholder` - default input placeholder (`type: string`)
- `maxLength` - set a maximum length (`type: string`)
- `checked` - checked style (`type: bool`)

## InputCurrency
InputCurrency props
- `disabled` - disabled style (`type: boolean`)
- `error` - error style (`type: boolean`)
- `onChange` - function for input change event (`type: function`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type (`type: default style object`)
- `type` - input type (`type: string`)
- `value` - input value (`type: any`)
- `placeholder` - default input placeholder (`type: string`)
- `checked` - checked style (`type: bool`)

## Switch
Switch props
- `checked` - check/uncheck the switch (`type: boolean`)
- `disabled` - disabled style (`type: boolean`)
- `onChange` - function for switch state change (`type: function`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type(`type: default style object`)
- `sliderStyles` - custom styles for the circle inside the switch(`type: default style object`)
- `labelStyles`- custom styles for the text next to the switch(`type: default style object`)

## Textarea
Textarea props
- `value` - input value (`type: any`)
- `disabled` - disabled style (`type: boolean`)
- `onChange` - function for state change (`type: function`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type (`type: default style object`)
- `error` - error style (`type: boolean`)
- `height` - component height (`type: string`)
- `width` - component width (`type: string`)
- `placeholder` - default input placeholder (`type: string`)

## Checkbox
Checkbox props
- `checked` - check/uncheck the checkbox (`type: boolean`)
- `disabled` - disabled style (`type: boolean`)
- `onChange` - function for state change (`type: function`)
- `customStyles` - customStyles to be inserted inside styled-components with high prority type(`type: default style object`)
- `label` - checkbox label text (`type: string`)
- `mixed`- mixed style (`type: boolean`)

## License

MIT © [4all Tecnologia](https://github.com/4alltecnologia)
