import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class basicDetails extends Component{
    render(){
        return(
            
           <div className="row mt-3">
               <div className="col-lg-3">
            <nav className="navbar navbar-expand-lg navbar-dark bg-light pb-5">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#chatwindow"
                    aria-controls="chatwindow" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-md-inline" id="chatwindow">

                    <ul className="navbar-nav mr-auto d-md-inline w-100">
                        <li className="mt-3">
                            <ul className="navbar-nav mr-auto d-md-inline">
                                <li className="nav-item mb-4 ">
                                    <div className="nav-link d-flex justify-content-between px-0">
                                        <span className="text-primary-50 p-0 ">
                                           
                                        </span>
                                        <a href="#" className="text-decoration-none"> <i
                                                className="far fa-bars nav-link"></i></a>
                                    </div>

                                </li>
                            </ul>
                        </li>

                        <li className="mt-3">
                            <p className="mb-0 h4 ">Dashboard</p>

                            <ul className="navbar-nav mr-auto d-md-inline">
                                <li className="nav-item ">
                                    <div className="d-flex justify-content-between px-0">
                                        <span className="text-uppercase p-0 py-1">Account Profile</span>

                                        <a href="#" className="text-decoration-none"> <i
                                                className="far fa-plus-circle ml-auto nav-link"></i></a>
                                    </div>

                                </li>
                                <li className="nav-item ">
                                    <Link to='/admin'className="py-0 px-lg-0 d-flex align-items-center">
                                        <span className="align-middle"> Basic Details</span>
                                    </Link>
                                </li>
                                <li className="nav-item mt-2">
                                    <a href="#" className="py-0 px-lg-0 d-flex align-items-center">
                                        <span className="align-middle">Defintions</span>
                                    </a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a href="#" className="py-0 px-lg-0 d-flex align-items-center">
                                        <span className="align-middle">Hipsocial</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="mt-2">
                            <ul className="navbar-nav mr-auto  d-md-inline">
                                <li className="nav-item">
                                    <div className="d-flex justify-content-between px-0">
                                        <span className=" text-uppercase p-0 py-1 mt-2">Organization</span>

                                        <a href="#" className="text-decoration-none"> <i
                                                className="far fa-plus-circle ml-auto nav-link"></i></a>
                                    </div>

                                </li>
                                <li className="nav-item ">
                                    <a href="#" className="py-0 px-lg-0 d-flex align-items-center">
                                        <span className="align-middle">Departments</span>
                                    </a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a href="#" className="py-0 px-lg-0 d-flex align-items-center">
                                        
                                        <span className="align-middle">Subjects&Activities</span>
                                    </a>
                                </li>
                                
                                <li className="nav-item mt-2">
                                    <a href="#" className=" py-0 px-lg-0 d-flex align-items-center">
                                        <span className="align-middle">Time&Calendar</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="mt-2">
                            <ul className="navbar-nav mr-auto  d-md-inline">
                                <li className="nav-item">
                                    <div className="d-flex justify-content-between px-0">
                                        <span className=" text-uppercase p-0 py-1 mt-2">Master data</span>

                                        <a href="#" className="text-decoration-none"> <i
                                                className="far fa-plus-circle ml-auto nav-link"></i></a>
                                    </div>

                                </li>
                                <li className="nav-item ">
                                    <a href="#" className="py-0 px-lg-0 d-flex align-items-center">
                                        <span className="align-middle">Students</span>
                                    </a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a href="#" className="py-0 px-lg-0 d-flex align-items-center">
                                        <span className="align-middle">Staff</span>
                                    </a>
                                </li>
                                
                            </ul>
                        </li>

                        <li className="mt-5 pt-5">
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
 
        <div class="col-sm-12 col-lg-9">
            <div class="form-group mb-0">
               
                <h4 class="text-dark">Basic details</h4>

            </div>


            <div class="row border-bottom">
                <div class="col-md-3">
                    <img alt="image" class="rounded-circle"
                        src="https://asset1.basecamp.com/2315212/people/17056524/photo/avatar.96.gif" height="40"
                        width="40" />
                </div>
                <div class="col-sm-12 col-md-9">
                    <div class="media align-items-center">

                        <div class="media-body ">
                            <h5>Brillirant school</h5>
                            
                        </div>
                    </div>


                    <div>
                   
                        <ul class="list-group p-0">
                            <li class="list-group-item border-0 py-1 px-0">
                                <p class="small mb-0"><span class="text-muted">Plot No : </span> <span>15 </span>
                                </p>
                            </li>
                            <li class="list-group-item border-0 py-1 px-0">
                                <p class="small mb-0"><span class="text-muted">Street : </span> <span>
                                        one</span></p>
                            </li>
                            <li class="list-group-item border-0 py-1 px-0">
                                <p class="small mb-0"><span class="text-muted">Landmark: </span> <span>
                                        </span></p>
                            </li>
                            <li class="list-group-item border-0 py-1 px-0">
                                <p class="small mb-0"><span class="text-muted">phone : </span> <span></span>
                                </p>
                            </li>
                            <li class="list-group-item border-0 py-1 mt-4 px-0">
                                <p class="small mb-0"><span class="text-muted">www.google.com : </span>
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div class="row small  border-bottom">
            <h6 class="text-dark">Account Details</h6>
                <div class="col-sm-12 col-md-12 pl-0">

                    <ul class="list-group border-0">
                        <li class="list-group-item  border-0"><span class="text-muted mr-2">Account Name:</span>Insti
                        </li>
                        <li class="list-group-item border-0"><span class="text-muted mr-2">Account Code:</span>ABc
                            2018
                        </li>
                        <li class="list-group-item border-0"><span class="text-muted mr-2">Account Type:</span>
                            2018
                        </li>
                        <li class="list-group-item border-0"><span class="text-muted mr-2">Current Plan</span></li>
                        <li class="list-group-item border-0"><span class="text-muted mr-2">Attending Count:</span>0
                            <span class="ml-4"> <a href="#">Update now</a></span> </li>
                    </ul>
                </div>
            </div>

            <div class="row ">
            <h6 class="text-dark">Admin details</h6>
                <div class="col-sm-12 col-md-4">
                    <div class="card my-4 shadow-sm">
                        <div class="card-body">
                            <div class="d-flex justify-content-between mb-4">
                                <div class="media align-items-center">
                                    <a href="#"><i class="fas fa-star mr-1 text-warning"></i></a>
                                    <div class="media-body ml-1">
                                        <h6>Ram chandra</h6>
                                        <h6 class="card-subtitle mb-0 text-muted small">9122442552</h6>
                                    </div>

                                </div>
                                <i class="far fa-ellipsis-h fa-sm"></i>
                            </div>

                            <span class="text-muted small">August 2 1985 08:30 PM</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class="card my-4 shadow-sm">
                        <div class="card-body">
                            <div class="d-flex justify-content-between mb-4">
                                <div class="media align-items-center">
                                    <a href="#"><i class="fas fa-star mr-1 text-warning"></i></a>
                                    <div class="media-body ml-1">
                                        <h6>Ram chandra</h6>
                                        <h6 class="card-subtitle mb-0 text-muted small">9122442552</h6>
                                    </div>

                                </div>
                                <i class="far fa-ellipsis-h fa-sm"></i>
                            </div>

                            <span class="text-muted small">August 2 1985 08:30 PM</span>
                        </div>
                    </div>
                </div>
              
            </div>

        </div>
           </div>
           
        )
    }
}