import React, { useEffect, useState } from 'react'

export default function Stop_watch() {
    var [time, setTime] = useState(0);
    var [hour, setHour] = useState(0);
    var [minute, setMinute] = useState(0);
    var [sec, setSec] = useState(0);
    var [clear, setClear] = useState(false);
    var Interval;
    var startFun = () => {
        setClear(!clear);
    }
    useEffect(() => {
        if (clear == true) {
            Interval = setInterval(() => { setTime(time => time + 1) }, 100);
            console.log(Interval);
        }
        return () => clearInterval(Interval)
    }, [clear, time])
    var resetFun = () => {
        setTime(0);
        setHour(0);
        setMinute(0);
        setSec(0);
        setClear(false);
    }
    if (time == 10) {
        setTime(0);
        setSec(sec + 1);
    }
    if (sec == 60) {
        setSec(0);
        setMinute(minute + 1);
    }
    if (minute == 60) {
        setMinute(0);
        setHour(hour + 1);
    }
    // const setStylesProp={
    //     width:'200px',
    //     height:'200px',
    //     background:'red'
    // }
    return (
        <div>
            <div className='container' style={{ marginTop: '150px', textAlign: 'center' }}>
                <h1 className='text' style={{ fontFamily: 'Arial' }}>Stop Watch</h1>
                <h1>{`${hour}:${minute}:${sec}:${time}`}</h1>
                <button className='btn btn-success' id='btn1' onClick={startFun}>start & stop</button>
                <button className='btn btn-danger' style={{ marginLeft: '30px' }} onClick={resetFun}>Reset</button>
                <br />


                {/* ****************css styles**************** */}
                {/* css styles ... */}
                {/* <div style={setStylesProp} dangerouslySetInnerHTML={setHtml}>
                    <h1>hello this is my stopwatch component</h1>
                </div> */}
                {/* ***********onFocus elements**************88 */}
                {/* <input
                    onFocus={(e) => {
                        console.log('Focused on input');
                    }}
                    placeholder="onFocus is triggered when you click this input."
                /> */}
                {/* ************onBlur events********** */}
                {/* <input
                    onBlur={(e) => {
                        console.log('Triggered because this input lost focus');
                    }}
                    placeholder="onBlur is triggered when you click this input and then you click outside of it."
                /> */}
            </div>
        </div>
    )
}
