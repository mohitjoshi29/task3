import React, { useState } from 'react'
import './PracticeQue.css';
{/* 1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */}

{/* 2. Write a JavaScript program to print the current window contents.   */}

{/* 3.Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */}

// 4.amount: 8888;

export default function PracticeQue() {
    // 1....
    // const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    // const [date,setDate]=useState(new Date());
    // // const date=new Date();
    // const day=date.getDay();
    // const hour=date.getHours();
    // const minute=date.getMinutes();
    // // {prepad=hour>=12?`PM`:`AM`}
    // console.log(`today is : ${days[day]}`);
    // console.log(`${hour}:${minute}`);

    // 2.
    // const window_print=()=>{
    //     window.print();
    // }

    // 3.
    // const [date,setDate]=useState(new Date());
    // const month=date.getUTCMonth()+1;
    // const datey=date.getUTCDate();
    // const year=date.getFullYear();
    // console.log(`${month}/${datey}/${year}---${month}-${datey}-${year}`);
    // console.log(`${datey}/${month}/${year}---${datey}-${month}-${year}`);

    // 4.
    
    
    return (
        <div>
            {/*2.
             <h1>Window screen:</h1>
            <button onClick={window_print}>Window screen</button> */}
            {/* ************************************************* */}
            {/* <div className='container-fluid' id='webPage'>
                <div className='header'></div>
                <div className='section'>
                    <div className='row'>
                        <div id='aside' className='col-sm-12 col-md-3 col-lg-3'></div>
                        <div id='main' className='col-sm-12 col-md-9 col-lg-9'></div>
                    </div>
                    <div className='footer'></div>

                </div> 

            </div>*/}

        </div>
    )
}
