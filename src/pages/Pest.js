import React from "react";
import styled from "styled-components";
import bg from "../assets/bgimg/guidepage.png";
import pest1 from "../assets/guidesImages/pest1.jpg";
import pest2 from "../assets/guidesImages/pest2.jfif";
import pest3 from "../assets/guidesImages/pest3.jpg";
import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";

import { NavLink as Link } from "react-router-dom";


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


const Pest = () => {

    return(
        <div>
            <ExternalFrame>
                <InternalFrame>
                    <Div1>
                    <H2Parag>Common houseplant pests</H2Parag>
                    <H4Parag>The list of three insects and mites are by no means an exhaustive list of houseplant pests, but they are the most typical ones that you'll likely see in the home.  </H4Parag>
                    <H2Parag>Common brown scale</H2Parag>
                    <Img src={pest1}/>
                    <H4Parag>The first time I noticed a scale insect was on a jasmine plant that I had purchased at the farmers market. I didn't see the insect at first, but I did notice that some of the bottom leaves of the plant were shiny and sticky. Upon closer inspection, I noticed brown nubs stuck to the woody stem and underside of leaves, closest to the central vein. This was scale. 

                    There are different varieties of scale but by far the most common is the brown soft scale (Coccus hesperidum L.). They are rather inconspicuous—and don't look like a typical insect—unless you know what to look out for. Firstly, they're ovate, only about 3-4 mm long and about half as wide. They can range in color, but are most often brownish in appearance (hence the name), but I've also seen them in shades of yellow, amber, and even olivaceous. They're called "scales" largely due to their scale-like appearance on a plant, due to waxy or armored coverings. They are often seen in clumps along a stem, sucking away at the plant's juices with their spiky mouthpart. 

                    They are only mobile when they are born. Soft scales, which are just one of the groups of scale insects, can reproduce both sexually or parthenogenetically, which means that they can produce young without fertilization. Quite unique in the insect world, the female scales are ovoviviparous, which means they give to birth to living young by hatching the eggs while they are still in their mother. This is the same in Madagascar hissing cockroaches, which are not a plant pest, but an insect that I raise, and I'll be the first to say that it can be shocking that one day you'll have 2 cockroaches and the next day 20X that amount. Same goes for the scale insects. I say this only because you can't really get rid of the eggs unless you get rid of the adults. Once the young, which are called "crawlers" are born, they'll disperse along the plant, find a place they like (usually around some new growth), and literally plant themselves there for the remainder of the time—reaching maturity at around 65 days.  

                    Scale can be a real problem indoors because quite frankly, they have a good temperature year round, which means they'll likely reproduce around the clock. Good news, however, is that scale are, as I shared, relatively immobile, so if they are contained to one plant, then you can control them. Most people choose to discard the plant. Though it was slightly stunted in growth, I decided to keep my jasmine to see if I could revive it. First, homemade soap sprays aren't that effective on scale, partially because the scale on the outside of the insect acts like a shield. You'd want to get it under the cap of the insect.

                    What I did was as follows:

                    1. Place a plastic bag or some covering around the soil of your plant. This prevents any scale from falling into your soil.

                    2. Get a natural, rosemary-based insecticidal soap. Spray this on the plant so it's nice and soapy. 

                    3. Run your fingers along the stems and plant leaves, turning up the scale with your fingernails. If you don't want to touch the insects, you can use an old toothbrush or even a toothpick, but I feel as if I have more control and accuracy with my fingernails. You may notice some scale fall onto the plastic bags; pick them up and discard them. Really be sure to look over the entire plant. My jasmine had a woody stem and the scale looked like part of the stem, so don't be fooled! If helpful, get a pocket magnifier to look over the plant, including the creases of where the leaf meets the stem.

                    4. After you've sufficiently soaped and scraped the plant, give it a good, sharp spray with your hose or your shower. You'll want to get all the soap off the plant so it doesn't affect growth. Keeping a plant strong, healthy and growing, can often keep insects at bay.

                    5. Check the plant again for the next three days, making sure that you hadn't missed any scales. If you did, you can repeat steps 1-4. Check again once a week for the two months, just to make certain you got all the little buggers.
                    </H4Parag>
                    <H2Parag>Mealybugs (Pseudococcidae families)</H2Parag>
                    <Img src={pest2}/>
                    <H4Parag>I'm not quite sure how mealybugs first got into my home, but I first noticed them on my potato plants that I was growing in my closet garden. Potatoes, particularly the leaves and stems, grow incredibly fast, so I was monitoring them pretty closely. I first planted the potatoes from ones that I purchased in the farmers market and that started growing "eyes". Interesting enough, I had more potatoes that began growing eyes in my fruit basket, and mealybugs would just "show up" on them. Still to this day I'm befuddled by their spontaneous generation. 

                    Mealybugs are an unarmored scale insect, and I personally think they are more difficult to control than the common brown scale. This is for a few reasons. First is the most obvious: mealybugs move. Though its slow movement, if any plant is touching another, there is a chance the mealybug will hitch a ride on a new leaf and spread. Secondly, though their soft, cottony white appearance is quite obvious on a plant, they have a tendency to hide out in the damnedest of places, like the crotch of a plant or in a leaf that has yet to unfurl. Additionally, they have waxy secretions, giving them their cotton-like appearance, which can serve as some basic protection. And lastly, they breed like rabbits of the insect world. Females can deposit around 600 eggs in loose cottony masses, often on the underside of leaves or along stems. The early instars will hatch in about a week and this often causes a population explosion.

                    As such, it's important to get mealybug populations in control. Some will toss out a plant completely, but I did no such thing. Instead I did a three-pronged effort, involving the release of two beneficial insects—the green lacewing (Chrysoperla carnea) and highly effective, aptly named mealybug destroyer (Cryptolaemus montrouzieri), and also spot treatment using a q-tip and isopropyl alcohol. Dabbing the alcohol directly onto the mealybugs will easily kill them on the spot, but the upside to releasing the beneficial insects is that the insects can often get to places in a plant that you often cannot get, so I believe both methods—at least for me—have worked the best. </H4Parag>
                    <H2Parag>Red spider mites </H2Parag>
                    <Img src={pest3}/>
                    <H4Parag>Mites are technically not insects but they, like insects, are Arthropods. They are probably some of the most feared of the common household insect pests, largely because they are so difficult to get rid of.

                    Spider mites are nearly naked to the eye. You often need a magnifying lens to spot them, or you may just notice a reddish film across the bottom of the leaves, some webbing, or even some leaf damage, which usually results in reddish-brown spots on the leaf.

                    Earlier in the year I was gifted an Alocasia micholitaiana 'Frydek', which is a gorgeous velvety green alocasia. I typically always check my houseplants before bringing them indoors, which is a proactive way to make sure no pesky insects are in tow, but you can't always rely on eyesight. Within about three weeks, I noticed some webbing and the start of brown dots on some of the mature leaves. Before mites could spread to the other plants, I took the Alocasia and washed it thoroughly in the shower and made sure the humidifier was on daily. Mites prefer dry conditions, so keeping the air humid and the plant on the wet side (something an Alocasia prefers anyway), was able to save the plant, although it still bears the battle wounds of the mites.

                    Spider mites also have a range of natural predators, including other mites like Phytoseiulus sp. and generalist predators like minute pirate bugs and lacewing larvae. </H4Parag>
                    </Div1>
                    <Div2>
                      <NavLink to="/Light">
                        <FaArrowLeft size="2.7rem" color="white"/>
                      </NavLink>
                      <NavLink to="/Soil">
                      <FaArrowRight size="2.7rem" color="white"/>
                      </NavLink>
                    </Div2>
                </InternalFrame>
            </ExternalFrame>
        </div>
    )

}

export default Pest;