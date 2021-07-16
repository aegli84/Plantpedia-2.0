import React from 'react';
import styled from 'styled-components';



const ContainerBox = styled.div`
width:100%;
height:100%;
overflow: hidden;
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
`
const PlantHumidity=styled.div`
color: black;
background-color: #E0EFEF;
width:80%;
height: 7%;
display: flex;
margin: auto;
font-size:1.2rem;
margin-bottom: 1vh;
margin-top: 5vh;
border-radius: 5rem;



`
const PlantWatering=styled.div`
color: black;
background-color: #85ACF6;
width:80%;
height: 7%;
display: flex;
margin: auto;
font-size:1.2rem;
margin-bottom: 1vh;
border-radius: 5rem;

`
const PlantLight = styled.div`
color: black;
background-color: #FBF3AB;
width:80%;
height: 7%;
display: flex;
margin: auto;
font-size:1.2rem;
margin-bottom: 1vh;
border-radius: 5rem;


`
const PlantSoil = styled.div`
color: black;
background-color: #CB7F0D;
width:80%;
height: 10%;
display: flex;
margin: auto;
font-size:1.2rem;
border-radius: 5rem;


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

const ImgWater=styled.img`
height: 80%;
width: 10%;
margin-right:1vw;
margin:auto;



`

const ImgSun=styled.img`
height: 100%;
width: 20%;
margin-right:1vw;
margin:auto;



`


const RightImgCol = styled.div`
float:right;
width:100%;
height:100%;
display: flex;
`




const PlantCard = (props) =>{

    const {name, description, humidity, watering, light, soil} = props;


    return (
            <ContainerBox>
                        <PlantName>
                            {name}
                        </PlantName>
                        <PlantDescription>
                            {description}
                        </PlantDescription>
                        <PlantHumidity>
                            <LeftCol>Ideal humidity:</LeftCol><RightCol>{humidity}</RightCol>
                        </PlantHumidity>
                        <PlantWatering>
                            <LeftCol>Watering:</LeftCol><RightImgCol><ImgWater src={props.ImgWater} alt="water drop"/><ImgWater src={props.ImgWater} alt="water drop"/><ImgWater src={props.ImgWater} alt="water drop"/><ImgWater src={props.ImgWater} alt="water drop"/></RightImgCol>
                        </PlantWatering>
                        <PlantLight>
                            <LeftCol>Light:</LeftCol><RightImgCol><ImgSun src={props.ImgSun} alt="Sun image"/><ImgSun src={props.ImgSun} alt="Sun image"/></RightImgCol>
                        </PlantLight>
                        <PlantSoil>
                            <LeftCol>Soil:</LeftCol><RightCol>{soil}</RightCol>
                        </PlantSoil>
            </ContainerBox>  
    )
}

export default PlantCard;