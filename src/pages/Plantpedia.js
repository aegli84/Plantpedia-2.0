import React from "react";
import styled from "styled-components";
import bg from "../assets/bgimg/plantpediapage.png";
import plants from "../components/plantpedia/plantpediaAssets/plantpediaData";
import PlantCard from "../components/PlantCards/PlantCard";
import { Dropdown, Selection } from 'react-dropdown-now';
import "../components/plantpedia/plantpediaAssets/style.css";
import { useState } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import CarouselPics from "../components/plantpedia/plantpediaAssets/carousel";



const ExternalFrame = styled.div`
width:100vw;
height: 100vh;
padding-top: 15vh;
padding-bottom: 7vh;
background-image:url(${bg});
background-size: cover;
background-repeat:no-repeat;
text-align: center;
@media (max-width: 770px) {
    height: 85vh;
}

@media (max-width: 380px) {
    height: 155vh;
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
@media (max-width: 377px) {
    grid-template-columns: auto;
    height: 1100px;


}
`


const LeftDiv = styled.div`
width: 50%;
height: 100%;
border-radius: 5rem 0 0 5rem;
overflow:hidden;
@media (max-width: 770px) {
    
    
}
@media (max-width: 377px) {
    display: none;
}


`

const RightDiv = styled.div`
width: 50%;
height: 100%;
border-radius: 0 5rem 5rem 0rem;

@media (max-width: 770px) {
    
    
}
@media (max-width: 377px) {
margin:auto;
height: 90%;

}

`









const Plantpedia = () => {
    const [selectedPlant, setSelectedPlant] = useState(1)


    return(
        <ExternalFrame>
                <Dropdown
                    placeholder="Select a plant"
                    className="my-className"
                    options={plants.map(i=> {return {label:i.plantName, id:i.id} })}
                    onChange={(value) => console.log('change!', value)}
                    onSelect={(value) => setSelectedPlant(value.id)} // always fires once a selection happens even if there is no change
                    onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
                    onOpen={() => console.log('open!')}
                    />;

            <InternalFrame>

                <LeftDiv>
                    <CarouselPics data={plants[selectedPlant -1]} />
                </LeftDiv>
                <RightDiv>
                    <PlantCard data={plants[selectedPlant-1]}/>
                </RightDiv>

            </InternalFrame>
        </ExternalFrame>
    )

}


export default Plantpedia;

