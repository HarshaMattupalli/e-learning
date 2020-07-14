import React, { componenet, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',

        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    
    onSubmit(e) {
        e.preventDefault();

        const forgetEmail = {
            email: this.state.email,

        }

    }

    render() {
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
                        <input type="submit" value="verify email" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}