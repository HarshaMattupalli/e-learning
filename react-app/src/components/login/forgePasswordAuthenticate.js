import React, { componenet, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import forgetPasswordAuthenticate from './forgePasswordAuthenticate'

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: '',
            new_password: '',
        }
        this.onChangeOtp = this.onChangeOtp.bind(this);
        this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeOtp(e) {
        this.setState({
            otp: e.target.value
        })
    }
    onChangeNewPassword(e) {
        this.setState({
            new_password: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        var forgetPasswordData = {
            otp: this.state.otp,
            password: this.state.new_password,
            email: this.props.email

        }
        axios.put(`${process.env.REACT_APP_API_BASE_URL}/forgetPassword`, forgetPasswordData)
            .then(res => {
                this.setState({
                    otp: res.data
                })
            })

    }
    render() {
        return (

            <div className="container">
                <forgetPasswordAuthenticate email={this.props.email} />
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Reset Password </label>
                    </div>
                    <div className="form-group">
                        <label>Otp: </label>
                        <input type="text" required className="form-control"
                            value={this.state.otp}
                            onChange={this.onChangeOtp} />
                    </div>
                    <div className="form-group">
                        <label>New Password: </label>
                        <input type="password" required className="form-control"
                            value={this.state.new_password}
                            onChange={this.onChangeNewPassword} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Reset Password" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        )
    }
}