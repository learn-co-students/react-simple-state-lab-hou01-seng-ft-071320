import React from 'react'

export default class Cell extends React.Component{

  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }

  changeColor = (e) => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div onClick={ this.changeColor } className="cell" style={ {backgroundColor: this.state.color } }></div>
    )
  }

}