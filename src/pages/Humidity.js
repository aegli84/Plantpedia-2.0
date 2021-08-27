import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import bg from "../assets/bgimg/guidepage.png";
import humidity1 from "../assets/guidesImages/humidity1.jpg";
import humidity2 from "../assets/guidesImages/humidity2.jpg";
import humidity3 from "../assets/guidesImages/humidity3.jpg";
import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";


const ExternalFrame = styled.div`
width:100vw;
height: 95vh;
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
padding-top:20px;
height: 65vh;
margin: auto ;
border-radius: 5rem;
box-shadow: 0 0 20px black;
background-color: #918EA4;
align-items: center;
justify-content: center;
text-align:justify;




@media (max-width: 770px) {
    height: 72vh;

}
@media (max-width: 377px) {
    height: 72vh;



}
`

const H2Parag= styled.h2`
color: white;  
text-align: center;
padding-top:5vh;
`
const H4Parag= styled.h4`
color: white;
margin: 2vw;
margin-left:4vw;
`
const Div1 = styled.div`
width: 90%;
height: 50vh;
overflow-x: hidden;
overflow-y: auto;

overflow-x: hidden;
overflow-y: auto;
::-webkit-scrollbar {
    width: 20px;
  }
::-webkit-scrollbar-track-piece {
    background: white;
    border: solid 1px black;
    border-radius: 10px;
  }
::-webkit-scrollbar-thumb {
    background: #725490;
    border-radius: 10px;

  }
::-webkit-scrollbar-button:end:increment {
    height: 10%;
    display: block;
    background: transparent;
  }
  ::-webkit-scrollbar-button:start:increment {
    height: 10%;
    display: block;
    background: transparent;
  }

  @media (max-width: 770px) {
    height: 65vh;
    width: 75vw;


}
@media (max-width: 377px) {
  height: 65vh;
    ::-webkit-scrollbar-button:end:increment {
        height: 5%;
        display: block;
        background: transparent;
      }
      ::-webkit-scrollbar-button:start:increment {
        height: 15%;
        display: block;
        background: transparent;
      }
    


}


`
const Div2 = styled.div`
width: 90%;
height:10vh;
margin-top: 30px;
justify-content: space-around;
display: flex;

@media (max-width: 770px) {
  margin-top: 5px;


}

`

const Img = styled.img`
width:30%;
margin-left: 35%;
margin-top:1%;
border-radius: 3rem;

`
const NavLink = styled(Link)`
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    cursor: pointer;

`;


const Humidity = () => {


    return(
        <div>
            <ExternalFrame>
                <InternalFrame>
                    <Div1>
                    <H2Parag>What is the ideal humidity?</H2Parag>
                    <Img src={humidity3}/>

                    <H4Parag>One of the biggest problems plants encounter (regarding humidity) growing indoors is enduring weeks or months in a room with central heating or any other artificial means of heating.
                    The good news is we can prevent or rectify humidity problems by knowing the plants care needs, and improving house plants humidity levels.
                    The measurement used for humidity is what’s called relative humidity, which measures water vapor and a specific amount air relative to the number of water particles that could be in a certain amount of air.Relative humidity is used to help determine a comfortable level suitable for animals , humans and plants.</H4Parag>
                    <H2Parag>Common Plant Humidity Problems</H2Parag>
                    <Img src={humidity1}/>

                    <H4Parag>When the humidity is too Low:
                    Leaves turn brown at the tips,
                    Leaf edges turn yellow,
                    Flowers shrivel up and die quickly,
                    Leaves dry up a shrivel.
                    Too High:
                    Gray mould appearing on leaves ,
                    Gray mould on flowers,
                    Leaves and stems beginning to show signs of rot.</H4Parag>
                    <H2Parag>Methods for Improving Humidity</H2Parag>
                    <Img src={humidity2}/>

                    <H4Parag>1. Misting - Misting the leaves with a fine misting spray bottle and tepid water is a common and effective method.</H4Parag>
                    <H4Parag>2. Grouping Plants - When plants are placed together in groups they kind of act in the same way as forest trees and plants act, which is to trap air and moisture between each of them. They can also use each others moisture from the soil. When doing this allow some space between each of the plants.</H4Parag>
                    <H4Parag>3. Humidifier or Dehumidifier - Some rooms indoors need a de-humidifier or dehumidifier for our own comfort and these can be bought to improve the humidity for plants also.</H4Parag>
                    <H4Parag>4. Pebble/Gravel Trays - A great way to improve humidity is to place plants on a humidity tray. This tray consist of small pebbles or gravel covered in water. The water has to be just below the top of the pebbles or gravel so the plant does not soak up any water and remains well aerated. You may want to purchase a humidity tray specifically for plants, which are inexpensive.</H4Parag>


                    </Div1>

                    <Div2>
                      <NavLink to="/Soil">
                      <FaArrowLeft size="2.7rem" color="white"/>
                      </NavLink>
                      <NavLink to="/Chat">
                      <FaArrowRight size="2.7rem" color="white"/>
                      </NavLink>

                    </Div2>
                </InternalFrame>
            </ExternalFrame>
        </div>
    )

}

export default Humidity;