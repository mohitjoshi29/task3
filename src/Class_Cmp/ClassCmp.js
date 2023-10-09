import React, { Component } from 'react'

// var arr = [];
export default class ClassCmp extends Component {
    constructor(props) {
        super(props);
        this.state = { details: { name: '', email: '', password: '', contact: '' }, arr: [] };
        this.handleclick = this.handleclick.bind(this);
    }
    handleclick = (e) => {
        e.preventDefault();
        console.log(this.state.details);
        this.setState((prevState) => ({
            arr: [...prevState.arr, { ...prevState.details }],
        }))
       
        console.log(this.state.arr);
    }
    render() {
        return (
            <div>
                <br />
                <form onSubmit={this.handleclick}>
                    name:<input type='text' name='name' value={this.state.details.name} onChange={(e) => {
                        this.setState(prevState => ({
                            details: {                   // object that we want to update
                                ...prevState.details,
                                name: e.target.value
                            }
                        }))
                    }} />
                    email:<input type='email' name='email' value={this.state.email} onChange={(e) => {
                        this.setState(prevState => ({
                            details: {                   // object that we want to update
                                ...prevState.details,    // keep all other key-value pairs
                                email: e.target.value
                            }
                        }))
                    }} />
                    password:<input type='password' name='password' value={this.state.password} onChange={(e) => {
                        this.setState(prevState => ({
                            details: {                   // object that we want to update
                                ...prevState.details,    // keep all other key-value pairs
                                password: e.target.value
                            }
                        }))
                    }} />
                    contact:<input type='number' name='contact' value={this.state.contact} onChange={(e) => {
                        this.setState(prevState => ({
                            details: {                   // object that we want to update
                                ...prevState.details,
                                contact: e.target.value
                            }
                        }))
                    }} />
                    <button type='submit'>Change</button>
                </form>


                {this.state.arr.map((item, index) => {
                    return (
                        <ul key={index}>
                            <li>{item.name}</li>
                            <li>{item.email}</li>
                            <li>{item.password}</li>
                            <li>{item.contact}</li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}
