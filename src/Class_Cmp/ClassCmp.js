import React, { Component } from 'react'

var arr = [];
export default class ClassCmp extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', password: '', contact: '' };
        this.handleclick = this.handleclick.bind(this);
    }
    handleclick = () => {
        arr.push(this.state)
        // debugger
        console.log(arr);
        // this.setState({ name:this.name, email: this.email, password:this.password, contact:this.contact});
    }
    render() {
        // const {name,email,password,contact}=this.state;
        return (
            <div>
                <br/>
                {/* name: {this.state.name}
                <br />
                email: {this.state.email}
                <br />
                password: {this.state.password}
                <br />
                contact: {this.state.contact}
                <br /> */}
                {/* <button type='submit' onClick={this.handleclick}>Change</button>
                <button type='submit' onClick={this.reset}>Reset</button> */}
                {arr.map((item,index)=>{
                    <ul key={index}>
                        <li>{item.name}</li>
                        <li>{item.email}</li>
                        <li>{item.password}</li>
                        <li>{item.contact}</li>
                    </ul>
                })}
                <form onSubmit={this.handleclick}>
                    name:<input type='text' name='name' value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
                    email:<input type='email' name='email' value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    password:<input type='password' name='password' value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}/>
                    contact:<input type='number' name='contact' value={this.state.contact} onChange={(e)=>{this.setState({contact:e.target.value})}}/>
                    <button type='submit'>Change</button>
                </form>
            </div>
        )
    }
}
