# 4all-ui

> Biblioteca de componentes de UI utilizados pela 4all

[![NPM](https://img.shields.io/npm/v/4all-ui.svg)](https://www.npmjs.com/package/4all-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-eslint-brightgreen.svg)](https://www.npmjs.com/package/eslint-config-airbnb)

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
- `customStyles` - customStyles to be inserted inside styled-components with high prority type(`type: default style object`)
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
- `customStyles` - customStyles to be inserted inside styled-components with high prority type(`type: default style object`)
- `secondary` - secondary style (`type: boolean`)
## License

MIT © [4all Tecnologia](https://github.com/4alltecnologia)
