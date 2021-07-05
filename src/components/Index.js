import React from "react";
import logo from "../assets/logo.png";
import {
    Nav,
    NavLogo,
    ImgLogo,
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
            <NavLogo to="/Home">
            <ImgLogo src={logo}/>
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/Home" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/Plantpedia" activeStyle>
                    Plantpedia
                </NavLink>
                <NavLink to="/BoutiqueShops" activeStyle>
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