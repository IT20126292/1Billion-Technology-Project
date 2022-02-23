import React from 'react';
import Logo from './Resizelogo.png';
import './login.css';


function RemediNavbar() {
        return (
            <div>
            {/* top navigation bar */}
            <nav class="navbar navbar-expand-lg navbar-light fixed-top pt-1 pb-1">
            <div class="container-fluid">
                <a class="navbar-brand me-auto ms-lg-2 ms-3 text-uppercase fw-bold" href="." aria-controls="offcanvasExample">
                    <img src={Logo} alt="siteLogo"/>
                </a>
                <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#topNavBar"
                aria-controls="topNavBar"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="topNavBar">
                <form class="d-flex ms-auto">
                    <div class="input-group my-3 my-lg-0" >
                    <input type="search" class="form-control" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-primary" type="submit" id="button-addon2">
                        <i class="bi bi-search"></i>
                    </button>
                    </div>
                </form>

                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle ms-2" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-person-circle bi-10x"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href=".">Action</a></li>
                        <li><a class="dropdown-item" href=".">Another action</a></li>
                        <li>
                        <a class="dropdown-item" href=".">Something else here</a>
                        </li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            {/* <!-- top navigation bar --> */}
            </div>
        )
}

export default RemediNavbar;

