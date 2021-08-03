import React from 'react';
import styled from 'styled-components';

const MainBox = styled.div`

`
const UserBox = styled.div`
    width: 0;
    height: 0;
    margin-left: 25vw;
`

const ProfPic = styled.img`
    width: 10vw;
    height: 20vh;
    border: 1px: solid black;
    border-radius: 50% ;
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