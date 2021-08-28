import React from "react";
import { FiInstagram, FiGithub, FiFacebook } from "react-icons/fi"
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

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
margin-top: 20px;
@media (min-width: 340px) {
    margin-left: 10px;
}
`;
const RightDiv = styled.div`
height:100px;
width: 200px;
margin-top: 20px;
`;
const IconsDiv = styled.div`
padding:2rem 0 0 0rem;
justify-content : space-between;
text-align: center;
align-content: center;
display: inline-block;
&:hover  {
    fill: red;
}
`;
const FooterLink = styled(Link)`
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    display: flex;
    color: white;
    margin-top: 1vh;
    text-decoration: none;
    &:hover {
        color: #83A46F;
    }
    /* border-bottom: 1px solid whitesmoke; */
`;
const FooterContainer = styled.div`
display: flex;
padding-top: 4vh;
justify-content: space-around;
`
const Copyright = styled.h3 `
color: white;
margin-top: 45px;
font-weight: 400;
font-size: 1rem;
font-family: 'Montserrat', sans-serif;
`
const SocialMedia = styled.div `
display:flex;
justify-content: space-between;
.icon:hover  {
    stroke: #83A46F;
}
`


const Footer = (props) => {

    
    console.log(props);
    return (
        <FooterBar>
            <FooterContainer>
                <LeftDiv>
                    <FooterLink to="/Contact" activeStyle >
                        Contact
                    </FooterLink>
                    <FooterLink to="/AboutUs" activeStyle>
                        About Us
                    </FooterLink>
                    <FooterLink to="/TC" activeStyle>
                        Terms & Conditions
                    </FooterLink>
                </LeftDiv>
                <IconsDiv >
                    <SocialMedia >
                        <a href="https://github.com/aegli84/Plantpedia" target = "_blank" rel="noreferrer">
                            <FiInstagram  className='icon' color= "whitesmoke" size= "1.5rem" />
                        </a>
                        <a href="https://github.com/aegli84/Plantpedia" target = "_blank" rel="noreferrer">
                        <FiGithub  className='icon' color= "whitesmoke" size= "1.5rem"/>
                        </a>
                        <a href="https://github.com/aegli84/Plantpedia" target = "_blank" rel="noreferrer">
                        <FiFacebook className='icon'  color= "whitesmoke" size= "1.5rem"/>
                        </a>
                    </SocialMedia>
                    
                    <Copyright> Copyright @Plantpedia 2021</Copyright>
                    
                </IconsDiv>
                
                <RightDiv>
                    <FooterLink to="/Impressum" activeStyle>
                        Impressum
                    </FooterLink>
                    <FooterLink to="/Faqs" activeStyle>
                        FAQ
                    </FooterLink>
                    <FooterLink to="/Privacy" activeStyle>
                        Privacy
                    </FooterLink>
                </RightDiv>
                
            </FooterContainer>
            
            </FooterBar>
    );
};
export default Footer;