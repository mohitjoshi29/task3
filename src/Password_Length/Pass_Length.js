import React, { useEffect, useRef, useState } from 'react'
import "./Style.css"

export default function Pass_Length() {
  var passref = useRef("");
  const [pass, setPass] = useState('');
  let len = pass.length;
  const Passwordhandle = (e) => {
    setPass(e.target.value);
    console.log(pass);
    if (len == 2) {
      // var bg=document.getElementsByClassName('background');
      // bg.passref.current
      // var bg=passref.current
      let bg = document.getElementById("background");
      bg.style.filter = 'blur(10px)';
    }
    else {
      if (len == 4) {
        let bg = document.getElementById("background");
        bg.style.filter = 'blur(5px)';
      }
      else{
        if (len == 6) {
          let bg = document.getElementById("background");
          bg.style.filter = 'blur(0px)';
        }

      }
    }
  }
  //  if(len==''){
  //   // var bg=document.getElementsByClassName('background');
  //   var bg=passref.current
  //   debugger
  //   bg.style.filter='blur(20px)';
  //  }
  //  else{
  //   if(len==2){
  //     var bg=document.getElementsByClassName('background');
  //     bg.style.filter='blur(20px)'
  //   }
  //   else{
  //     if(len==4){
  //       var bg=document.getElementsByClassName('background');
  //       bg.style.filter='blur(15px)'
  //     }

  //   }
  //  }
  //  const handlechange = ()=>{
  //   debugger
  //   if(len==2){
  //     // var bg=document.getElementsByClassName('background');
  //     var bg=passref.current
  //     debugger
  //     bg.style.filter='blur(20px)';
  //    }
  //  }
  return (
    <div>
      <div className='background' id='background' ></div>
      <div className='form'>
        <br />
        <h4 className='h4'>Image password strength</h4>
        <p>change the password to see the effect</p>
        <br />
        <label htmlFor='email'>Email</label>
        <input type='email' className='form-control' value="xyz@gmail.com"></input>
        <br />
        <label htmlFor='email'>password</label>
        <input type='password' className='form-control' value={pass} name={pass} ref={passref} onChange={(e) => Passwordhandle(e)}></input>
        <br />
        <button className='btn btn-secondary'>Submit</button>
      </div>
    </div>
  )
}
