import React, { useState, useEffect, useRef } from 'react'
import './Sticky_Nav.css'

export default function Sticky_Nav() {

    // ---------****** useRef *******-----------//
    // let initialValue=0;
    // let userefer=useRef(initialValue);
    // let handleClick=()=>{
    //     userefer.current++;
    //     console.log(`clicked ${userefer.current} times`)
    // }
    // console.log('i rerendered');
    // return (
    //     <div>
    //         <button onClick={handleClick}>click</button>
    //     </div>
    // )
    // ----------*******useState*******----------//
    // let [count,setCount]=useState(0);
    // let handlefun=()=>{
    //     setCount(count+1);
    //     console.log(`clicked ${count} times`);
    // }
    // // console.log(`i rerendered ${count}`);
    // useEffect(() => {
    // console.log(`i rendered ${count}`)
    // }, [count]);
    // return(
    //     <div>
    //         <button onClick={handlefun}>click Me</button>
    //     </div>
    // )
    // -------------*****stop Watch*****--------------//

    // let [count, setCount] = useState(0);
    // let userefer = useRef(0);
    // let starthandler = () => {
    //     if (userefer.current) {
    //         return;
    //     }
    //     userefer.current = setInterval(() => setCount(count => count + 1), 1000);
    // }
    // let stophandler = () => {
    //     clearInterval(userefer.current);
    //     userefer.current = 0;
    // }
    // useEffect(() => {
    //     return () => clearInterval(userefer.current);
    // }, [])

    // return (
    //     <div>
    //         <div>
    //             Timer {count}'s
    //         </div>
    //         <div>
    //             <button onClick={starthandler}>start watch</button>
    //             <button onClick={stophandler}>stop watch</button>
    //         </div>
    //     </div>
    // )
    // ----------******access DOM Elements******-------------//
    // let userefer=useRef();
    // useEffect(()=>{
    //     let access_node=userefer.current;
    //     console.log(access_node);
    // })
    // return(
    //     <div ref={userefer}>
    //         <div>
    //             <h1>this is a typegraphy & also known as heading tag...</h1>
    //             <p>this is a paragraph tag</p>
    //             <a href='www.google.com' style={{color:'red'}}>Google</a>
    //         </div>
    //         <br/>
    //         <div>
    //             <h1>this is a typegraphy & also known as heading tag...</h1>
    //             <p>this is a paragraph tag</p>
    //             <a href='https://www.google.com' style={{color:'red'}}>Google</a>
    //         </div>
    //     </div>
    // )
    // -------******focus on input field*******---------//
    let userefer=useRef('');
    useEffect(()=>{
        console.log(userefer.current);
        userefer.current.focus();
    },[]);
    return(
        <div>
            <input type='text' ref={userefer}/>
        </div>
    )

}
