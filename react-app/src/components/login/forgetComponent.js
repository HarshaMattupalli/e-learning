import React, { componenet, Component } from 'react';
import { Redirect,Link } from 'react-router-dom';
import axios from 'axios';
import forgetPasswordAuthenticate from './forgePasswordAuthenticate'


class forget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        var forgetPasswordData = {
            email: this.state.email
        }
        axios.put(`${process.env.REACT_APP_API_BASE_URL}/forgetPassword`, forgetPasswordData)
            .then(res => {
                this.setState({
                    otp: res.data
             
                })
            })
          
            // if (this.state.otp) {
            //     return <Redirect to="/forgetPasswordAuthenticate" />
            // }

    }

    render() {
        // if (this.state.otp) {
        //     return <otp />
        // }
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" required className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <input type="submit"  value="Verify Email" className="btn btn-primary"/>
                    </div>
                </form>
                <forgetPasswordAuthenticate  email = {this.state.email}/>
            </div>
        )
    }
}
export default forget

// class otp extends Component {
//     render() {
//         return (
//             <div className="container">

//                 <h1>otp sent to mail</h1>
//             </div>
//         )
//     }
// }