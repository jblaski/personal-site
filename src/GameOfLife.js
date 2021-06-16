import React, { Component } from 'react';
import Cell from './Cell'
class GameOfLife extends React.Component {

    constructor() {
        super();
        this.state = {
            cells: null,
            height: 10,
            width: 16,
        };
    }

    render() {
        return (
            <>
        <div>{Array(this.state.height).fill(Array(this.state.width).fill(<Cell />))}</div>
        </>
        )
    }
  }

export default GameOfLife