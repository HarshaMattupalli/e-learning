import React, { componenet, Component } from 'react';
import { Redirect, Link } from 'react-router-dom';


import axios from 'axios';


export default class login extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }

        this.state = {
            email: '',
            password: '',
            token: '',
            loggedIn: ''
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })

    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const loginData = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, loginData)
            .then(res => {
                this.setState({
                    token: res.data
                })
                console.log('token:', res.data);
                if (res.data) {
                    this.setState({
                        loggedIn: true
                    })
                    localStorage.setItem("token", res.data.token);
                    console.log('token:', res.data);
                }

            })

        //window.location = '/';
        return <Link to="/accounts"></Link>
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/accounts" />
        }
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" required className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}

                        />

                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" required className="form-control" value={this.state.password}
                            onChange={this.onChangePassword} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                    <Link to='/forgetPassword'>Forgot password?</Link>
                </form>
            </div>
        )
    }
}