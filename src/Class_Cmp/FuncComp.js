import React, { useEffect, useState } from 'react'

export default function FuncComp() {

    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [contact, setContact] = useState('');
    var [data, setData] = useState([]);

    var handleclick = (e) => {
        e.preventDefault();
        var list = { name: name, email: email, password: password, contact: contact };
        // debugger
        setData(prev => [...prev, list]);
        // console.log(data);
    }
    var Delete_data=()=>{
        
    }
    useEffect(() => {
        console.log(data);
    }, [data])
    return (
        <div>
            <div className='container' style={{ marginTop: '20px' }}>
                <h1 className='h1 text-primary'>Form</h1>
                <form onSubmit={handleclick}>
                    <div className='row'>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <label className='form-label' htmlFor='name'>name</label>
                            <input className='form-control' type='text' value={name} name='name' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <label className='form-label' htmlFor='password'>password</label>
                            <input className='form-control' type='password' value={password} name='password' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <label className='form-label' htmlFor='email'>email</label>
                            <input className='form-control' type='email' value={email} name='email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <label className='form-label' htmlFor='contact'>contact</label>
                            <input className='form-control' type='number' value={contact} name='contact' onChange={(e) => setContact(e.target.value)} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <br />
                            <button className='btn btn-primary form-control' type='submit'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <hr/>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>name</th>
                        <th>email</th>
                        <th>password</th>
                        <th>contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.contact}</td>
                                <td>
                                    <button type='submit' className='btn btn-success'>Edit</button>
                                    <button type='submit' className='btn btn-danger' style={{marginLeft:'20px'}} onClick={Delete_data}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* // <ul key={index}>
                    //     <li>item.name</li>
                    //     <li>item.email</li>
                    //     <li>item.password</li>
                    //     <li>item.contact</li>
                    // </ul> */}
        </div>
    )
}
