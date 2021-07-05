import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import InstagramLogo from "../assets/instagram.png";

const FooterBar = styled.div`
margin-left:auto;
margin-right:auto;
height:25vh; 
width:100vw;
background-color: black;
`;

const LeftDiv = styled.div`
height:100px;
width: 200px;
float: left;
margin-top: 8vh;
`;

const RightDiv = styled.div`
height:100px;
width: 200px;
float:right;
margin-top: 8vh;
`;

const IconsDiv = styled.div`
height:100px;
width: 200px;
margin-top: 8vh;
position-items: center;
`;

const FooterLink = styled(Link)`
    font-family: 'Monteserrat', sans-serif;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    display: flex;
    color: white;
    margin-top: 1vh;
`;


const InstaLogo = styled.img`
    width:30px;
    height: 30px;
    background-color: white;
`

const Footer = () => {
    return (
        <FooterBar>
            <LeftDiv>
                <FooterLink to="/Home" activeStyle>
                    Contact
                </FooterLink>
                <FooterLink to="/Plantpedia" activeStyle>
                    About Us
                </FooterLink>
                <FooterLink to="/BouttiqueShops" activeStyle>
                    Terms & Conditions
                </FooterLink>
            </LeftDiv>
            <RightDiv>
                <FooterLink to="/Subscription" activeStyle>
                    Impressum
                </FooterLink>
                <FooterLink to="/Blog" activeStyle>
                    FAQ
                </FooterLink>
                <FooterLink to="/Blog" activeStyle>
                    Privacy
                </FooterLink>
            </RightDiv>
            <IconsDiv>
                <InstaLogo src={InstagramLogo} alt="Instagram Logo"/>
                <InstaLogo src={InstagramLogo} alt="Instagram Logo"/>
                <InstaLogo src={InstagramLogo} alt="Instagram Logo"/>
            </IconsDiv>
            </FooterBar>
    );
};
export default Footer;