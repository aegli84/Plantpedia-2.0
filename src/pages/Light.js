import React from "react";
import styled from "styled-components";
import bg from "../assets/bgimg/guidepage.png";
import light1 from "../assets/guidesImages/light1.jpg";
import light2 from "../assets/guidesImages/light2.jpg";
import { NavLink as Link } from "react-router-dom";
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
@media (max-width: 377px) {
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


const Light = () => {

    return(
        <div>
            <ExternalFrame>
                <InternalFrame>
                    <Div1>
                    <H2Parag>What are the main Types Of Natural Light Settings</H2Parag>
                    <Img src={light1}/>
                    <H4Parag>Full Sun: Most house plants do not like full sun and many of them will become very damaged or will not survive very long when they receive too much direct sunlight. The only plants that enjoy summer sun is desert cacti, and succulents can tolerate a lot of sun (succulents seem to prefer some sun and bright conditions) . Full sun is experienced from a south facing window.</H4Parag>
                    <H4Parag>Partial sunlight and shade: For a plant to receive sun during the day for a couple of hours or so it will need to be seated close to a west or east facing window. Placed near a west or east facing window will give a plant some morning or evening sun; avoiding the heat of the midday sun. Many plants, especially flowering types grow at their best close to a window in partial sun and shade.</H4Parag>
                    <H4Parag>Full shade or low light: Most plants do not grow at their best in shaded or low light conditions, especially flowering types. However, you'll find some species survive and are known for their ability to thrive in low light and they're easy to grow (good for beginner growers). A few plants come to mind that grow in low lighting well includes the cast iron plant, mother in laws tongue, dragon tree, zz plant and others which you can find in a collection here. A north facing window provides full shade, but low light can often depend on the size or amount of windows in a room.</H4Parag>
                    <H4Parag>Bright without direct sun: This is the lighting requirement for most foliage plants and many flowering types too. The best place for bright light without direct sun is a south facing window; with the plant set back a few feet from the window. East and west facing windows are also suitable if the window is large enough to allow plenty of daylight, with the plant sitting far enough back from the early midday sun arriving and early sunset.</H4Parag>
                    <H2Parag>Identifying problems</H2Parag>
                    <Img src={light2}/>
                    <H4Parag>If a plant is not receiving enough light or too much direct sunlight there are tell tale signs to look out for. Here are the common problems caused by incorrect lighting.
                    Not Enough:
                    Flowers not blooming,
                    Weak, slow and spindly growth,
                    Yellowing leaves which eventually fall,
                    New leaves remain smaller than usual.
                    Too Much:
                    Flowers shrivel up and die quickly,
                    Leaves shrivelling up and drying,
                    Leaves fade in colour,
                    Drooping leaves.</H4Parag>
                    </Div1>
                    <Div2>
                      <NavLink to="/Watering">
                      <FaArrowLeft size="2.7rem" color="white"/>
                      </NavLink>
                      <NavLink to="/Pest">
                      <FaArrowRight size="2.7rem" color="white"/>
                      </NavLink>

                    </Div2>
                </InternalFrame>
            </ExternalFrame>
        </div>
    )

}

export default Light;