import React from "react";
import { FiInstagram, FiGithub, FiFacebook } from "react-icons/fi"
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const FooterBar = styled.div`
height:25vh; 
width:100vw;
background-color: black;
@media (max-width: 768px) {
    
}

@media (max-width: 480px) {
    height:22vh; 
}
`

const LeftDiv = styled.div`
    height:100px;
    width: 200px;
    display: flex-box;
    justify-content: space-between;
    margin-top: 20px;
@media (min-width: 480px) {
    padding-left: 1rem;
}
`;
const RightDiv = styled.div`
    height:100px;
    width: 200px;
    margin-top: 20px;
@media (min-width: 480px) {
    margin-left: 1rem;
}
`;
const IconsDiv = styled.div`
    padding: 2rem 0 0 0rem;
    justify-content : space-between;
    text-align: center;
    align-content: center;
    display: inline-block;
    
`;
const FooterLink = styled(Link)`
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    display: flex;
    color: whitesmoke;
    margin-top: 1vh;
    text-decoration: none;
    &:hover {
        color: #83A46F;
    }
`;
const FooterContainer = styled.div`
    display: flex;
    padding-top: 4rem;
    justify-content: space-around;

@media (max-width: 480px) {
    height:20vh; 
    padding: 1rem;
}
`
const Copyright = styled.h3 `
    color: whitesmoke;
    margin-top: 45px;
    font-weight: 400;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
@media (max-width: 480px) {
    font-size: .8rem;
    padding: 1rem 0 0 0;
    margin-top: 3rem;
}
`
const SocialMedia = styled.div `
display:flex;
justify-content: space-between;
.icon:hover  {
    stroke: #83A46F;
}
@media (max-width: 480px) {
    margin-top: .5rem;
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
                        T & C
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
                    
                    <Copyright> Made with ❤️ in Berlin '21</Copyright>
                    
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