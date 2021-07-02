import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {logo} from './assets/logo';

const NavIcon  =styled.div `

`
const HeaderBar  =styled.div `

`
const Logo  =styled.img `

width : 50px;
height: 50px;
`


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const closeMenu = () => {
        setOpen(false);
    };
    return (
        <HeaderBar>
            <Logo to="/Home" src={logo}/>
         {/*    <NavIcon onClick={handleClick}>
            
            </NavIcon> */}
            <ul className={open ? 'nav-links active' : 'nav-links'}>
                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={closeMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Plantpedia" className="nav-link" onClick={closeMenu}>
                        Plantpedia
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Boutique-Shops" className="nav-link" onClick={closeMenu}>
                        Boutique Shops
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Subscription" className="nav-link" onClick={closeMenu}>
                        Subscription
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Blog" className="nav-link" onClick={closeMenu}>
                        Blog
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Login" className="nav-link" onClick={closeMenu}>
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Register" className="nav-link" onClick={closeMenu}>
                        Register
                    </Link>
                </li>
            </ul>
        </HeaderBar>
    );
};
export default Navbar;