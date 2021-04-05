import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [userDetail, setUserDetail] = useContext(UserContext)
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container" id="border">
                    <a className="navbar-brand logo" href="/">eMarket</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ml-auto" id="navbarNav">
                        <ul className="navbar-nav ml-auto" style={{marginLeft:"auto"}}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/order">Order</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link username" href="/admin" >Admin</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link username" href="/" >{userDetail.name}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;