import React, { Component } from 'react';
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import {BrowserRouter as Router} from "react-router-dom";
import RemediNavbar from "./RemediNavbar";

toast.configure()
export default class AdminLogin extends Component {

    constructor(props) {
        super(props);
        this.userLoginSubmit = this.userLoginSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)

        var showdate = new Date();
  
        this.state = {
            email: "",
            Password: "",
            loginDate: showdate.getDate() + '/' + (showdate.getMonth()+1) + '/' + showdate.getFullYear(),
            loginTime: showdate.getHours() + ':' + showdate.getMinutes() + ':' + showdate.getSeconds(),
            token: "",
            open: false
        }
    }
  
    async userLoginSubmit(e) {
        e.preventDefault()

        if(("systemadmin@gmail.com" === this.state.email) || ("systemadmin@2021" === this.state.Password)){
            const SysadminData = {
                Sysemail: this.state.email,
                SysPassword: this.state.Password,
                SysloginDate: this.state.loginDate,
                SysloginTime: this.state.loginTime
            }
            console.log(SysadminData)
            await axios.post("http://localhost:8070/admins/post/systemlogin",SysadminData).then((res) => {
    
                this.setState({
                    token: res.data.token
                })
                localStorage.setItem("Authorization", res.data.token)
                window.location = "/home"
                console.log(res.data.token);
                toast.success('System Admin Login Successfully',{position:toast.POSITION.TOP_CENTER})
    
            }).catch((err) => {
                console.log(err)
                this.setState({open: true})
                toast.error('Invalid System Admin Authentication',{position:toast.POSITION.TOP_CENTER})
            })
        }else{
            const adminData = {
                email: this.state.email,
                Password: this.state.Password,
                SysloginDate: this.state.loginDate,
                SysloginTime: this.state.loginTime
            }
            await axios.post("http://localhost:8070/admins/post/login",adminData).then((res) => {
    
                this.setState({
                    token: res.data.token
                })
                localStorage.setItem("Authorization", res.data.token)
                window.location = "/home"
                console.log(res.data.token);
                toast.success('Registration Success',{position:toast.POSITION.TOP_CENTER})
    
            }).catch((err) => {
                console.log(err)
                this.setState({open: true})
                toast.error('Invalid Sub Admin Authentication',{position:toast.POSITION.TOP_CENTER})
            })
        }
    }

    handleClose(reason) {
        if (reason === 'clickaway') {
           return;
        }
        this.setState({open: false})
    };

    render() {
        return (
            <div>
            <Router>
                <RemediNavbar/>
            </Router>
            <br/><br/><br/><br/><br/>
            <div className="LoginContainer">
                <h1>Admin Login</h1>
                <br/>
                <form>
                <div class="mb-4">
                    <input type="email" class="form-control" id="email" placeholder="EMAIL" onChange={e => this.setState({email: e.target.value})}/>
                </div>
                <div class="mb-4">
                    <input type="password" class="form-control" id="Password" placeholder="PASSWORD" onChange={e => this.setState({Password: e.target.value})}/>
                </div>
                <br/>
                <div class="row">
                    <div class="col">
                        <button type="submit" class="button button-block4" onClick={this.userLoginSubmit}>SignIn</button>
                    </div>
                </div>
                </form>
            </div>    
            </div>
        )
    }
}
