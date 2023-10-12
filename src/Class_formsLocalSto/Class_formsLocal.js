import React, { Component, useState } from 'react';
import './Class_formsLocal.css';

export default class Class_formsLocal extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', contact: '', password: '' }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (e) => {
        const name=e.target.name;
        const value=e.target.value;
        this.setState({[name]:value});
        console.log(this.state);
        localStorage.setItem('User', JSON.stringify(this.state));

    }
    render() {
        const { name, email, contact, password } = this.state;
        return (
            <>
                <div>
                    <div className='container'>
                        <div id='forms-data'>
                            <h1 className='text-primary'>User Form</h1>
                            <form onSubmit={this.handleClick}>
                                <div className='row'>
                                    <div className='col-sm-12 col-md-12 col-lg-12'>
                                        <label className='form-label' htmlFor='name'>Name</label>
                                        <input className='form-control' name='name' value={name} aria-label='name' onChange={this.handleClick} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-12 col-md-12 col-lg-12'>
                                        <label className='form-label' htmlFor='email'>email</label>
                                        <input className='form-control' name='email' value={email} aria-label='email' onChange={this.handleClick} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-12 col-md-12 col-lg-12'>
                                        <label className='form-label' htmlFor='contact'>contact</label>
                                        <input className='form-control' name='contact' value={contact} aria-label='contact' onChange={this.handleClick} />
                                    </div></div>
                                <div className='row'>
                                    <div className='col-sm-12 col-md-12 col-lg-12'>
                                        <label className='form-label' htmlFor='password'>password</label>
                                        <input className='form-control' name='password' value={password} aria-label='password' onChange={this.handleClick} />
                                    </div>
                                </div>
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}                    
