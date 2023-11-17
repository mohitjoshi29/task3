import React, { Component } from 'react'
import Lifecycle_Child from './Lifecycle_Child';
import Inside_Error from './Inside_Error';

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    // this.state={favoriteColor:'red'};
    this.state = { show: true };
    // this.changeColor=this.changeColor.bind(this);
  }
  // it execute when the state and props value changed before rendered...
  // static getDerivedStateFromProps(props,state){
  //     return {favoriteColor:props.favorCol}
  // }

  // shouldComponentUpdate(){
  //     return false;
  // }

  // componentDidMount(){
  //     setTimeout(()=>{this.setState({favoriteColor:'green'})},2000)
  // }

  // getSnapshotBeforeUpdate(preProps,preStates){
  //     document.getElementById('div1').innerHTML=`before updation favorite color is:`+preStates.favoriteColor;
  // }
  // componentDidUpdate(){
  //     document.getElementById('div2').innerHTML=`the favorite color after updation :`+this.state.favoriteColor;

  // }

  // changeColor=()=>{
  //     setTimeout(()=>{this.setState({favoriteColor:'blue'})},3000)
  // }
  deleteBtn = () => {
    this.setState({ show: false });
  }

  render() {
    let MyHeader;
    if (this.state.show) {
      MyHeader = <Lifecycle_Child />
    }
    return (
      <div>
        {MyHeader}
        <h1>this is the favourite colour: {this.state.favoriteColor}</h1>
        <button type='button' onClick={this.changeColor}>changeColor</button>
        <button type='button' onClick={this.deleteBtn}>delete</button>
        <div id='div1'></div>
        <div id='div2'></div>
        {/* *******************Error Boundaries******************** */}
        <Lifecycle_Child>
          <Inside_Error name='batman' />
        </Lifecycle_Child>
        <Lifecycle_Child>
          <Inside_Error name='superman' />
        </Lifecycle_Child>
        <Lifecycle_Child>
          <Inside_Error name='jocker' />
        </Lifecycle_Child>
      </div>
    )
  }
}
