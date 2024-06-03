import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.png";

const Sidebar = () => {
    return (
        <aside className='aside'>
            <a href="#home" className="nav__logo">
                <img src={Logo} alt="" />
            </a>
        </aside>
    )
}

export default Sidebar