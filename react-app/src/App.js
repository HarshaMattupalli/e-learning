import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import adminList from "./components/adminList.component";
import createAdmin from "./components/createAdmin.component";
import editAdmin from "./components/editAdmin.components";
import accountsList from "./components/accountsList.component";
import leads from "./components/leads.component";
import payments from "./components/payments.component";
import settings from "./components/settings.component";


function App() {
  return (
    <Router>
        <div className ="d-flex">
      <Navbar />
      {/* <Route path='' exact component={adminList} /> */}
      <Route path='/create' exact component={createAdmin}/>
      <Route path='/edit/:id' exact component={editAdmin}/> 
      <Route path='/accounts' exact component={accountsList}></Route>  
      <Route path='/leads' exact component={leads}></Route>   
      <Route path='/payments' exact component={payments}></Route>   
      <Route path='/settings' exact component={settings}></Route>     
    </div>   
    </Router>
    
  );
}
export default App;
