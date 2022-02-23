import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router} from "react-router-dom";
import AdminPanel from "./AdminPanel";
import './Styles.css';
import './Tables.css';

class Admindetails extends React.Component{
    constructor(props){
        super(props);

        this.state={
            admins:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8070/admins/posts/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    admins:res.data.search
                });
                console.log(this.state.admins);
            }
        });
    }

    render(){
        const {adminID,username,email,Password1} = this.state.admins;
        return(
            <div>
            <Router>
                <AdminPanel/>
            </Router>
            <br/><br/><br/>
            <div className="container">
                <table className="table1">
                        <thead className="thead1">
                            <th className="th1">ADMIN MANAGEMENT</th>
                        </thead>
                </table>
                <div className="Viewcontainer">
                <h2>Add Admin Data</h2>
                <form>
                    <div class="row mb-2">
                        <label for="adminid3" className="col-sm-0 col-form-label">Admin ID</label>
                        <div class="col-sm-12">
                        <input type="text" className="form-control" id="adminid3" value={adminID} readOnly/>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label for="username3" className="col-sm-0 col-form-label">Username</label>
                        <div class="col-sm-12">
                        <input type="text" className="form-control" id="username3" value={username} readOnly/>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label for="inputEmail3" className="col-sm-0 col-form-label">Email</label>
                        <div class="col-sm-12">
                        <input type="email" className="form-control" id="inputEmail3" value={email} readOnly/>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label for="inputPassword3" className="col-sm-0 col-form-label">Password</label>
                        <div class="col-sm-12">
                        <input type="text" className="form-control" id="inputPassword3" value={Password1} readOnly/>
                        {/* <span className="eye">
                            <i id="hide1" class="far fa-eye"></i>
                            <i id="hide2" class="far fa-eye-slash"></i>
                        </span> */}
                        {/* <script>
                            function myFunction() {
                                var x = document.getElementById("inputPassword3");
                            }
                        </script> */}
                        </div>
                    </div>
                    <br/>
                    <a className="btn btn-success" href="/retrieveall">
                        <i className="fas fa-arrow-left"></i>&nbsp;BACK
                    </a>
                </form>   
                </div>
            </div>
            </div>
        )
    }
}

export default Admindetails;