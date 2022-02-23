import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter as Router} from "react-router-dom";
import AdminPanel from "./AdminPanel";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './profile.css';
// import sampleUser from './sampleuser.png';

toast.configure()
const AdminProfile = () => {
    const [SysadminID, setAdminID] = useState("");
    const [Sysusername, setUsername] = useState("");
    const [Sysemail, setEmail] = useState("");
    const [SysPassword1, setPassword1] = useState("");
    const [SysmanagerName, setManagerName] = useState("");
    const [SysbranchLocation, setBranchLocation] = useState("");
    const [SysbranchTelNumber, setBranchTelNumber] = useState("");

    useEffect(() => {
        const getUserData = async () => {
           try {
              const config = {
                 headers: {
                    Authorization: localStorage.getItem("Authorization")
                 },
  
              }
  
              await axios.get("http://localhost:8070/admins/profile", config)
  
                .then((res) => {
  
                    setAdminID(res.data.pos.SysadminID)
  
                    setUsername(res.data.pos.Sysusername)
  
                    setEmail(res.data.pos.Sysemail)
  
                    setPassword1(res.data.pos.SysPassword1)
  
                    setManagerName(res.data.pos.SysmanagerName)
  
                    setBranchLocation(res.data.pos.SysbranchLocation)
  
                    setBranchTelNumber(res.data.pos.SysbranchTelNumber)
  
                }).catch((error) => {
  
                  console.log(error.message)
  
                })
  
           } catch (error) {
  
              console.log(error.message)
  
           }
  
        }
  
        getUserData()
  
     }, [])

     const adminLogout = () =>{
        
        localStorage.removeItem('role')

        localStorage.removeItem('Authorization')

        toast.success('Log out successfuly',{position:toast.POSITION.TOP_CENTER});

        window.location = "/login"
    }

    

    return(
        <div>
          <Router>
              <AdminPanel/>
          </Router>
          <br/><br/>
        <div class="profilecontainer">
          <h1>System Admin Profile</h1>
          <div class="main-body">
            <div class="row gutters-sm">
              <div class="col-md-4 mb-5">
                <div class="card">
                  <div class="card-body">
                    <br/>
                    <div class="d-flex flex-column align-items-center text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Admin"
                        class="rounded-circle"
                        style={{width:'160px',height:'150px'}}
                      />
                      <div class="mt-4">
                        <h4>
                          {Sysusername}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Admin ID</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {SysadminID}
                        <br />
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Admin Username</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{Sysusername}</div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Admin mail</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{Sysemail}</div>
                    </div>
                    {/* <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Admin Password</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{SysPassword}</div>
                    </div> */}

                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Admin Password</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{SysPassword1}</div>
                    </div>

                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Branch Manager Name</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{SysmanagerName}</div>
                    </div>

                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Branch Location</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{SysbranchLocation}</div>
                    </div>

                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Branch Tel Number</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{SysbranchTelNumber}</div>
                    </div>
                    <hr />
                    <br />
                    <div class="row">
                          <div class="col-2">
                            <button onClick={adminLogout} class="btn btn-info " target="__blank">
                                LogOut    
                            </button>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/><br/>
      </div>
            
    );
}

export default AdminProfile;
