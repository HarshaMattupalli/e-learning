import React, { Component } from 'react';
import axios from 'axios';

const Accounts = props=>(
    <tr>
        <td>{props.account.is_active}</td>
        <td>{props.account.institute_type}</td>
        <td>{props.account.account_name}</td>
        <td>{props.account.admin_name}</td>
        <td>{props.account.admin_email}</td>
        <td>{props.account.users}</td>
        <td>{props.account.remarks}</td>
        <td>{props.account.first_name}</td>
    </tr>
)

export default class accountList extends Component {
constructor(props){
    super(props);
    this.state = {
        accountsData: []
    }
   
}
componentDidMount(){
    axios.get('http://localhost:3000/accounts')
            .then(res => {
                this.setState({
                    accountsData: res.data 
                })

            }).catch((err) => {
                console.log(err)
            })

}

accountist(){
    return this.state.accountsData.map(currentAccount => {
        return <Accounts account={currentAccount}/>;
    })

}
    render() {
        return (
            <div>
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
                            <th>Admin Name</th>
                            <th>Admin Email</th>
                            <th>Users</th>
                            <th>Remarks</th>
                            <th>Invite</th>
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
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><button >Invite</button></td>
                        </tr>
                        {this.accountist()}
                        
                    
                    </tbody>
                </table>

            </div>
        )
    }
}