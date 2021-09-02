import React from "react";
import logo from '../../assets/logo.png';
import { IconButton, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import {makeStyles} from "@material-ui/styles";

const Nav = styled.nav`
    background: black;
    height: 75px;
    width: 100vw;
    top: 0;
    display: flex;
    justify-content: space-between;
    /* padding: 0.2rem calc((70vw - 1000px) / 2); */
    z-index: 12;
    padding-right: 50px;
    position: fixed;
`;
const NavLogo = styled(Link)`
    cursor: pointer;
`;

const ImgLogo = styled.img`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin-left: 50px;
    margin-top: 5px;
@media screen and (max-width: 768px) { 
    display: none;
    }
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
    color:white;
    }
    &:hover {
    color:  #918EA4;
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

const useStyles = makeStyles(theme => ({
    badge: {
        backgroundColor: "#83a46f",
        color: 'whitesmoke',
    }
}));

const Navbar = () => {
    const activeStyle = { color: ' #918EA4' };
    const classes = useStyles();
    
    return (
        <>
            <Nav  >
            <NavLogo to="/">
                <ImgLogo src={logo}/>
            </NavLogo>
            <NavMenu>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/Plantpedia" activeStyle={activeStyle}>
                    Plantpedia
                </NavLink>
                <NavLink to="/Guides" activeStyle={activeStyle}>
                    Guides
                </NavLink>

                <NavLink to="/OurPartners" activeStyle={activeStyle}>
                    Our Partners
                </NavLink>
                <NavLink to="/Shop" activeStyle={activeStyle}>
                    Shop
                </NavLink>
                <NavLink to="/Chat" activeStyle={activeStyle}>
                    Chat Room
                </NavLink>
                <NavLink to="/Blog" activeStyle={activeStyle}>
                    Blog
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/signup">Login or Register</NavBtnLink>                
                </NavBtn>
                        <IconButton component={Link} to='/Cart' aria-label='Show cart items' color='inherit' >
                            <Badge badgeContent={0}  classes={{badge: classes.badge}}>
                                <ShoppingCart style={{ color: 'whitesmoke' }}/>
                            </Badge>
                        </IconButton>
            </NavMenu> 
            </Nav> 
        </>
    );
};


export default Navbar;