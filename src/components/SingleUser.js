import React, { Component } from 'react'

export default class extends Component {
    render() {
        const user = this.props.data
        return (
            <li>
                {user.id} : {user.name} : {user.position}
            </li>
        )
    }
}