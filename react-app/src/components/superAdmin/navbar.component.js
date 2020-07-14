import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
     
          <nav className="nav flex-column">
            <Link to='/leads' className="nav-link active">Leads</Link>
            <Link to='/accounts' className="nav-link" >Accounts</Link>
            <Link to='/payments' className="nav-link" >Payments and Invoicing</Link>
            <Link to='/settings' className="nav-link" >Settings</Link>
          </nav>
    );
  }
}

