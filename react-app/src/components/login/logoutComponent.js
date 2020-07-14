import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class logout extends Component {
    constructor(props) {
        super(props);
        localStorage.removeItem("token");
    }
    render() {
        return (
            <div>
                <h1>You have logged out </h1>
                <Link to="/">Login Again</Link>
            </div>

        )
    }
}