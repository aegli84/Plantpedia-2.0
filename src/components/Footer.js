import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import InstagramLogo from "../assets/instagram.png";

const FooterBar = styled.div`
height:25vh; 
width:100vw;
background-color: black;
`;

const LeftDiv = styled.div`
height:100px;
width: 200px;
display: flex-box;
justify-content: space-between;
`;

const RightDiv = styled.div`
height:100px;
width: 200px;
`;

const IconsDiv = styled.div`
height:100px;
width: 200px;
margin-left:10px;
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
    border-radius: 90%;
    margin: 10px;
`
const FooterContainer = styled.div`
display: flex;
padding-top: 8vh;
justify-content: space-around;
`

const Copyright = styled.h3 `
color: white;
margin-left: -3vw;
padding: 10px;
`

const Footer = () => {
    return (
        <FooterBar>
            <FooterContainer>
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

                <IconsDiv>
                    <InstaLogo src={InstagramLogo} alt="Instagram Logo"/>
                    <InstaLogo src={InstagramLogo} alt="Instagram Logo"/>
                    <InstaLogo src={InstagramLogo} alt="Instagram Logo"/>
                    <Copyright> Copyright @ PlantPedia</Copyright>
                </IconsDiv>

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
            </FooterContainer>
            </FooterBar>
    );
};
export default Footer;