import React, { Component } from 'react'

import Tag from '4all-ui/dist/components/Tag';

export default class App extends Component {
  render () {
    return (
      <div style={{
        marginTop:'320px',
        marginLeft:'320px',
        display: 'flex',
      }}>
        <Tag showCloseIcon>Label</Tag>
        <Tag secondary>Label</Tag>
      </div>
    )
  }
}
