import React, { memo } from 'react'

function ReactMemo_Child(props) {
    console.log(`child rendered...`);
    if(props.name=='jocker'){
      throw new Error('Not a name error boundaries');
    }
    return <div>{props.name}</div>
  return (
    <div>
      My Todo Element
      <hr/>
      {props.todo.map((todo,index)=>{
        return <p key={index}>{todo}</p>
      })}
    </div>
  )
}
export default memo(ReactMemo_Child);