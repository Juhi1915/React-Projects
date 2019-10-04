import React, { Component } from 'react'
import {Mycontext} from '../App';

 class Guest extends React.Component {
  render() {
    return (
      <div>
        <h3>**Guest Component**</h3>
        {/* <h5>{this.props.nm}</h5> */}
        <Mycontext.Consumer>
          {
            name =>
            <h1>{name}</h1>
          }
        </Mycontext.Consumer>
      </div>
    )
  }
}

export default Guest
