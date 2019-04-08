import React, { Component } from 'react'
import { API_URL } from '../config'

export default class extends Component {
    state = {
        name: '',
        email: '',
        position: ''
    }
    handleChange = (event) => {
        // console.log(event.target.name, event.target.value)
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <fieldset>
                    <legend>Create User</legend>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" 
                            name='name'
                            placeholder='Name'
                            onChange={this.handleChange}/>
                        <input type="email" 
                            name='email'
                            placeholder='Email'
                            onChange={this.handleChange}/>
                        <input type="text" 
                            name='position'
                            placeholder='Position'
                            onChange={this.handleChange}/>
                        <input type="submit" />
                    </form>
                </fieldset>
            </div>
        )
    }
}