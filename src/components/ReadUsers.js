import React, { Component } from 'react'
import { API_URL } from '../config'
import SingleUser from './SingleUser'

export default class extends Component {
    state = {
        users: []
    }
    getUsers = async () => {
        await fetch(`${API_URL}/users`)
            .then((response) => response.json())
            .then((data) => data.map((user) => <SingleUser data={user}/>))
            .then((users) => this.setState({users}))
            .then(() => console.log(this.state.users))
    }
    componentDidMount(){
        this.getUsers()
    }

    render() {
        return (
            <ul>
                {this.state.users}
            </ul>
        )
    }
}