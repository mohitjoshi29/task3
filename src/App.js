// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       add:'indore',
//       count:0
//     }
//     this.increment=this.increment.bind(this);
//     this.counnter=this.counnter.bind(this);
//   }
//   increment=()=>{
//     this.setState({add:'ujjain'});
//   }
//   counnter=(count)=>{
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   }
//   newstate=()=>{this.setState({add:'Vijay nagar'})}
//   render() {
//     // const {add,count}=this.state;
//     return (
//       <div>
//         <button className='btn btn-primary' onClick={()=>{this.setState({add:'vijay nagar'})}}>click</button>
//         {this.state.add}
//         <button className='btn btn-primary' onClick={()=>{this.setState({add:'indore'})}}>Reset</button>
//         <br/>
//         <br/>
//         <button onClick={this.increment}>click button</button>
//         {this.state.add}
//         <button onClick={this.newstate}>reset button</button>
//         <br/>
//         <br/>
//         <button onClick={this.counnter}>counter</button>
//         {this.state.count}
//       </div>
//     )
//   }
// }

import React, { useState } from 'react';
// import Forms from './Forms';
// import Forms1 from './Forms1';
// import Forms2 from './Forms2';
import './App.css';
// import Rotate_nav from './Rotate_nav';
// import rotate1 from './rotate1';
import Rotate from './Rotate';
import Scrolling from './Scrolling';
import SearchKey from './SearchKey';
import Pass_Length from './Password_Length/Pass_Length';
import Animated from './Animated_navigation/Animated';
import MouseEnter from './on_MouseEnter/MouseEnter';
import Responsive from './ResponsiveDesign/Responsive';
import Grd from './Grd/Grd'
import Flexprop from './Flexproperty/Flexprop';
import ZigZagSeries2 from './ZigZagSeries2';
import Sticky_Nav from './Sticky_Nav/Sticky_Nav';
import Chess from './Chess/Chess'
import Chess1 from './Chess1/Chess1';
import Chess2 from './Chess2/Chess2';
import Task from './Task'
import ClassCmp from './Class_Cmp/ClassCmp';
import FuncComp from './Class_Cmp/FuncComp';
import Task_ArrObj from './Task_ArrObj/Task_ArrObj';
import Arr_Of_Obj from './Task_ArrObj/Arr_Of_Obj';
import GetData_Api from './Task_ArrObj/GetData_Api';
import TwoArr from './Task_ArrObj/TwoArr';
import NewDate from './NewDateMethod/NewDate';
import Stop_watch from './StopWatch/Stop_watch';
import Lifting from './Lifting/Lifting';
import Lifting_Parent from './Lifting/Lifting_Parent';
import Class_formsLocal from './Class_formsLocalSto/Class_formsLocal';
import Reference from './Reference/Reference';
import PracticeQue from './PracticeQue/PracticeQue';
import Lifecycle from './Lifecycle/Lifecycle';
import React_Memo from './React_Memo/React_Memo';

export default function App() {
  const [form, setForm] = useState({});

  const handleData = (e) => {
    // const name = e.target.name
    // const value = e.target.value
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const userData = (e) => {
    e.preventDefault();
    console.log(form);
  }
  return (
    <div>
      {/* <!-- Button trigger modal -->*/}
      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add user Data
      </button> */}

      {/* <!-- Modal --> */}
      {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">User Form...</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">name</label>
                  <input type="text" value={form.name} class="form-control" name='name' onChange={(e) => handleData(e)} id="exampleInput" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail" class="form-label">email</label>
                  <input type="email" value={form.email} class="form-control" name='email' onChange={(e) => handleData(e)} id="exampleInputEmail" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputNumber" class="form-label">Contact</label>
                  <input type="number" value={form.contact} class="form-control" name='contact' onChange={(e) => handleData(e)} id="exampleInputNumber" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword" class="form-label">password</label>
                  <input type="password" value={form.password} class="form-control" name='password' onChange={(e) => handleData(e)} id="exampleInputPassword" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={userData}>Submit</button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Forms/> */}
      {/* <Forms1/> */}
      {/* <Forms2/> */}
      {/* <Rotate_nav/> */}
      {/* <Rotate/> */}
      {/* <Scrolling/> */}
      {/* <SearchKey/> */}
      {/* <Pass_Length/> */}
      {/* <Animated/> */}
      {/* <MouseEnter/> */}
      {/* <Responsive/> */}
      {/* <Grd/> */}
      {/* <Flexprop/> */}
      {/* <ZigZagSeries2/> */}
      {/* <Sticky_Nav/> */}
      {/* <Chess/> */}
      {/* <Chess1/> */}
      {/* <Chess2/> */}
      {/* <Task/> */}
      {/* <ClassCmp/> */}
      {/* <FuncComp/> */}
      {/* <Task_ArrObj/> */}
      {/* <Arr_Of_Obj/> */}
      {/* <GetData_Api/> */}
      {/* <TwoArr/> */}
      {/* <NewDate/> */}
      {/* <Stop_watch/> */}
      {/* <Lifting_Parent/> */}
      {/* <Class_formsLocal/> */}
      {/* <Reference/> */}
      {/* <PracticeQue/> */}
      {/* *********************** */}
      {/* <Lifecycle favorCol='yellow'/> */}
      {/* <Lifecycle/> */}
      <React_Memo/>
      </div>
  )
}

