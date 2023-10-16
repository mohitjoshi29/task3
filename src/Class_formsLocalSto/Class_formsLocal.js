import React, { Component } from 'react';
import './Class_formsLocal.css';

export default class Class_formsLocal extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', contact: '', password: '' ,users:[]}
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
      componentDidMount() {
    // Fetch data from local storage when the component mounts
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      this.setState({ users: storedUsers });
    }
  }

    handleClick = (e) => {
        e.preventDefault();
        const name=e.target.name;
        const value=e.target.value;
        this.setState({[name]:value});
        console.log(this.state);
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const { name, email, contact, password,users } = this.state;
        const newUser={
            name,email,contact,password
        }
        this.setState({
            users:[...users,newUser],
            name:'',
            email:'',
            contact:'',
            password:''
        })
        localStorage.setItem('User', JSON.stringify([...users,newUser]));

    }
    render() {
        return (
            <>
                <div>
                    <div className='container'>
                        <div id='forms-data'>
                            <h1 className='text-primary'>User Form</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className='row'>
                                    <div className='col-sm-12 col-md-12 col-lg-12'>
                                        <label className='form-label' htmlFor='name'>Name</label>
                                        <input className='form-control' name='name' value={this.name} aria-label='name' onChange={this.handleClick} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-12 col-md-12 col-lg-12'>
                                        <label className='form-label' htmlFor='email'>email</label>
                                        <input className='form-control' name='email' value={this.email} aria-label='email' onChange={this.handleClick} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-12 col-md-12 col-lg-12'>
                                        <label className='form-label' htmlFor='contact'>contact</label>
                                        <input className='form-control' name='contact' value={this.contact} aria-label='contact' onChange={this.handleClick} />
                                    </div></div>
                                <div className='row'>
                                    <div className='col-sm-12 col-md-12 col-lg-12'>
                                        <label className='form-label' htmlFor='password'>password</label>
                                        <input className='form-control' name='password' value={this.password} aria-label='password' onChange={this.handleClick} />
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
// **************************************

