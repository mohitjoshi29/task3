import React, { useState } from 'react';
import './Slider_Dynamic.css';
import img1 from './Slider_Image/img1.jpg';
import img2 from './Slider_Image/img2.jpg';
import img3 from './Slider_Image/img3.jpg';
import img4 from './Slider_Image/img4.jpg';
import img5 from './Slider_Image/img5.jpg';

export default function Slider_Dynamic() {
    const [SlideChange,setSlidechange]=useState('');

    const Handle_Event=(e)=>{
        setSlidechange(e.target.id);
        var sld=document.querySelectorAll('.Slider');
        console.log(sld);
        // console.log(index);
        sld.style.width='400px';
        if(sld==e.target.id){
            console.log(sld);
            debugger
            // var sld1=document.querySelectorAll('.Slider').value=index;
            sld.style.width='300px';
        }
        else{
            sld.style.width='50px';
        }
    }

    return (
        <>
            <div className='container'>
                <div className='Slider' id='slide1' style={{ backgroundImage: `url(${img1})` }} onClick={(e)=>{Handle_Event(e)}}>
                    <h1>mount image</h1>
                </div>
                <div className='Slider' id='slide2' style={{ backgroundImage: `url(${img2})` }} onClick={(e)=>{Handle_Event(e)}}>
                    <h1>mount image</h1>
                </div>
                <div className='Slider' id='slide3' style={{ backgroundImage: `url(${img3})` }} onClick={(e)=>{Handle_Event(e)}}>
                    <h1>mount image</h1>
                </div>
                <div className='Slider' id='slide4' style={{ backgroundImage: `url(${img4})` }} onClick={(e)=>{Handle_Event(e)}}>
                    <h1>mount image</h1>
                </div>
                <div className='Slider' id='slide5' style={{ backgroundImage: `url(${img5})` }} onClick={(e)=>{Handle_Event(e)}}>
                    <h1>mount image</h1>
                </div>
            </div>
        </>
    )
}
