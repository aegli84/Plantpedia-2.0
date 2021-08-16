import React from 'react';
import styled from 'styled-components';



const ContainerBox = styled.div`
width:100%;
height:100%;
display: block;
flex-direction: column;
justify-content: space-between;

@media (max-width: 770px) {
    
    
}
@media (max-width: 377px) {
    margin-left: auto;
    margin-right: auto
}

`
const PlantName = styled.div`
width: 100%;;
height:15%;
color: white;
text-align: center;
font-size: 2rem;
margin-top: 2vh;

`
const PlantDescription=styled.div`
color: white;
margin: 2vw;
font-size: 1.3rem;
@media (max-width: 770px) {
    font-size:1.4rem;
    
}
@media (max-width: 377px) {
    margin-left:-30px;
    margin-right:-30px;
}


`
const PlantHumidity=styled.div`
color: black;
background-color: #E0EFEF;
width:80%;
height: 5vh;
display: flex;
margin: auto;
font-size:1.2rem;
margin-bottom: 1vh;
margin-top: 5vh;
border-radius: 5rem;

@media (max-width: 770px) {
    height:5vh;
    margin-top:2vh;
    
}
@media (max-width: 377px) {
    width:150%;
    height:70px;
}



`
const PlantWatering=styled.div`
color: black;
background-color: #85ACF6;
width:80%;
height: 5vh;
display: flex;
margin: auto;
font-size:1.2rem;
margin-bottom: 1vh;
border-radius: 5rem;

@media (max-width: 770px) {
    height:5vh;

    
}
@media (max-width: 377px) {
    width:150%;
    height:70px;

}

`
const PlantLight = styled.div`
color: black;
background-color: #FBF3AB;
width:80%;
height: 5vh;
display: flex;
margin: auto;
font-size:1.2rem;
margin-bottom: 1vh;
border-radius: 5rem;

@media (max-width: 770px) {
    height:5vh;

    
}
@media (max-width: 377px) {
    width:150%;
    height:70px;

}


`
const PlantSoil = styled.div`
color: black;
background-color: #CB7F0D;
width:80%;
height: 5vh;
display: flex;
margin: auto;
font-size:1.2rem;
border-radius: 5rem;

@media (max-width: 770px) {
    height:5vh;

    
}
@media (max-width: 377px) {
    width:150%;
    height:70px;

}


`
const LeftCol = styled.div`
float:left;
width:100%;
height:100%;
text-align: start;
margin-left: 10%;
display: flex;
justify-content: center;
align-content: center;
flex-direction: column;


`
const RightCol = styled.div`
float:right;
width:100%;
height:100%;
text-align: end;
display: flex;
justify-content: center;
align-content: center;
flex-direction: column;
margin-right:10%;
`
const Box1 = styled.div`
@media (max-width: 770px) {
    
    
}
@media (max-width: 377px) {
    height:67%;
}
`

const Box2 = styled.div`
display:block;
margin-bottom:10vh;

@media (max-width: 770px) {
    
    
}
@media (max-width: 377px) {
    margin-left:-40px;
    margin-right:30px;
}
`




const PlantCard = (props) =>{

    const {plantName, description, humidity, watering, light, soil} = props.data;


    return (
            <ContainerBox>
                <Box1>
                        <PlantName>
                            {plantName}
                        </PlantName>
                        <PlantDescription>
                            {description}
                        </PlantDescription>
                </Box1>
                <Box2>
                        <PlantHumidity>
                            <LeftCol>Ideal humidity:</LeftCol><RightCol>{humidity}</RightCol>
                        </PlantHumidity>
                        <PlantWatering>
                            <LeftCol>Watering:</LeftCol><RightCol>{watering}</RightCol>
                        </PlantWatering>
                        <PlantLight>
                            <LeftCol>Light:</LeftCol><RightCol>{light}</RightCol>
                        </PlantLight>
                        <PlantSoil>
                            <LeftCol>Soil:</LeftCol><RightCol>{soil}</RightCol>
                        </PlantSoil>
                </Box2>
            </ContainerBox>  
    )
}

export default PlantCard;