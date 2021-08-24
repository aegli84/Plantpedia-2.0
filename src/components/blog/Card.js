import React from "react";
import Card from './CardUI';
import styled from 'styled-components';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';


const SecondContainer = styled.div `
    width: 100vw;
    height: 100vh;
    padding: 2vw;
`
const CardsContainer = styled.div `
    width: 0;
    height: 0;
    display: flex;
    @media (max-width: 770px) {
        display:flex;
        width: 30vw;
        margin-top: 100px;
        margin-left: 5px;
        padding: 5px;
    @media (max-width: 377px) {
        width: 100vw;
        height: 50vh;
        background-color:red;
        }
`
const TagsContainer = styled.div `
        width: 25vw;
        margin-left: 67vw;
        margin-top: 5vw;
    @media (max-width: 770px) {
        
    @media (max-width: 377px) {
        width: 87vw;
        margin-top: 500px;
        margin-left: 15px;
        } 
`
const TagsList = styled.div `
`
const TagsStyle = styled.h3 `
    text-align: center;
    padding: 0.5vw;
`
const BtnOne = styled.button `
    margin-left: 10px;
    margin-top: 10px;
    padding: 0.5vw;
    border: 1px solid #c5c5c4;
    background-color: #c5c5c4;
    cursor: pointer;
    font-family: 'Montserrat' , Sans serif;
    &:hover{
        background-color: #9c6c6c;
    }
`

function Cards() {
    return(
            <SecondContainer>
                <CardsContainer> 
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
                            title="The 21 Best Plant Accessories "
                            text= "Whether you’re a beginner or an expert, finding the perfect plant-savvy accessories for your modern living space is a daunting task..."
                            button = "Read more.."
                            link = "https://hiconsumption.com/best-plant-accessories/"
                        />
                    </div>
                </CardsContainer>
            <TagsContainer>
                <TagsStyle>Tags</TagsStyle>
            <TagsList>
                <a href="https://balconygardenweb.com/best-types-of-monstera-varieties/" target="_blank">
                    <BtnOne>Monstera</BtnOne>
                </a>
                <a href="https://www.springer.com/journal/11104" target="_blank">
                    <BtnOne>Soil</BtnOne>
                </a>
                <a href="https://www.masterclass.com/articles/ron-finleys-tips-for-watering-your-plants" target="_blank">
                    <BtnOne>Watering</BtnOne>
                </a>
                <a href="https://www.bhg.com/gardening/yard/garden-care/gardening-tips-for-every-gardener/" target="_blank">
                    <BtnOne>Tips</BtnOne>
                </a>
                <a href="https://www.wikihow.com/Care-for-Flowers" target="_blank">
                    <BtnOne>Flowers</BtnOne>
                </a>
                <a href="https://cordis.europa.eu/article/id/413320-plant-health-protecting-plants-to-safeguard-our-future" target="_blank">
                    <BtnOne>Plants</BtnOne>
                </a>
                <a href="http://www.emmitsburg.net/gardens/articles.htm" target="_blank">
                    <BtnOne>Healthy Plants</BtnOne>
                </a>
                <a href="https://www.masterclass.com/articles/how-to-care-for-indoor-plants" target="_blank">
                    <BtnOne>Houseplants</BtnOne>
                </a>
                <a href="https://www.thespruce.com/best-patio-plants-4588544" target="_blank">
                    <BtnOne>Outdoor Plants</BtnOne>
                </a>
                <a href="https://www.plantura.garden/gartentipps/zierpflanzen/syngonium" target="_blank">
                    <BtnOne>Syngonium</BtnOne>
                </a>
                <a href="https://www.earthmagazine.org/article/mineral-resource-month-perlite" target="_blank">
                    <BtnOne>Perlite</BtnOne>
                </a>
                <a href="https://www.pestworld.org/news-hub/pest-articles/" target="_blank">
                    <BtnOne>Pests</BtnOne>
                </a>
                <a href="https://www.longdom.org/scholarly/fertilizers-journals-articles-ppts-list-1493.html" target="_blank">
                    <BtnOne>Fertilizer</BtnOne>
                </a>
                <a href="https://www.thespruce.com/how-to-repot-houseplants-1902928" target="_blank">
                    <BtnOne>Repotting</BtnOne>
                </a>
                <a href="https://www.succulentsandsunshine.com/choosing-the-right-pot-for-your-succulents/" target="_blank">
                    <BtnOne>Succulents</BtnOne>
                </a>
                <a href="https://blog.gardeningknowhow.com/gkh-musings/caring-for-houseplants-that-arent-yours/" target="_blank">
                    <BtnOne>Plant Sitting</BtnOne>
                </a>
                <a href="https://www.marksandspencer.com/l/flowers-and-plants/all-flowers-and-plants/offers" target="_blank">
                    <BtnOne>Plant Offers</BtnOne>
                </a>
                <a href="https://en.wikipedia.org/wiki/Plant" target="_blank">
                    <BtnOne>Plantwiki</BtnOne>
                </a>
                <a href="https://www.provenwinners.com/learn/articles/656" target="_blank">
                    <BtnOne>Pruning</BtnOne>
                </a>
                <a href="https://www.bhg.com/gardening/yard/garden-care/planting-tips-for-new-gardeners/" target="_blank">
                    <BtnOne>Planting</BtnOne>
                </a>
                <a href="https://plant-theatre.uk/downloads/sowing-and-growing-tips/funky-veg-kit-Eng.pdf" target="_blank">
                    <BtnOne>Sowing</BtnOne>
                </a>
                <a href="https://www.express.co.uk/life-style/garden/1460797/how-to-plant-wildflower-seeds-easy-tips-mini-meadow-evg" target="_blank">
                    <BtnOne>Seed Plants</BtnOne>
                </a>
                <a href="https://science.sciencemag.org/content/54/1383/15" target="_blank">
                    <BtnOne>Vascular Plants</BtnOne>
                </a>
                <a href="https://link.springer.com/book/10.1007/978-3-662-07257-8" target="_blank">
                    <BtnOne>Dicotyledons</BtnOne>
                </a>
            </TagsList>
                </TagsContainer>
            </SecondContainer>
    )
};

export default Cards; 

