import React from 'react';
import styled from 'styled-components';

const MainBox = styled.div`
width: 30vw;
margin: auto;
`
const UserBox = styled.div`
    height: 0;
    margin-left: 25vw;
    @media  (max-width: 770px) {
        
        @media (max-width: 377px) {
        margin-top: -35vw;
        }
`

const ProfPic = styled.img`
    width: 10vw;
    height: 20vh;
    border: 1px: solid black;
    border-radius: 50% ;
    @media (max-width: 770px) {
        width: 16vw;
        height: 13vh;
        @media(max-width: 377px) {
        width: 17vw;
        height: 8.5vh; 
        }
`
const SummaryText = styled.p`
    width: 12vw;
    margin: auto;
    margin-top: 0.8vw;
    padding: 0.5vw;
    font-family: 'Montserrat', Sans serif;
    font-size: 0.8rem;
    font-weight: 200;
    border: 1px solid grey;
    background-color: grey;
    border-radius:5px 20px 5px;
    @media (max-width: 770px) {
            margin-left: 0vw;
        @media  (max-width: 377px) {
        width: 21vw;
        height: 10vh; 
        padding: 0.3vw;
        font-size: 0.5rem;
        }
`
const AboutPage = (props) =>{
    return (
            <MainBox>
                <UserBox>
                    <div>
                        <ProfPic src={props.pic}/>
                        <SummaryText>{props.summ}</SummaryText>
                    </div>
                </UserBox>
                <div>
                </div>
            </MainBox> 
        )
};

export default AboutPage;