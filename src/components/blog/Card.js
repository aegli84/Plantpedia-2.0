import React from "react";
import Card from './CardUI';
import styled from 'styled-components';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';


const MainCon = styled.div `
    padding:0;
    display: flex;
    height: 100%;
`

const OneBox = styled.div `
    display: flex;
    width: 100vw; 
    height: 100%;
`
const TagsCom = styled.div `
    width: 25vw;
    margin-left: 100px;
    margin-top: 48px;
/*  border: 1px solid #c5c5c4;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 #c5c5c4; */

`
const TagsStyle = styled.h3 `
    text-align: center;
    padding: 0.5vw;
`
const BtnOne = styled.button `
    margin-left: 5px;
    margin-top: 5px;
    padding: 0.5vw;
    border: 1px solid #c5c5c4;
    background-color: #c5c5c4;
    cursor: pointer;
    font-family: 'Montserrat' , Sans serif;
`
const TagsCon = styled.div `
    height: 100vh;
    margin-left: 35px;
    padding: 5px;

`

function Cards() {
    return(
        <OneBox>
            <MainCon>
                <div>
                    <Card imgsrc= {image1}
                        title="How To Keep Your Plants Alive While On Vacation"
                        text= "Whether you’ll be spending a long weekend at the beach or a full month abroad, we’re sharing our top tips and tricks below for keeping your houseplants happy..."
                        button = "Read more.."
                        link = "https://www.thesill.com/blogs/plants-101/how-to-keep-your-houseplants-alive-while-youre-on-vacation"

                    />
                </div>
                <div>
                    <Card imgsrc= {image2}
                            title = "9 Essential Tips for Keeping Your Houseplants Healthy"
                            text= "No matter what plants you have in your collection, they all have similar basic needs. Here's how to keep them in tip-top shape..."
                            button = "Read more.."
                            link = "https://www.bhg.com/gardening/houseplants/care/houseplant-care-guide/"

                    />
                </div>
                <div>
                    <Card imgsrc= {image3}
                        title="The 21 Best Plant Accessories"
                        text= "Whether you’re a beginner or an expert, finding the perfect plant-savvy accessories for your modern living space is a daunting task..."
                        button = "Read more.."
                        link = "https://hiconsumption.com/best-plant-accessories/"
                    />
                </div>
            </MainCon>
        <TagsCom>
            <TagsStyle>Tags</TagsStyle>
        <TagsCon>
            <BtnOne>Monstera</BtnOne>
            <BtnOne>Soil</BtnOne>
            <BtnOne>Watering</BtnOne>
            <BtnOne>Tips</BtnOne>
            <BtnOne>Flowers</BtnOne>
            <BtnOne>Plants</BtnOne>
            <BtnOne>Healthy Plants</BtnOne>
            <BtnOne>Houseplants</BtnOne>
            <BtnOne>Outdoor Plants</BtnOne>
            <BtnOne>Syngonium</BtnOne>
            <BtnOne>Perlite</BtnOne>
            <BtnOne>Pests</BtnOne>
            <BtnOne>Fertilizer</BtnOne>
            <BtnOne>Repotting</BtnOne>
            <BtnOne>Pots</BtnOne>
            <BtnOne>Plant Sitting</BtnOne>
            <BtnOne>Plant Offers</BtnOne>
            <BtnOne>Plantwiki</BtnOne>
            <BtnOne>Pruning</BtnOne>
            <BtnOne>Planting</BtnOne>
            <BtnOne>Sowing</BtnOne>
            <BtnOne>Seed Plants</BtnOne>
            <BtnOne>Vascular Plants</BtnOne>
            <BtnOne>Dicotyledons</BtnOne>
        </TagsCon>
        </TagsCom>
        </OneBox>
    )
};

export default Cards; 

