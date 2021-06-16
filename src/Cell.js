import React, { Component } from 'react';
import alive from './BlackSquare.jpg'
import dead from './WhiteSquare.jpg'
class Cell extends React.Component {
    constructor() {
        super();
        this.state = {
            alive: true,
        }
    }

    render() {
      return (
        <img src={(this.state.alive) ? alive : dead}/>
      );
    }
  }

export default Cell