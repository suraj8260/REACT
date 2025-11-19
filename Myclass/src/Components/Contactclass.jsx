// Contactclass.js
import React, { Component } from 'react'

export default class Contactclass extends Component {
  render() {
    return (
      <div>
        <h1>The contact saved 
        is {this.props.name}</h1>
      </div>
    )
  }
}