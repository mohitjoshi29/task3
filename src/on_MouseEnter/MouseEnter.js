import React from 'react'
import './Img/ps.jpg'
import './Img/xbox.jpg'
import './MouseEnter.css'

export default function MouseEnter() {
    let increase = (e) => {
        let inc1 = document.getElementById('div1');
        let inc2 = document.getElementById('div2');
        console.log(e.target.id);
        if (e.target.id == 'div1') {
            inc1.style.width = "80%";
            inc2.style.width = "20%";
        }
        else {
            if (e.target.id == 'div2') {
                inc2.style.width = "80%";
                inc1.style.width = "20%";
            }
        }
    }
    let decrease = (e) => {
        let inc1 = document.getElementById('div1');
        let inc2 = document.getElementById('div2');
        inc2.style.width = "50%";
        inc1.style.width = "50%";
        // console.log(e.target.id);
        // if (e.target.id == 'div1') {
        //     var inc = document.getElementById('div1');
        //     inc.style.width = "500px";
        // }
        // else {
        //     if (e.target.id == 'div2') {
        //         var inc = document.getElementById('div2');
        //         inc.style.width = "500px";
        //     }
        // }
    }
    return (
        <div>
            <div className='row'>
                <div id='div1' onMouseEnter={(e) => increase(e)} onMouseOut={(e) => decrease(e)}>
                    <h1 className='h1 text-white'>Playstation 5</h1>
                    <button className='btn'><a href='#'></a>BUY NOW</button>
                </div>
                <div id='div2' onMouseEnter={(e) => increase(e)} onMouseOut={(e) => decrease(e)}>
                    <h1 className='h1 text-white'>Xbox Series X</h1>
                    <button className='btn'><a href='#'></a>BUY NOW</button>
                </div>
            </div>
        </div>
    )
}
