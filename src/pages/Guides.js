import React from "react";
import styled from "styled-components";
import bg from "../assets/bgimg/guidepage.png";
import WateringButton from "../components/plantpedia/WateringButton";
import SoilTypes from "../components/plantpedia/SoilTypes";
import PestControl from "../components/plantpedia/PestControl";
import LiveChat from "../components/plantpedia/LiveChat";
import LightTips from "../components/plantpedia/LightTips";
import HumidityTips from "../components/plantpedia/HumidityTips";

const ExternalFrame = styled.div`
width:100vw;
height: 100vh;
padding-top: 20vh;
padding-bottom: 7vh;
background-image:url(${bg});
background-size: cover;
background-repeat:no-repeat;
@media (max-width: 340px) {
    height: 75vh;
}
@media (max-width: 770px) {
    height: 80vh;
}
`
const InternalFrame = styled.div`
width:80vw;
height: 70vh;
margin: auto ;
border-radius: 5rem;
box-shadow: 0 0 20px black;
justify-content: space-around; 
display: grid;
grid-template-columns: auto auto auto;
background-color: #918EA4;
padding: 10px;


@media (max-width: 770px) {
    grid-template-columns: auto auto;
    height: 70vh;

}
@media (max-width: 375px) {
    grid-template-columns: auto auto ;
    height: 70vh;


}
`

const Guides = () => {

    return(
        <ExternalFrame>
            <InternalFrame>
                <WateringButton/>
                <LightTips/>
                <PestControl/>
                <SoilTypes/>
                <HumidityTips/>
                <LiveChat/>
            </InternalFrame>
        </ExternalFrame>
    )

}

export default Guides;