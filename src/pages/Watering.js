import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import bg from "../assets/bgimg/guidepage.png";
import watering1 from "../assets/guidesImages/watering1.jpg";
import watering2 from "../assets/guidesImages/watering2.jpg";
import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";
import { motion } from 'framer-motion'
import { pageAnimation } from '../animations'

const ExternalFrame = styled.div`
width:100vw;
height: 100vh;
padding-top: 17vh;
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

const InternalFrame = styled(motion.div)`
width:80vw;
padding-top:3rem;
padding-bottom:3rem;
height: 75vh;
margin: auto ;
border-radius: 2rem;
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
color: whitesmoke;  
text-align: center;
padding-top:2rem;
padding-bottom: 1rem;
font-size: 2.7rem;
`
const P= styled.p`
color: whitesmoke;
margin-top: 2.5rem;
padding: 0 4rem 4rem 8rem;
font-size: 1.5rem;
`
const Div1 = styled.div`
width: 90%;
height: 60vh;
overflow-x: hidden;
overflow-y: auto;

::-webkit-scrollbar {
      width: 12px;
      z-index: -1;
  }
  ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.363); 
      -webkit-border-radius: 10px;
      border-radius: 10px;
      z-index: -1;
  }
  ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background:#4230649a;
      box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
      z-index: -1;
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background:#6e52a5b4;
    z-index: -1;
  }

  @media (max-width: 770px) {
    height: 65vh;
    width: 65vw;


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
width: 100%;
height:10vh;
margin-top: 1rem;
display: flex;
justify-content: space-around;

@media (max-width: 770px) {
  margin-top: 5px;

}
`

const Img = styled.img`
width:35%;
margin-left: 8rem;
margin-top:2.5rem;
border-radius: 2rem;
margin-right: 1rem;
float:left;
border: 2px solid whitesmoke;
`
const NavLink = styled(Link)`
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    cursor: pointer;
`;




const Watering = () => {

    return(
        <div>
            <ExternalFrame>
                <InternalFrame variants = {pageAnimation}
                initial = "hidden" 
                animate = "show">
                    <Div1>
                    <H2Parag>When should I water my plant?</H2Parag>
                    <Img src={watering2}/>
                    <P>Simple answer: water when your plant actually needs water. Don’t just water once a week or on a schedule because that’s what the internet told you. You can revive a plant that’s been underwatered but it’s very hard to revive a plant that’s been overwatered. Dehydrated plants perk back up within hours when given water (this is of course a generalisation and there are always exceptions), but overwatered plants take weeks and months to recover. Learn to recognise when your plant needs water.</P>
                    <H2Parag>Watering methods</H2Parag>
                    <P>Top watering: Water from the top until the soil is completely saturated and excess water has run out through the drainage holes at the bottom. Also, please please please stop measuring water in terms of cups or litres or tablespoons or whatever 😂 you need to completely soak the soil from from top to bottom, period. This encourages strong root growth as the plant will put out roots that can dig deeper to find water!</P>
                    <P>Bottom watering: If you're a fan of bottom watering (like me), leave your plant in a tray to soak for about 15-20 minutes so it has time to take up water. I've never overwatered a plant this way, even though I sometimes forget I have a plant that's bottom-watering and leave it for a couple of hours (oops). When you are bottom watering, you should switch to top watering once a month so you drain off excess minerals built up in the soil.</P>
                    <Img src={watering1}/>
                    <P>Keep in mind that overwatering is not a product of too much water, it is a combination of too much water too often (this bears repeating!). A pot (with drainage) can only hold a finite amount of water in the soil once the excess has run off. If the soil never has a chance to dry and then you water again, the roots will begin to rot because there is just too much moisture.
                    By understanding the signs of when a plant actually needs water, you’ll have a much better chance of keeping it alive, as well as the plant thriving in its environment.</P> 
                    <P>The best way to know when a plant needs water is by observing the soil and knowing when the soil is dry. Personally, I lift all of my plant pots before watering because I can tell within seconds how much water is left in the pot. I own a water meter, but since I started on this method I've never had to use it again.
                    </P>
                    </Div1>
                    <Div2>
                      <NavLink to="/Guides">
                      <FaArrowLeft size="2rem" color="white"/>
                      </NavLink>
                      <NavLink to="/Light">
                      <FaArrowRight size="2rem" color="white"/>
                      </NavLink>

                    </Div2>
                </InternalFrame>
            </ExternalFrame>
        </div>
    )

}

export default Watering;