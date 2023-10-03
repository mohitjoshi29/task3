import React, { useState } from 'react'
import './AnimatedStyle.css'

export default function Animated() {
    const [bttn, setBttn] = useState(false)
    let closehandle = () => {
        setBttn(false)
        // var navigate=document.getElementById('navigation');
        // var ul=document.getElementsByName('ul');
        // var btn=document.getElementById('open');
        // navigate.style.width='0px';
        // ul.style.width='0px';
        // btn.style.width='40px';
    }
    let openhandle = () => {
        setBttn(true)
    }
    return (
        <div>
            <div className='container-fluid'>
                <div id='upper'></div>
                {bttn ?
                    <nav id='navigation'>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Services</li>
                            <button id="close" onClick={closehandle}>
                                <i class="fas fa-times"></i>
                            </button>
                        </ul>
                    </nav> :
                    <div id='navigate'>
                        <button id="open" onClick={openhandle}>
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                }
                <div id='lower'></div>
            </div>
        </div>

    )
}
