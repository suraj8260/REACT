// Homeclass.js
import React from 'react'
import Contactclass from './Contactclass'

export default function Homeclass(props) {
  // name = "Divya"
  return (
    <div>
      <h1>Hello {props.name} 
        Age is {props.age}</h1>
      <Contactclass 
      name={props.name} />
    </div>
  )
}