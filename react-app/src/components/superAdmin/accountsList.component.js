import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './navbar.component';
import { Redirect, Link } from 'react-router-dom';
require('dotenv').config();

export default class accountList extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn,
            accountsData: [],
            typeSearch: '',
            accountNameSearch: '',
            accountCodeSearch: '',
            adminNameSearch: '',
            adminEamilSearch: '',
            usersSearch: '',
            editMode: false,
            value: ''

        }
        this.typeSearchBox = this.typeSearchBox.bind(this);
        this.accountNameSearchBox = this.accountNameSearchBox.bind(this);
        this.accountCodeSearchBox = this.accountCodeSearchBox.bind(this);
        this.adminNameSearchBox = this.adminNameSearchBox.bind(this);
        this.adminEamilSearchBox = this.adminEamilSearchBox.bind(this);
        this.usersSearchBox = this.usersSearchBox.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.sendInvite = this.sendInvite.bind(this);
        this.cancelForm = this.cancelForm.bind(this);
        this.codeGenarator = this.codeGenarator.bind(this);
        this.accountActive = this.accountActive.bind(this);
        this.accountDeActive = this.accountDeActive.bind(this);
        this.changeAccountName = this.changeAccountName.bind(this);
    }
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/accounts`)
            .then(res => {
                this.setState({
                    accountsData: res.data
                })

            }).catch((err) => {
                console.log(err)
            })
    }

    accountlist() {
        return this.state.accountsData.map((currentAccount, i) => {
            return (
                <tr key={currentAccount._id}>
                    <td> <input type="checkbox" defaultChecked={currentAccount.is_active}
                        onChange={this.accountActive} />
                    </td>
                    <td>{currentAccount.institute_type}</td>

                    <td onDoubleClick={this.changeAccountName} > {this.state.editMode ?
                       
                     <input type="text" ref="updatedAccountName" onKeyDown={this.updateAccountName.bind(this)} defaultValue={currentAccount.account_name}/>
                        :
                        <div>
                            {currentAccount.account_name}
                        </div>
                    }</td>
                    <td>{currentAccount.account_code}</td>
                    <td>{currentAccount.admin_name}</td>
                    <td>{currentAccount.admin_email}</td>
                    <td>{currentAccount.users}</td>
                    <td><a>Edit Details</a></td>
                    <td><button onClick={() => this.sendInvite(currentAccount)}>Send Invite</button></td>
                </tr>)
        })
    }
    changeAccountName(e) {
    debugger;
        this.setState({
            editMode: !this.state.editMode
        })
    }
    updateAccountName(e) {
        debugger;
        if (e.key == "Enter") {
            this.setState({
                editMode: false,
                value: this.refs.updatedAccountName.value
            })
        }
    }
    accountActive(e) {
        debugger;
        console.log(`insdie actve method ${e.target.checked}`);
    }
    accountDeActive(e) {
        debugger;
        console.log(`inside deactive method`);
    }

    typeSearchBox(e) {
        this.setState({
            typeSearch: e.target.value.substr(0, 20)
        })
    }
    accountNameSearchBox(e) {

        this.setState({
            accountNameSearch: e.target.value.substr(0, 20)
        })
        this.codeGenarator();

    }
    codeGenarator(e) {
        console.log(this.state.accountNameSearch);
        var code = this.state.accountNameSearch.match(/\b(\w)/g);
        if (code != null) {
            code = code.join('');
            this.setState({
                accountCodeSearch: code
            })
        }
    }
    accountCodeSearchBox(e) {
        //this.codeGenarator();
        this.setState({
            accountCodeSearch: e.target.value.substr(0, 20)
        })
    }
    adminNameSearchBox(e) {
        this.setState({
            adminNameSearch: e.target.value.substr(0, 20)
        })
    }
    adminEamilSearchBox(e) {
        this.setState({
            adminEamilSearch: e.target.value.substr(0, 20)
        })
    }
    usersSearchBox(e) {
        this.setState({
            usersSearch: e.target.value.substr(0, 20)
        })
    }
    submitForm(e) {
        e.preventDefault();
        const account = {
            institute_type: this.state.typeSearch,
            account_name: this.state.accountNameSearch,
            account_code: this.state.accountCodeSearch,
            admin_name: this.state.adminNameSearch,
            admin_email: this.state.adminEamilSearch,
            users: this.state.usersSearch,
            created_by: this.state.created_by,
            updated_by: this.state.updated_by
        }

        axios.post(`${process.env.REACT_APP_API_BASE_URL}/accounts`, account)
            .then(res => {
                // this.setState.accountsData[0].push(account);
                this.cancelForm();
            })
    }
    sendInvite(currentAccount) {
        let inviteData = {
            admin_email: currentAccount.admin_email,
            admin_name: currentAccount.admin_name,
            id: currentAccount._id
        }
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/sendInvite`, inviteData)
            .then(res => {

            })
    }
    cancelForm(e) {
        e.preventDefault();
        this.setState({
            typeSearch: '',
            accountNameSearch: '',
            accountCodeSearch: '',
            adminNameSearch: '',
            adminEamilSearch: '',
            usersSearch: '',
            accountNameEdit: false,

        })
    }

    render() {

        // let accounts = '';
        // accounts = this.state.accountsData.filter((acc) => {
        //     return acc.institute_type.toLowerCase().indexOf(this.state.typeSearch.toLowerCase()) !== -1;
        // })

        if (this.state.loggedIn == false) {
            return <Redirect to='/' />
        }

        return (

            <div>
                <Navbar />
                <input type="text" placeholder="search" className="accountListSearch"></input>
                <div>

                    <h5 className="accountListHeading">Accounts</h5>
                    <h5 className="accountListSubHeading">Accounts-Home</h5>
                </div>
                <table className="table accountListTable">
                    <thead className="thead-light">
                        <tr>
                            <th>Status</th>
                            <th>Type</th>
                            <th>Account Name</th>
                            <th>Account Code</th>
                            <th>Admin Name</th>
                            <th>Admin Email</th>
                            <th>Users</th>
                            <th>Edit Details</th>
                            <th>Invitation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                    <label class="custom-control-label" for="customSwitch1"></label>
                                </div>
                            </td>
                            <td><input type="text" value={this.state.typeSearch} onChange={this.typeSearchBox} /></td>
                            <td> <input type="text" value={this.state.accountNameSearch} onChange={this.accountNameSearchBox} /></td>

                            <td><input type="text" value={this.state.accountCodeSearch} onChange={this.accountCodeSearchBox} /></td>
                            <td><input type="text" value={this.state.adminNameSearch} onChange={this.adminNameSearchBox} /></td>
                            <td><input type="email" value={this.state.adminEamilSearch} onChange={this.adminEamilSearchBox} /></td>
                            <td><input type="text" value={this.state.usersSearch} onChange={this.usersSearchBox} /></td>
                            <td></td>

                            <td><button onClick={this.submitForm}>ok</button><button onClick={this.cancelForm}>Cancel</button></td>

                        </tr>
                        {this.accountlist()}

                        {/* {accounts.map((currentAccount) => {
                            return <Accounts account={currentAccount} key={currentAccount._id} />
                        })} */}

                    </tbody>
                </table>

            </div>
        )
    }
}