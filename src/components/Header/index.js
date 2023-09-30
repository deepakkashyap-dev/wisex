import React from "react";
import logo from '../../assets/logo.svg';
import menu from '../../assets/menu.svg';
import { Link } from "react-router-dom";
// import { MenuHeader } from "./svg";

const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = React.useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <nav className="navbar navbar-expand-lg header-hero" aria-label="Eleventh navbar example">
            <div className="container ">
                <a className="navbar-brand" href="#">
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
                <button className="navbar-toggler collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarsExample09"
                    aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false}
                    aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09" style={{}}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 header-item">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Investment opportunities</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Get Started</a>
                        </li>
                    </ul>
                    <button className="header-menu">
                        {/* <span className="px-2"><MenuHeader /></span> */}
                        <img src={menu} className=" " alt="menu" />
                        Menu
                    </button>
                </div>
            </div>
        </nav >
    );
}

export default Header;
