import React, { Component } from 'react'

export default class Lifecycle_Child extends Component {
    componentWillUnmount(){
        alert(`the component willunmount from parent component`);
    }
  render() {
    return (
      <div>
        <h1>i worked on class component lifecycles methods</h1>
      </div>
    )
  }
}
