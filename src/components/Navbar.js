import React from "react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


const Nav = styled.nav`
    background: black;
    height: 62,5px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((70vw - 1000px) / 2);
    z-index: 12;
    padding-right: 50px;
`;
const NavLogo = styled(Link)`
    cursor: pointer;
`;

const ImgLogo = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: 50px;
`

const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    font-family: 'Monteserrat', sans-serif;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
    color:black;
    }
    &:hover {
    color:  #918EA4;
    }
`;

const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
    display: none;
    }
`;

const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: transparent;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: 1px solid #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
    }
`;

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