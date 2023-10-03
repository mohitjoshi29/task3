import React, { useEffect, useState } from 'react'


export default function App() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [arr, setArr] = useState([]);

    const handleData = (e) => {
        setName(e.target.value)
        setEmail(e.target.value)
        setContact(e.target.value)
        setPassword(e.target.value)
    }
    const userData = (e) => {
        e.preventDefault();
        const data = { name: name, email: email, contact: contact, password:password }
        setArr(oldArray => [...oldArray, data]);
        
        console.log(name, email, contact, password);
    }
    const Delete=(ele)=>{
        setArr(arr.filter((t)=>t.index!==ele))
    }
    const update=()=>{
        
    }


    useEffect(()=>{
        console.log(arr);
    },[arr])


    return (
        <div>
            {/* <!-- Button trigger modal -->*/}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add user Data
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">User Form...</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">name</label>
                                    <input type="text" value={name} class="form-control" name='name' onChange={(e) =>setName(e.target.value)} id="exampleInput" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail" class="form-label">email</label>
                                    <input type="email" value={email} class="form-control" name='email' onChange={(e) =>setEmail(e.target.value)} id="exampleInputEmail" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputNumber" class="form-label">Contact</label>
                                    <input type="number" value={contact} class="form-control" name='contact' onChange={(e) => setContact(e.target.value)} id="exampleInputNumber" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword" class="form-label">password</label>
                                    <input type="password" value={password} class="form-control" name='password' onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={userData}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <td>name</td>
                        <td>email</td>
                        <td>contact</td>
                        <td>password</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    {arr.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                                <td>{item.password}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={Delete}>Delete</button>
                                    <button className='btn btn-success' onClick={update} style={{marginLeft:'10px'}}>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>


        </div>
    )
}

