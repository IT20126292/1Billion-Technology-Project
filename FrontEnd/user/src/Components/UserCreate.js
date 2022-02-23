import React from "react";
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import {BrowserRouter as Router} from "react-router-dom";
import AdminPanel from "./AdminPanel";

toast.configure()
class CreateAdmin extends React.Component{
    constructor(props){
        super(props);
        this.setAdminID = this.setAdminID.bind(this)
        this.setAdminUsername = this.setAdminUsername.bind(this)
        this.setAdminEmail = this.setAdminEmail.bind(this)
        this.setAdminPwd = this.setAdminPwd.bind(this)
        this.setAdminPwd1 = this.setAdminPwd1.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.saveAdmindata = this.saveAdmindata.bind(this)
        this.state = {
            adminID: '',
            username: '',
            email: '',
            Password: '',
            Password1: ''
        }
    }
    setAdminID(e){
        // console.log(e.target.value)
        this.setState({
            adminID:e.target.value
        });
    }
    setAdminUsername(e){
        this.setState({
            username:e.target.value
        });
    }
    setAdminEmail(e){
        this.setState({
            email:e.target.value
        });
    }
    setAdminPwd(e){
        this.setState({
            Password:e.target.value
        });
    }
    setAdminPwd1(e){
        this.setState({
            Password1:e.target.value
        });
    }
    handleInputChange(Event){
        const {name,value} = Event.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }
    saveAdmindata(e){
        e.preventDefault();
        console.log('successfull', this.state)
        const Admin = {
            adminID: this.state.adminID,
            username: this.state.username,
            email: this.state.email,
            Password: this.state.Password,
            Password1: this.state.Password1
        }
        if(this.state.Password === this.state.Password1){
            axios.post('http://localhost:8070/admins/newAdd',Admin).then(()=>{
                // alert("New Admin Data successfully inserted");
                toast.success('New Admin Data successfully inserted',{position:toast.POSITION.TOP_CENTER})
                this.setState({
                    adminID: '',
                    username: '',
                    email: '',
                    Password: '',
                    Password1: ''
                })
            }).catch(()=>{
                toast.warning('Required to fill all fields',{position:toast.POSITION.TOP_CENTER})
                // alert(error.message);
            });
        }else{
            toast.warning('Password Dismatch',{position:toast.POSITION.TOP_CENTER})
        }
    }

    render(){
        return(
            <div>
            <Router>
                <AdminPanel/>
            </Router>
            <br/><br/><br/>
            <div className="container2">
                <h1>Add Admin Data</h1>
                <br/>
                <form>
                <div class="mb-3">
                    <input type="text" class="form-control" id="exampleInputId" placeholder="BRANCH ID" value={this.state.adminID} onChange={this.setAdminID} required/>
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" id="exampleInputusername" placeholder="BRANCH USERNAME" value={this.state.username} onChange={this.setAdminUsername} required/>
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="BRANCH EMAIL" value={this.state.email} onChange={this.setAdminEmail} required/>
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="NEW PASSWORD" value={this.state.Password} onChange={this.setAdminPwd} required/>
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="CONFIRM PASSWORD" value={this.state.Password1} onChange={this.setAdminPwd1} required/>
                </div>
                <br/>
                <div class="row">
                    <div class="col">
                        <a className="button button-block1" href="/retrieveall" style={{textDecoration:'none'}}>
                            <i style={{textDecoration:'none'}}></i>BACK
                        </a> 
                    </div>
                    <div class="col">
                        <button type="submit" class="button button-block2" onClick={this.saveAdmindata}>SignUp</button>
                    </div>
                </div>
                </form>
            </div>    
            </div>           
        );
    }
}

export default CreateAdmin;