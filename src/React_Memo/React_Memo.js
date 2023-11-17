import React, { useEffect, useState } from 'react'
import ReactMemo_Child from './ReactMemo_Child';

export default function React_Memo() {
    const [count,setCount]=useState(0);
    const [todos,setTodos]=useState(['todo1','todo2']);
    // var [num,setNum]=useState([12,23,33,1,2,6,4,9,8,66,5,4,3]);
    const increment=()=>{
        setCount(c=>c+1);
    }
    // var sum=0;
    // var sumElm=()=>{
    //     setNum();
    //     sum=sum+num;
    //     console.log();
    // }
    // useEffect(()=>{
    //     sumElm();
    // })
  return (
    <div>
      <ReactMemo_Child todo={todos}/>
      <ReactMemo_Child name='batman'/>
      <ReactMemo_Child name='superman'/>
      <ReactMemo_Child name='jocker'/>
      <hr/>
      count:{count}
      <button type='button' onClick={increment}>increment</button>
      {/* <button onClick={sumElm}>incr</button> */}
    </div>
  )
}
