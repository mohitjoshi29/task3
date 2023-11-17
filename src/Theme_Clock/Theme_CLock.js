import React, { useEffect, useState } from 'react';
import './Theme_Clock.css';

export default function Theme_CLock() {
    const today = new Date();
    const mm = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];
    const dd = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`]
    const [clock, setClock] = useState('');
    const [theme, setTheme] = useState(false);
    const [hour, setHour] = useState(today.getHours());
    const [min, setMin] = useState(today.getMinutes());
    const [sec, setSec] = useState(today.getSeconds());
    const [day, setDay] = useState(mm[today.getMonth()]);
    const [month, setMonth] = useState(dd[today.getDay()]);

    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hoursForClock = hour % 12;


    const hourEl = document.querySelector('.hour')
    const minuteEl = document.querySelector('.minute')
    const secondEl = document.querySelector('.second')

    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(min, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(sec, 0, 59, 0, 360)}deg)`


    function Clock_theme() {
        if (!theme) {
            setTheme(true)
            let doc = document.getElementById('cont_fluid');
            doc.style.background = 'white';
            doc.style.color = 'black'
        }
        else {
            setTheme(false)
            let doc = document.getElementById('cont_fluid');
            doc.style.background = 'black';
            doc.style.color = 'white';
        }
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSec((s) => s + 1);

            if (sec === 59) {
                setSec(0);
                setMin((m) => m + 1);
            }

            if (min === 59) {
                setMin(0);
                setHour((h) => h + 1);
            }
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, [hour, min, sec]);

    return (
        <div className='container' id='cont_fluid'>
            <br />
            <button type='submit' onClick={Clock_theme}>
                Theme
            </button>
            <br />
            <div className="clock-container">
                <div className="clock">
                    <div className="needle hour"></div>
                    <div className="needle minute"></div>
                    <div className="needle second"></div>
                    <div className="center-point"></div>
                </div>
            </div>
            <br />
            <h1 style={{ color: theme ? 'black' : 'white' }}>Time: {`${hour}:${min < 10 ? `0${min}` : min}:${sec}`} {ampm}</h1>
            <h2 style={{ color: theme ? 'black' : 'white' }}>{`${month},${day}`}</h2>
        </div>
    )
}




