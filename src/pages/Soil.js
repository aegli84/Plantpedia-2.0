import React from "react";
import styled from "styled-components";
import bg from "../assets/bgimg/guidepage.png";
import soil1 from "../assets/guidesImages/soil1.jpg";
import soil2 from "../assets/guidesImages/soil2.jpg";
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



const Soil = () => {

    return(
        <div>
            <ExternalFrame>
                <InternalFrame>
                    <Div1>
                    <H2Parag>The Right Soil</H2Parag>
                    <Img src={soil1}/>
                    <H4Parag>If possible, your potting soil should be tailored to the particular type of plant you are growing. Cactus, succulents and rosemary, for example, prefer a coarse, well-drained soil that is about one-third sand. Seedlings should be grown in a light, moisture-retentive, soilless mix. African violets and ferns prefer soil with a high humus content, which can be achieved by adding leaf mold or shredded bark. Many kinds of orchids are happiest growing in nothing but fir bark or sphagnum moss.

                    A good indoor potting mix is usually composed of peat moss, vermiculite and perlite. These soilless mixes absorb moisture very well and resist compaction, but they tend to dry out very quickly. Since they do not contain any nutrients, you must provide your plants with a consistent supply of fertilizer. One advantage to a soilless mix is that it is sterile, so there is no chance of introducing pest or disease problems.

                    Many gardeners add organic components to their indoor growing mix. These might include leaf mold, finished compost, composted peat, or rich garden soil. A growing medium that contains 10 to 20 percent organic matter will usually not dry out as fast as a soilless mix, and it also allows you to introduce beneficial microorganisms and nutrients.

                    The most critical consideration when you're purchasing or blending your own potting soil is to ensure that the mix is light enough to provide adequate pore space for air, water and healthy root growth. Month after month of overhead watering, without the benefit of earthworms and weather to aerate the soil, usually results in an unhealthy, compacted root zone. To ensure that your plants' roots have the oxygen they need for healthy growth, your potting soil should contain plenty of perlite, vermiculite, or sharp sand. This will allow water to drain freely, and ensure that the soil is at least 10 to 20 percent air.</H4Parag>
                    <H2Parag>Climate, Water and Nutrients</H2Parag>
                    <Img src={soil2}/>
                    <H4Parag>Temperature: In their natural habitat, most plants experience a day-to-night temperature fluctuation of at least 10 degrees F. In your home, they will benefit from having a similar temperature differential. Most plants also expect a resting period each year; in fact, some flowering plants actually require a period of dormancy before they will set bud and flower.

                    To simulate this resting period, you should cut back on water and fertilizer during the late fall and early winter, when the intensity and duration of natural light is lowest. Once the day length begins to increase, you can declare it to be spring, and step up the water and fertilizer. Your plants will respond with healthy new growth.

                    Humidity: Most plants are happiest when the relative humidity is 50 percent or higher, though they can usually survive at 30 to 40 percent. If the air is much drier than that, they are unable to absorb enough water through their roots to keep up with the water lost through their leaves. Unfortunately, indoor air, especially in the winter, often has a humidity as low as 10 to 20 percent.

                    Misting your plants helps, but only for an hour or so. A better solution is to use a cool vapor humidifier (which you will benefit from as well). You can also cluster your plants together so that, as they release moisture into the air, they'll humidify their neighbors. Or try arranging your plants on a gravel-filled tray that contains about 1/4 inch of water. As the water evaporates, it will humidify the air around your plants. Just be careful that the pots don't sit directly in the water.

                    Water: More houseplants die from overwatering than from anything else. The best advice is to resist the temptation to water on a regular schedule. Your plants will require frequent watering if the weather has been sunny and warm, and they may not need a drop if the weather has been cool and cloudy. Make a habit of checking the soil of at least a few indicator plants, and water only if it feels dry to a depth of ½ to 1 inch.

                    When you do water, drench the root ball until you can see some water seep out the bottom of the pot. This will ensure that the entire root ball gets moistened. Small pots will benefit from being soaked in water for about an hour, once a month. Whenever possible, try to water your plants with room temperature water to avoid shocking the roots.

                    Never use water that has been chemically softened. It contains salts that are harmful to plants. If your water is very hard, consider installing a demineralizing attachment to filter out impurities, such as lime and chlorine.

                    Nutrients: Indoor plants are usually not too fussy about fertilizers. The most important thing is to not overdo it. Follow the instructions on the package, and err on the weak side. Always water your plants thoroughly before applying any sort of fertilizer. A standard 10-10-10 formulation is fine for most indoor plants.

                    Supplementing with an organic amendment such as liquid seaweed or fish emulsion, or a biostimulant, will provide some of the trace nutrients lacking in an inorganic plant fertilizer. A top dressing of compost or worm castings is another effective way to add organic nutrients. Be aware that some plants are particularly sensitive to pH level, and that this sensitivity can be either exacerbated, or corrected, with the right fertilizer. To avoid the buildup of fertilizer salts, it's a good idea to periodically drench the soil with clean water, then water again with clean water. This will help flush any salts out of the soil.</H4Parag>
                    </Div1>
                    <Div2>
                      <NavLink to="/Pest">
                      <FaArrowLeft size="2.7rem" color="white"/>
                      </NavLink>
                      <NavLink to="/Humidity">
                      <FaArrowRight size="2.7rem" color="white"/>
                      </NavLink>

                    </Div2>
                </InternalFrame>
            </ExternalFrame>
        </div>
    )

}

export default Soil;