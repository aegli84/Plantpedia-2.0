import React from "react";
import PlantCard from './PlantCard';
import styled from 'styled-components';
import WaterDrop from "../plantpedia/plantpediaAssets/waterDrop.png";
import Sun from "../plantpedia/plantpediaAssets/sun.png";


const ExternalDiv=styled.div`
width: 100%;
height: 100%;
`

function PlantCards(){
    return(
        <ExternalDiv>

            <PlantCard
            name="Alocasia Zebrina"
            description=" The alocasia zebrina owes its name to the unique – and eye-catching – yellow and black zebra print-esque markings found on its stems that contrast with its lush green leaves. Its leaves are in fact believed to mirror the floppy ears of an elephant – hence the alocasia zebrina’s other name, ‘elephant ear’.ts leaves are as fascinating as its stems, thanks to their funnel-like concavity, and pronounced veins that are not unlike those seen on a human body. Originally from Southeast Asia, the exotic alocasia zebrina is familiar with the rainforest floor – meaning it loves a moist, humid environment – and its large leaves will follow the path of light (so be sure to rotate yours once in while).Make sure your alocasia is not near your pets! "
            humidity="55%-60%"
            ImgWater={WaterDrop} 
            ImgSun={Sun}
            soil="Good draining potting mix."
            />

            <PlantCard
            name="Calatha Orbifolia"
            description=" this is bla bla bla bla bla bla bla bla bla bla bla bla "
            humidity="55%-60%"
            watering="a"
            light="a"
            soil="a"
            />

            <PlantCard
            name="Calathea Zebrina"
            description=" this is bla bla bla bla bla bla bla bla bla bla bla bla "
            humidity="55%-60%"
            watering="a"
            light="a"
            soil="a"
            />


            <PlantCard
            name="Monstera Deliciosa"
            description=" this is bla bla bla bla bla bla bla bla bla bla bla bla "
            humidity="55%-60%"
            watering="a"
            light="a"
            soil="a"
            />


            <PlantCard
            name="Zamloculcas"
            description=" this is bla bla bla bla bla bla bla bla bla bla bla bla "
            humidity="55%-60%"
            watering="a"
            light="a"
            soil="a"
            />


        </ExternalDiv>

    )
}

export default PlantCards;