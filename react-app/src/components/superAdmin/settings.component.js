import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './navbar.component';

export default class settings extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <h1>
                inside settings Component
            </h1>
            </div>
           
        )
    }
}