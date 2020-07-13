import React, { Component } from 'react';
import axios from 'axios';


export default class editAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            mobile_number: '',
            created_by: '',
            updated_by: ''
        }
        this.onChangeFirst_name = this.onChangeFirst_name.bind(this);
        this.onChangeLast_name = this.onChangeLast_name.bind(this);
        this.onChangeMobileNumber = this.onChangeMobileNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    componentDidMount(){
        axios.get('http://localhost:3000/admin/'+this.props.match.params.id)
        .then(res =>{
            this.setState({
                first_name : res.data.first_name,
                last_name:res.data.last_name,
                mobile_number:res.data.mobile_number

            })
        })
    }
    onChangeFirst_name(e) {
        this.setState({
            first_name: e.target.value
        })
    }
    onChangeLast_name(e) {
        this.setState({
            last_name: e.target.value
        })
    }
    onChangeMobileNumber(e) {
        this.setState({
            mobile_number: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const admin = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            mobile_number: this.state.mobile_number,
            created_by: this.state.created_by,
            updated_by: this.state.updated_by
        }
        
        console.log("data is",admin);
        axios.put('http://localhost:3000/admin'+this.props.match.params.id,admin)
        .then(res => console.log(res.data));
        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Edit Admin</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name: </label>
                        <input type="text" required  className="form-control"
                            value={this.state.first_name}
                            onChange={this.onChangeFirst_name}
                        />

                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text" required className="form-control" value={this.state.last_name}
                            onChange={this.onChangeLast_name} />
                    </div>
                    <div className="form-group">
                        <label>Mobile Number:</label>
                        <input type="text" required className="form-control" value={this.state.mobile_number}
                            onChange={this.onChangeMobileNumber} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit Admin" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}