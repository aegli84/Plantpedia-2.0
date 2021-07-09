import React from "react";
import styled from "styled-components";
import bg from "../assets/bgimg/guidepage.png";



const ExternalFrame = styled.div`
width:100vw;
height: 80vh;
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
height: 50vh;
margin: auto ;
border-radius: 5rem;
box-shadow: 0 0 20px black;
background-color: #918EA4;
display: block;
align-items: center;
justify-content: center;
overflow-x: hidden;
overflow-y: auto;
text-align:justify;

::-webkit-scrollbar {
    width: 40px;

  }
::-webkit-scrollbar-track-piece {
    background: white;
    border: solid 1px black;
    margin-top: 100px;


  }
::-webkit-scrollbar-thumb {
    background: purple;
    
    
  }
::-webkit-scrollbar-button:end:increment {
    height: 10vh;
    display: block;
    background: transparent;
  }

  ::-webkit-scrollbar-button:start:increment {
    display: block;
    background: transparent;
  }


@media (max-width: 770px) {
    height: 70vh;

}
@media (max-width: 375px) {
    height: 70vh;


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
`


const Watering = () => {

    return(
        <div>
            <ExternalFrame>
                <InternalFrame>
                    <H2Parag>When should I water my plant?</H2Parag>
                    <H4Parag>Simple answer: water when your plant actually needs water. Don’t just water once a week or on a schedule because that’s what the internet told you. You can revive a plant that’s been underwatered but it’s very hard to revive a plant that’s been overwatered. Dehydrated plants perk back up within hours when given water (this is of course a generalisation and there are always exceptions), but overwatered plants take weeks and months to recover. Learn to recognise when your plant needs water.</H4Parag>
                    <H2Parag>Watering methods</H2Parag>
                    <H4Parag>Top watering: Water from the top until the soil is completely saturated and excess water has run out through the drainage holes at the bottom. Also, please please please stop measuring water in terms of cups or litres or tablespoons or whatever 😂 you need to completely soak the soil from from top to bottom, period. This encourages strong root growth as the plant will put out roots that can dig deeper to find water!</H4Parag>
                    <H4Parag>Bottom watering: If you're a fan of bottom watering (like me), leave your plant in a tray to soak for about 15-20 minutes so it has time to take up water. I've never overwatered a plant this way, even though I sometimes forget I have a plant that's bottom-watering and leave it for a couple of hours (oops). When you are bottom watering, you should switch to top watering once a month so you drain off excess minerals built up in the soil.</H4Parag>
                    <H4Parag>Keep in mind that overwatering is not a product of too much water, it is a combination of too much water too often (this bears repeating!). A pot (with drainage) can only hold a finite amount of water in the soil once the excess has run off. If the soil never has a chance to dry and then you water again, the roots will begin to rot because there is just too much moisture.
                    By understanding the signs of when a plant actually needs water, you’ll have a much better chance of keeping it alive, as well as the plant thriving in its environment. The best way to know when a plant needs water is by observing the soil and knowing when the soil is dry. Personally, I lift all of my plant pots before watering because I can tell within seconds how much water is left in the pot. I own a water meter, but since I started on this method I've never had to use it again.
                    </H4Parag>
                </InternalFrame>
            </ExternalFrame>
        </div>
    )

}

export default Watering;