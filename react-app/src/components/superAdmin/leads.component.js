import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './navbar.component';

export default class leads extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <h1>
                inside leads  Component
            </h1>
            </div>
           
        )
    }
}