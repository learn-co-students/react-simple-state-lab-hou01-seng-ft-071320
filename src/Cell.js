import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props) {
        super()
        this.state = {
            color: props.value
        } // ...define initial state with a key of 'color' set to the 'value' prop
    }

    changeColor = () => {
        const newColor = '#333'
        this.setState({
            color: newColor
        })
    }

    render() {
        return (
        <div onClick={this.changeColor} className="cell" style={{backgroundColor: `${this.state.color}`}}>
        </div>
        )
    }
  
}