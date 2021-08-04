import React from 'react';
import styled from 'styled-components';
import AboutPage from '../../components/AboutUs/About';
import maria from '../../assets/aboutUsimg/maria.png';
import nick from '../../assets/aboutUsimg/nick.png';
import andrea from '../../assets/aboutUsimg/andrea.png';
import aboutpage from '../../assets/bgimg/aboutpage.png'

const BgContainer = styled.div `
background: url(${aboutpage});
background-repeat: no-repeat;
height: 100vh;
background-size: 80vw 100vh;
`

const Container = styled.div `
`

const Header = styled.h1 `
    width: 23vw;
    margin-top: 10px;
    padding: 1.8vw;
    margin-left: 40vw;
    text-align: center;
    color: whitesmoke;
    font-family: 'Montserrat', Sans serif;
    font-size: 3.5rem; 
`
const Box = styled.div `
    display: flex; 
    margin-left: -10vw;
`
const InfoText = styled.div `
    width: 60vw;
    height: 38vh;
    margin-left: 20vw;
    margin-top: 20vw;
    border: 1px solid black;
    background-color: grey;
    border-radius: 5px 20px 5px;
`
const Paragraph = styled.p `
    padding: 1vw;
    font-family: 'Montserrat', Sans serif;
    font-size: 1rem;
    font-weight: 300;
`
function AboutUsUi () {
    return(
<BgContainer>
    <Container>
        <Header>About Us.</Header>
            <Box>
                <div>
                    <AboutPage pic= {maria}
                            summ= "-'I always loved nature and green. Along with my passion for coding, we were able to create this platform with everyone!' "
                    />
                </div>
                <div>
                    <AboutPage pic= {nick}
                            summ= "-'I always loved nature and green. Along with my passion for coding, we were able to create this platform with everyone!' "
                    />
                </div>
                <div>
                    <AboutPage pic= {andrea}
                            summ= "-'I always loved nature and green. Along with my passion for coding, we were able to create this platform with everyone!' "
                    />
                </div>
            </Box>
            <InfoText>
                    <Paragraph>asndniducdakslchbsuzgf</Paragraph>
                </InfoText>
        </Container>
</BgContainer>
    );
}

export default AboutUsUi;
