import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={ val } />)
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

const fillArray = () => {
  const row = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
  let i = 0
  let array = []
  while (i <10) {
    array.push(row)
    i++
  }
  return array
}

Matrix.defaultProps = {
  values: fillArray()
}
