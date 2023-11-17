import React from 'react'

export default function Inside_Error(props) {
    if (props.name === 'jocker') {
        throw new Error("Not a Name,jocker give an error");
    }
    return (
        <div>
            {props.name}
        </div>
    )

}
