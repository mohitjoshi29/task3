import React from 'react'

export default function Lifting(props) {
    const create_Obj_Value={
        change:'product name',
        price:'ddfsdfs',
        add:'indore'
    }
    // const create_Obj_Value='i am changing value every time....'
  return (
    <div>
        {props.value}
      {/* <button type='submit' onClick={()=>{props.passFunc("hello......")}}>lifting</button> */}
      <button type='submit' onClick={()=>{props.passFunc(create_Obj_Value)}}>lifting</button>
    </div>
  )
}
