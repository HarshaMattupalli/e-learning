import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/superAdmin/navbar.component";
import adminList from "./components/adminList.component";
import createAdmin from "./components/createAdmin.component";
import editAdmin from "./components/editAdmin.components";

// super admin dashboard impots
import accountsList from "./components/superAdmin/accountsList.component";
import leads from "./components/superAdmin/leads.component";
import payments from "./components/superAdmin/payments.component";
import settings from "./components/superAdmin/settings.component";

//login
import login from './components/login/loginComponent';
import forgetPassword from './components/login/forgetComponent';
import logout from './components/login/logoutComponent';
import forgetPasswordAuthenticate from './components/login/forgePasswordAuthenticate';


import admin from './components/Admin/basicDetails'


function App() {
  return (
    <Router>
        <div className ="d-flex">
    
      {/* <Route path='' exact component={adminList} /> */}
      <Route path='/create' exact component={createAdmin}/>
      <Route path='/edit/:id' exact component={editAdmin}/> 


      {/* super admin routes */}
      <Route path='/leads' exact component={leads}></Route>   
      <Route path='/accounts' exact component={accountsList}></Route>  
      <Route path='/payments' exact component={payments}></Route>   
      <Route path='/settings' exact component={settings}></Route>
      
      
      <Route path='/' exact component={login}></Route>
      <Route path='/forgetPassword' exact component={forgetPassword}></Route>
      <Route path='/logout' exact component={logout}></Route>
      <Route path='/forgetPasswordAuthenticate' exact component={forgetPasswordAuthenticate}></Route>
      <Route path='/admin' exact component={admin}></Route>
    </div>   
    </Router>
    
  );
}
export default App;
