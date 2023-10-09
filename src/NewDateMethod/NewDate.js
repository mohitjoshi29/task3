import React, { useRef, useState } from 'react'

export default function NewDate() {
    // const year=''
    // const month=''
    // const day=''
    const today = new Date();
    const birth=new Date(1999,2,29);
    const age=today-birth;
    console.log(new Date(age));
    // console.log(today);

    // const month = today.getMonth() + 1;
    // const day = today.getDate();
    // const year = today.getFullYear();
    // const time = today.getHours();
    // const hour = today.getMinutes();
    // const minutes = today.getMilliseconds();
    // const xyx = today.getSeconds();
    // const abc = today.getTime();

    // console.log(today,day,month,year);
    // console.log(`today date is : ${day}/${month}/${year}`);
    // console.log(`hour: ${time},minutes:${hour},MS: ${minutes},Sec: ${xyx},Time: ${abc}`);
    // const full = `today date is : ${day}/${month}/${year}`;

    // const Inputref=useRef(abc);
    // const [currentDate, setCurrentDate] = useState(full);

    // const current=()=>{
    //     Inputref.current=setCurrentDate(full);
    // }
    return (
        <div>
            {/* <h2>today's Update...</h2> */}
            {/* <input type='text' ref={Inputref}></input> */}
            {/* <button onClick={current}>onClick</button> */}
            {/* <h4>{currentDate.toString()}</h4> */}

        </div>
    )
}

// import React from 'react'

// export default function NewDate() {
//     // new Date(year,month,day,hours,minutes,seconds,ms)
    
//     for(var i=2010;i<=2050;i++){
//         var today=new Date(i,0,1);
//         if(today.getDay()==0){
//             console.log(`Sunday on 1st january: ${i}`);
//         }
//     }

//   return (
//     <div>
      
//     </div>
//   )
// }
