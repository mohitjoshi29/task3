import React, { useState } from 'react'
import Lifting from './Lifting';
export default function Lifting_Parent() {
    const [changeElm,setChangeElm]=useState('i am sharing data from child to parent(Lifting...)');
    const parentFunc=(value)=>{
        setChangeElm(value);
    }
  return (
    <div>
      <Lifting passFunc={parentFunc} value={changeElm}/>
    </div>
  )
}
