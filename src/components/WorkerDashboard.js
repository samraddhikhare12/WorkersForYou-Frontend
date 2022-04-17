import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import base_url from '../api/workerboot'
import axios from 'axios';
import { useNavigate } from 'react-router';
export default function WorkerDashboard() {

    return (
        <div>
            <div><h1><b><center>Worker Dashboard</center></b></h1></div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Home</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/allworker">View Workes <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/services">View Services</a>
                            </li>
                            <CButton className='mx-1 text-center' color="warning" type='button'  >logout</CButton>
                            
                        </ul>
                    </div>
                </nav>
            </div>
            <br></br>
            
        </div >
    )
}
