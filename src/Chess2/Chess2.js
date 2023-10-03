import React, { useState } from 'react'
import './Chess2.css'

export default function Chess2() {
    let [inputValue, setInputValue] = useState("")
    // dynamic code statt...//
    const squares = [];
    const rows = [];
    for (let i = 0; i < 64; i++) {
        squares.push(
            <div
            key={i}
            className={`box ${i % 2 === (Math.floor(i / 8) % 2) ? 'white' : 'black'}`}
            onMouseOver={(e) => HoverNumber(e)}
            onMouseOut={(e) => mouseout(e)}
          >
            <span id='showvalue' style={{ display: 'block' }}></span>
            <span id='hidevalue' style={{ display: 'none', zIndex: '1' }}></span>
          </div>
        );
    }
    for (let i = 0; i < 8; i++) {
        debugger
        const startIndex = i * 8;
        const endIndex = startIndex + 8;
        rows.push(
          <div key={i} className='boxrow'>
            {squares.slice(startIndex, endIndex)}
          </div>
        );
      }
    // dynamic code end//

    let SubmitNumber = () => {
        if (inputValue !== "") {
            let newval = document.querySelectorAll('.boxrow div')
            newval.forEach((box, index) => {
                let inputval = inputValue.toString()
                // debugger
                let spanval = box.querySelector("#showvalue")
                let hoverSpan = box.querySelector("#hidevalue");
                spanval.innerHTML =
                    inputval.length < 5
                        ? inputval
                        : inputval.slice(0, 4) + "...";
                hoverSpan.innerHTML = inputval;
                inputValue = inputValue * 2;
            })
        }
    }
    const HoverNumber = (e) => {
        const showValue = e.currentTarget.querySelector("#showvalue");
        const hideValue = e.currentTarget.querySelector("#hidevalue");

        if (showValue && hideValue) {
            showValue.style.display = "none";
            hideValue.style.display = "block";
            hideValue.style.backgroundColor = "#33C1A7"
        }
    }
    const mouseout = (e) => {
        const showValue = e.currentTarget.querySelector("#showvalue");
        const hideValue = e.currentTarget.querySelector("#hidevalue");

        if (showValue && hideValue) {
            showValue.style.display = "block";
            hideValue.style.display = "none";
        }
    }

    return (
        <div>

            <div className='container-fluid'>
                {/* input field header starts here... */}
                <div className='userInput' style={{ display: 'inline-flex', marginLeft: '400px' }}>
                    <div class="mb-3" style={{ marginTop: '30px' }}>
                        <input type="number" class="form-control" id='inputfield' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Please Enter Number' />
                    </div>
                    <div class="mb-3" style={{ marginLeft: '40px', marginTop: '30px' }}>
                        <button type="button" class="btn btn-primary" onClick={SubmitNumber}>Save changes</button>
                    </div>
                </div>
                {/* input field header end here... */}
                <hr />
                <div className='Chess-board'>{rows}</div>
                {/* {
                        squares.map((item, index) => {
                            return (
                                index % 8 == 0 ?
                                    <div className={`box ${index % 2 == 0 ? 'white' : 'black'}`} onMouseOver={(e) => HoverNumber(e)} onMouseOut={(e) => { mouseout(e) }}>
                                        <span id='showvalue' style={{ display: "block" }}></span>
                                        <span id='hidevalue' style={{ display: "none", zIndex: "1" }}></span>
                                    </div>
                                    : null
                            )
                        })
                    } */}
                {/* static code start */}
                {/* <div className='boxrow' id='bx1'>
                        <div className='box white' id='wb1' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}}>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' id='bb1' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}}>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' id='wb2' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}}>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' id='bb2' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}}>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' id='wb3' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}}>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' id='bb3' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}}>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' id='wb4' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}}>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' id='bb4' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}}>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                    </div>
                    
                    <div className='boxrow' id='bx2'>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}}>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}}>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}}>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}}>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}}>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}}>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}}>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}}>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                    </div>
                    
                    <div className='boxrow' id='bx3'>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb9' >
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb9' >
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb10 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb10 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb11 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb11 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb12 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb12 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                    </div>
                    
                    <div className='boxrow' id='bx4'>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb13 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb13 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb14 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb14 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb15 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb15 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb16 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb16 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                    </div>
                    <div className='boxrow' id='bx5'>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb17 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb17 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb18 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb18 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb19 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb19 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb20 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb20 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                    </div>
                    
                    <div className='boxrow' id='bx6'>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb21 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb21 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb22 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb22 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb23 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb23 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb24 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb24 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                    </div>
                    
                    <div className='boxrow' id='bx7'>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb25 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb25 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb26 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb26 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb27 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb27 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb28 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb28 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                    </div>
                    
                    <div className='boxrow' id='bx8'>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb29 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb29 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb30 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb30 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb31 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb31 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box black' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='bb32 '>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1" }}></span>
                        </div>
                        <div className='box white' onMouseOver={(e)=>HoverNumber(e)} onMouseOut={(e)=>{mouseout(e)}} id='wb32'>
                            <span id='showvalue' style={{ display: "block" }}></span>
                            <span id='hidevalue' style={{ display: "none" , zIndex:"1"}}></span>
                        </div>
                    </div> */}
                {/* static code end */}
                {/* </div> */}
            </div >
        </div >
    )
}

