import React, { Component } from 'react'

import { Button } from '4all-ui'

export default class App extends Component {
  render () {
    return (
      <div>
        <Button onClick={() => console.log('click')} bgColor="#f82000" customStyles={{
          color: '#fff',
          fontSize: '40px',
          width: '400px',
        }}>Continuar</Button>
      </div>
    )
  }
}
