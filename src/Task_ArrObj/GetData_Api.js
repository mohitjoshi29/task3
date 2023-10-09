// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// export default function GetData_Api() {
//     const [data, setData] = useState([])
//     useEffect(() => {
//         axios.get("https://jsonplaceholder.typicode.com/todos/").then((res) => {
//             setData(res.data)
//         })
//     }, [])
//     return (
//         <div>
//             <div className='container' style={{ marginTop: '50px' }}>
//                 <table className='table'>
//                     <thead className='thead bg-primary text-white'>
//                         <tr>
//                             <th>userId</th>
//                             <th>id</th>
//                             <th>title</th>
//                             <th>completed</th>
//                         </tr>
//                     </thead>
//                     <tbody className='tbody'>
//                         {data.map((item, index) => {
//                             return (
//                                 <tr>
//                                     <td>{item.userId}</td>
//                                     <td>{item.id}</td>
//                                     <td>{item.title}</td>
//                                     <td>{item.completed}</td>
//                                 </tr>
//                             )
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function GetData_Api() {
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    const [data, setData] = useState([]);
    const userreff=useRef('')
    const FetchApi = () => {
        return axios.get(url).then((res) => {
            setData(res.data);
        })
    }

    useEffect(() => {
        FetchApi();
        document.title=userreff.current;
    }, [])
    return (
        <div>
            <div className='container' style={{ marginTop: '50px' }}>
                <h2 className='h2 text-primary'>get API- fetch data from server...</h2>
                <br/>
                <table className='table' ref={userreff}>
                    <thead className='thead bg-primary text-white'>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>completed</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {data.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.completed.toString()}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}



