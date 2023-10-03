import React from 'react'

export default function Forms2() {
    return (
        <div className='forms2 row'>
            <div className='col-4'></div>
            <div className='col-4'>
                <div className='div3' style={{ backgroundColor: '#454276' }}>
                    <h1 className='h1' style={{color:'white', fontFamily:'sans-serif',textAlign:'center'}}>Please Login</h1>
                    <br/>
                    <label htmlFor='email'>Email</label>
                    <input type='email' className='form-control'/>
                    <br/>
                    <label htmlFor='password'>Password</label>
                    <input type='email' className='form-control'/>
                    <br/>
                    <button type='submit' className='btn'>Submit</button>
                    <br/>
                    <p className='h6' style={{color:'white'}}>Don't have an account?<a href='#'>Register</a></p>
                </div>
            </div>
            <div className='col-4'></div>

        </div>
    )
}
