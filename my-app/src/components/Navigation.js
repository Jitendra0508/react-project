import React from "react";
// import logo from '../../src/logo.svg';
import '../components/../style.css';
import { Link } from 'react-router-dom'
 
const Navigation = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <div className="main_header">
                        <div className="logo">
                          
                                <img src="http://nettechnology.in/assets/images/logo.png" className="App-logo" alt="logo" />
                            
                        </div>
                       
                            <div className="navwar">
                                <nav>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/services">services</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">about us</Link>
                                            <Link to="/contact">contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            
                            </div>
                        
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navigation;
