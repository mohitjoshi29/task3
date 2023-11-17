import React from 'react';
import './RandomColor.css';

export default function RandomColor() {
    let square = [];
    let rows = [];
    let color = ['red', 'green', 'blue', 'brown', 'pink', 'orange'];

    function ShowColor(e) {
        let element = e.target;
        const col = getRandomColor()
        element.style.background = col;
        element.style.boxShadow = `0 0 2px ${col}, 0 0 10px ${col}`;
    }
    function HideColor(e) {
        let element = e.target;
        element.style.boxShadow = '0 0 2px #000';
        window.setTimeout(() => {
            element.style.background = "darkslategray";
            element.style.transition= 'background-color 0.5s ease';
        }, 500);

    }
    function getRandomColor() {
        return color[Math.floor(Math.random() * color.length)]
    }

    for (let i = 0; i < 500; i++) {
        square.push(
            <div className='squareDiv' onMouseEnter={(e) => ShowColor(e)} onMouseLeave={(e) => HideColor(e)}></div>
        )
    }
    for (let i = 0; i < 20; i++) {
        const startIndex = i * 20;
        const endIndex = startIndex + 20;
        rows.push(
            <div key={i} className='boxrow'>
                {square.slice(startIndex, endIndex)}
            </div>
        );
    }
    return (
        <div className='container'>
            <div className='Chess-board'>{rows}</div>
        </div>
    )
}
