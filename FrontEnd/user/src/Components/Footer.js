import React, { Component } from 'react';
import './style.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="text-dark fixed-bottom pt-0 pb-0">
                    <div className="container text-center text-md-left">
                        <div className="row text-center text-md-left">
                            <div className="col-md-3 col-lg-3 col-xl-8 mx-auto mt-3">
                                <p className="footerpara"><b>Copyright © 2021 | All Rights Reserved | Healthymart Pharmacy</b></p>
                            </div>
                        </div>
                    </div>
                    
                </footer>
            </div>
        )
    }
}
