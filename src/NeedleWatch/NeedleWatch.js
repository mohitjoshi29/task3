import React, { useEffect } from 'react';
import './NeedleWatch.css';

export default function NeedleWatch() {
    // const [time, setTime] = useState(new Date());
    // const [month, setMonth] = useState(time.getMonth());
    // const [day, setDay] = useState(time.getDay());
    // const [date, setDate] = useState(time.getDate());
    // const [hours, setHours] = useState(time.getHours());
    // const hoursForClock = hours % 12
    // const [minutes, setMinutes] = useState(time.getMinutes());
    // const [seconds, setSeconds] = useState(time.getSeconds());
    useEffect(() => {
        const hourEl = document.querySelector('.hour')
        const minuteEl = document.querySelector('.minute')
        const secondEl = document.querySelector('.second')
        const timeEl = document.querySelector('.time')
        const dateEl = document.querySelector('.date')
        const toggle = document.querySelector('.toggle')

        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        function setTime() {
            const time = new Date();
            const month = time.getMonth()
            const day = time.getDay()
            const date = time.getDate()
            const hours = time.getHours()
            const hoursForClock = hours % 12
            const minutes = time.getMinutes()
            const seconds = time.getSeconds()
            const ampm = hours >= 12 ? 'PM' : 'AM'

            hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
            minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
            secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

            timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
            dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
        }
        const scale = (num, in_min, in_max, out_min, out_max) => {
            return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        }

        setTime()

        setInterval(setTime, 1000)
    }, [])
    return (
        <div className='container-fluid'>
            <div className="clock-container">
                <div className="clock">
                    <div className="needle hour"></div>
                    <div className="needle minute"></div>
                    <div className="needle second"></div>
                    <div className="center-point"></div>
                </div>

                <div className="time"></div>
                <div className="date"></div>
            </div>

        </div>
    )
}
