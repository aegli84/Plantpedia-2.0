import React, { useState } from 'react';
//import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const closeMenu = () => {
        setOpen(false);
    };
    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo">
                Logo
            </Link>
            <div onClick={handleClick} className="nav-icon">
                {/* {open ? <FiX /> : <FiMenu />} */}
            </div>
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
        </nav>
    );
};
export default Navbar;