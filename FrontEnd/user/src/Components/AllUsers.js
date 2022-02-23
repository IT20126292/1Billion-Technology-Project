import React from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from "react-router-dom";
import AdminPanel from "./AdminPanel";
import './Tables.css';

toast.configure()
class Alladmins extends React.Component{
    constructor(props){
        super(props);

        this.state={
            admins:[]
        };
    }

    componentDidMount(){
        this.retrieveAdmins();
    }

    retrieveAdmins(){
        axios.get('http://localhost:8070/admins/posts').then(res=>{
            if(res.data.success){
                this.setState({
                    admins:res.data.existingAdmins
                });
                console.log(this.state.admins)   
            }
        })
    }

    onDelete(id){
        axios.delete(`http://localhost:8070/admins/post/delete/${id}`).then((res)=>{
            // alert("Delete Successfully");
            toast.success('Delete Successfully',{position:toast.POSITION.TOP_CENTER})
            this.retrieveAdmins();
        })
    }

    filterData(admins,searchKey){
        const result = admins.filter((admin)=>
            admin.username.toLowerCase().includes(searchKey)||admin.email.toLowerCase().includes(searchKey)||
            admin.adminID.includes(searchKey)
        )
        this.setState({admins:result})
    }

    handleSearchArea=(e)=>{
        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:8070/admins/posts').then(res=>{
            if(res.data.success){
                this.filterData(res.data.existingAdmins,searchKey)   
            }
        })
        console.log(e.currentTarget.value);
    }

    render(){
        return(
            <div>
                <Router>
                    <AdminPanel/>
                </Router>
                <div className="container">
                            <br/><br/><br/>
                            <table className="table1">
                                <thead className="thead1">
                                    <th className="th1">ADMIN MANAGEMENT | All Registered Admins</th>
                                    <th className="th2">
                                        <a name="report" id="reportGen" class="btn btn-primary" href="/log" role="button">
                                            <i class="fas fa-file-download"></i>&nbsp;
                                            <i style={{textDecoration:'none'}}></i>LOG REPORT
                                        </a>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a name="addAdmin" id="addAdmin" class="btn btn-primary" href="/add" role="button">
                                            <i class="fas fa-user-plus"></i>&nbsp;
                                            <i style={{textDecoration:'none'}}></i>ADD ADMIN
                                        </a>
                                    </th>
                                </thead>
                            </table>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <div class="search-box mb-2">
                                <input type="search" class="search-txt" placeholder="Type To Search..." aria-label="Search" aria-describedby="basic-addon1" onChange={this.handleSearchArea}/>
                                <label className="searchDesign">
                                    <i class="fas fa-search"></i>
                                </label>
                            </div>
                            <table className="table">
                                    <thead>
                                        <th scope="col" className="Th1">#</th>    
                                        <th scope="col" className="Th2">ID</th>
                                        <th scope="col" className="Th3">USERNAME</th>
                                        <th scope="col" className="Th4">EMAIL</th>
                                        <th scope="col" className="resizeWidth">PASSWORD</th>
                                        <th scope="col" className="Th5">ACTION</th>
                                    </thead>
                                    <tbody>
                                        {this.state.admins.map((admins,index)=>(
                                            <tr>
                                                <th scope="row">{index+1}</th>
                                                <th>{admins.adminID}</th>
                                                <th>{admins.username}</th>
                                                <th>{admins.email}</th>
                                                <th>
                                                    <div>
                                                        <input type="password" className="removeStyles" value={admins.Password1} readOnly/>
                                                        {/* <i className="far fa-eye password-icon"/> */}
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="container">
                                                        <div class="row row-cols-auto row1">
                                                            <div class="col-2">
                                                                <a className="btn btn-secondary" href={`/posts/${admins._id}`}>
                                                                    <i className="fa fa-eye"></i>
                                                                </a>
                                                            </div>
                                                            <div className="col-0">
                                                                <div className="vl"></div>
                                                            </div>
                                                            <div class="col-2">
                                                                <a className="btn btn-warning" href={`/edit/${admins._id}`}>
                                                                    <i className="fas fa-edit"></i>
                                                                </a>
                                                            </div>
                                                            <div className="col-0">
                                                                <div class="vl"></div>
                                                            </div>
                                                            <div class="col-2">
                                                                <button className="btn btn-danger" onClick={()=>this.onDelete(admins._id)}>
                                                                    <i className="fas fa-trash-alt"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                        ))}
                                    </tbody>
                            </table>
                            <br/><br/><br/>
                </div>
            </div> 
        )
    }
}

export default Alladmins;