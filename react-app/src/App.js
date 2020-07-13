import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import adminList from "./components/adminList.component";
import createAdmin from "./components/createAdmin.component";
import editAdmin from "./components/editAdmin.components";


function App() {
  return (
    <Router>
        <div className ="container">
      <Navbar />
      <Route path='' exact component={adminList} />
      <Route path='/create' exact component={createAdmin}/>
      <Route path='/edit/:id' exact component={editAdmin}/>     
    </div>   
    </Router>
    
  );
}
export default App;
