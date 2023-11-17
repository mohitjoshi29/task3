import React, { Component } from 'react'

export default class Lifecycle_Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }
  componentDidCatch(error,info){
    console.log(error);
    console.log(info);
  }
  componentWillUnmount() {
    alert(`the component willunmount from parent component`);
  }
  render() {
    if(this.state.hasError){
      return <h1>"something went wrong"</h1>
    }
    return (
      <div>
        <h1>i worked on class component lifecycles methods</h1>
        {this.props.children};
      </div>
    )
  }
}
