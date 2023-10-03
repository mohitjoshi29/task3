import React, { useEffect } from 'react'
import AOS from 'aos'

export default function Scrolling() {
    useEffect(()=>{
        AOS.init();
    })
  return (
    <div>
      <div className='container-fluid'>
        <h2 className='h2 text-center'>Scroll to see the animation</h2>
        <div className='box' data-aos="fade-right"><h2>content</h2></div>
        <div className='box' data-aos="fade-left"><h2>content</h2></div>
        <div className='box' data-aos="fade-right"><h2>content</h2></div>
        <div className='box' data-aos="fade-left"><h2>content</h2></div>
        <div className='box' data-aos="fade-right"><h2>content</h2></div>
        <div className='box' data-aos="fade-left"><h2>content</h2></div>
        <div className='box' data-aos="fade-right"><h2>content</h2></div>
        <div className='box' data-aos="fade-left"><h2>content</h2></div>
        <div className='box' data-aos="fade-right"><h2>content</h2></div>
        <div className='box' data-aos="fade-left"><h2>content</h2></div>
        <div className='box' data-aos="fade-right"><h2>content</h2></div>
        <div className='box' data-aos="fade-left"><h2>content</h2></div>
        <div className='box' data-aos="fade-right"><h2>content</h2></div>

      </div>
    </div>
  )
}
