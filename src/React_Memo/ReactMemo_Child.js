import React, { memo } from 'react'

function ReactMemo_Child(props) {
    console.log(`child rendered...`);
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