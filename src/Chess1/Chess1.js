import React, { useState } from 'react'
import './Chess1.css'

export default function Chess1() {
  // const [inputValue, setInputValue] = useState('');
  const [values, setValues] = useState([]);
  let valarr = []
  let SubmitNumber = () => {
    debugger
    
    let inputValue = document.getElementById('inputfield').value;
    debugger
    // document.getElementById("showvalue1").innerText = inputValue

    let input1 = document.querySelectorAll('.box');
    // let input1 = document.getElementById("bx1")
    for (let j = 0; j <= input1.length; j++) {
      if (valarr.length == 0) {
        valarr.push(inputValue * 2)
      }
      else {
        valarr.push(valarr[j - 1] * 2)
      }
      // if (valarr.length == 64) {
      //   for (let i = 1; i < input1.length; i++) {
      //     document.getElementById("showvalue").innertext = valarr[i - 1]
      //   }
      // }
      // let a  = 
      // debugger
      // valarr.push(input1[i - 1].innerText * 2)
    }
    // input1.forEach((element) => {
    //   let span1=element.querySelector('.showvalue');
    //   // debugger
    //   let val=span1.innerText=input1*2;
    //   console.log(span1);
    //   console.log(val);
    // });
    // }
    // let SubmitNumber = () => {
    //   let inputValue = document.getElementById('inputfield').value;
    //   let boxes = document.querySelectorAll('.box');
    //   let valarr = [];
    //   boxes.forEach((box, index) => {
    //     let value = inputValue * 2;
    //     valarr.push(value)
    //     debugger
    //     // setValues(values.push(value))
    //     // box.querySelector('.showvalue').innerText = value;
    //   });
  }
  return (
    <div>
      <div className='container-fluid'>
        <div className='userInput row'>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <br />
            <h2>ChessBox</h2>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <br />
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              User Choice
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">User form...</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    {/* form starts */}
                    <div class="mb-3">
                      <h2>Please Enter any number</h2>
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Number</label>
                      <input type="number" class="form-control" id='inputfield' />
                    </div>
                    {/* form end */}
                  </div>
                  <div class="modal-footer">
                    {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={ResetFied}>Close</button> */}
                    <button type="button" class="btn btn-primary" onClick={SubmitNumber}>Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <br />
        <div className='Chess-board'>
          <div className='boxrow' id='bx1'>
            {Object.values(valarr).map((value, index) => {
              debugger
              return (
                <div className={`box ${index % 2 === 0 ? 'white' : 'black'}`} key={index}>
                  <span className='showvalue'>{value}</span>
                  <span className='hidevalue'></span>
                </div>
              )
            })}
          </div>
          {/* <div className='boxrow' id='bx1'>
            <div className='box white' id='wb1'>
              <span id='showvalue1'></span>
              <span id='hidevalue1'></span>
            </div>
            <div className='box black' id='bb1'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb2'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb2'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb3'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb3'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb4'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb4'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
          </div> */}
          <br />
          <div className='boxrow' id='bx2'>
            <div className='box black' id='bb5'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb5'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb6'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb6'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb7'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb7'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb8'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb8'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
          </div>
          <br />
          <div className='boxrow' id='bx3'>
            <div className='box white' id='wb9'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb9'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb10'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb10'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb11'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb11'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb12'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb12'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
          </div>
          <br />
          <div className='boxrow' id='bx4'>
            <div className='box black' id='bb13'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb13'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb14'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb14'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb15'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb15'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb16'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb16'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
          </div><br />
          <div className='boxrow' id='bx5'>
            <div className='box white' id='wb17'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb17'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb18'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb18'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb19'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb19'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb20'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb20'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
          </div>
          <br />
          <div className='boxrow' id='bx6'>
            <div className='box black' id='bb21'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb21'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb22'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb22'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb23'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb23'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb24'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb24'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
          </div>
          <br />
          <div className='boxrow' id='bx7'>
            <div className='box white' id='wb25'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb25'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb26'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb26'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb27'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb27'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb28'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb28'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
          </div>
          <br />
          <div className='boxrow' id='bx8'>
            <div className='box black' id='bb29'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb29'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb30'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb30'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb31'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb31'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box black' id='bb32'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
            <div className='box white' id='wb32'>
              <span id='showvalue'></span>
              <span className='hidevalue'></span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
