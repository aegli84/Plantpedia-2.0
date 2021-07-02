import React from "react";
import logo from "../assets/logo.png";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavBarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
            <NavLogo to="/">
            <img src={logo}/>
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/Plantpedia" activeStyle>
                    Plantpedia
                </NavLink>
                <NavLink to="/BouttiqueShops" activeStyle>
                    Boutique Shops
                </NavLink>
                <NavLink to="/Subscription" activeStyle>
                    Subscription
                </NavLink>
                <NavLink to="/Blog" activeStyle>
                    Blog
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/sign-up">Login or Register</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
            </Nav> 
        </>
    );
};
export default Navbar;