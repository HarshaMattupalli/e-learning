import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './navbar.component';


export default class payments extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <h1>
                inside payments Component
            </h1>
            </div>
           
        )
    }
}