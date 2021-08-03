import React from "react";
import styled from "styled-components";
import bg from "../assets/bgimg/plantpediapage.png";
import PlantCards from "../components/PlantCards/PlantCards";


const ExternalFrame = styled.div`
width:100vw;
height: 100vh;
padding-top: 7vh;
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

background-color: #918EA4;
padding: 10px;
display: flex;




@media (max-width: 770px) {
    grid-template-columns: auto auto;
    height: 70vh;

}
@media (max-width: 375px) {
    grid-template-columns: auto auto ;
    height: 70vh;


}
`


const LeftDiv = styled.div`
width: 50%;
background-color: blue;
height: 100%;
border-radius: 5rem 0 0 5rem;


`

const RightDiv = styled.div`
width: 50%;
height: 100%;
border-radius: 0 5rem 5rem 0rem;

`



const Plantpedia = () => {


    return(
        <ExternalFrame>
            <InternalFrame>

                <LeftDiv>
                </LeftDiv>
                <RightDiv>
                </RightDiv>

            </InternalFrame>
        </ExternalFrame>
    )

}


export default Plantpedia;

