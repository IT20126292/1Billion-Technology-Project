import './App.css';
import CreateAdmin from './Components/CreateAdmin';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Alladmins from './Components/Alladmins';
import Admindetails from './Components/Admindetails';
import UpdateAdmin from './Components/UpdateAdmin';
import Footer from './Components/Footer';
import WelcomeToAdmin from './Components/WelcomeToAdmin';
import AdminPanel from './Components/AdminPanel';
import AdminLogin from './Components/AdminLogin';
import logreport from './Components/logreport';
import AdminProfile from './Components/adminProfile';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={WelcomeToAdmin}/>
        <Route path="/login" exact component={AdminLogin}/>
        <Route path="/home" exact component={AdminPanel}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/retrieveall" exact component={Alladmins}/>
        <Route path="/add" exact component={CreateAdmin}/>
        <Route path="/log" exact component={logreport}/>
        <Route path="/adminProfile" exact component={AdminProfile}/>
        <Route path="/posts/:id" exact component={Admindetails}/>
        <Route path="/edit/:id" exact component={UpdateAdmin}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
