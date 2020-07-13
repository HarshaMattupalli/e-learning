import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Admin = props => (
    <tr>
        <td>{props.admin.first_name}</td>
        <td>{props.admin.last_name}</td>
        <td>{props.admin.mobile_number}</td>
        <td>
            <Link to={"/edit/" + props.admin._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteAdmin(props.admin._id) }}>Delete</a>
        </td>
    </tr>
)

export default class AdminList extends Component {
    constructor(props) {
        super(props);
        this.deleteAdmin = this.deleteAdmin.bind(this);
        this.state = {
            adminsData: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/admin')
            .then(res => {
                this.setState({
                    adminsData: res.data
                    
                })

            }).catch((err) => {
                console.log(err)
            })
    }
    deleteAdmin(id) {
        axios.delete('http://localhost:3000/admin/' + id)
            .then(res => console.log(res.data));

        this.setState({
            adminsData: this.state.adminsData.filter(el => el._id !== id)
        })
    }
    adminList() {
        return this.state.adminsData.map(currentAdmin => {
            return <Admin admin={currentAdmin} deleteAdmin={this.deleteAdmin} key={currentAdmin._id} />;
        })
    }
    render() {
        return (
            <div>
                <h3>Admins List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Mobile Number</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.adminList()}
                    </tbody>
                </table>
            </div>
        )
    }
}