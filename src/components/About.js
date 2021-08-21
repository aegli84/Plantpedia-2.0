import React from 'react';
import styled from 'styled-components';

const MainBox = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding-top: 5rem;
`

const PageHeader = styled.p`
    border: 1px solid red;
`

const AboutPage =()=> {
    return(
        <MainBox>
            <PageHeader>About Us</PageHeader>
        </MainBox>
    )
};

export default AboutPage;