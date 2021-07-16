import React from 'react';
import styled from 'styled-components';


const ContainerBox = styled.div `
    width: 20vw;
    height: 71vh;
    padding: 34px;
    @media (max-width: 770px) {
        width: 30vw;
    @media (max-width: 377px) {
        width: 32vw;
        padding: 1vw;
    }
`
const CardBox = styled.div `

    width:100%;
    height: 71vh;
    border : 1px solid black;
    border-radius : 17px 17px 17px 17px ;
    box-shadow: 0 4px 8px 0 black;
    background-color: #c5c5c4;
    @media (max-width: 770px) {
        width: 28vw;
        height: 52vh;
        margin-left: 10px;
    @media (max-width: 377px) {
        width: 30vw;
        height: 30vh;
        margin-top: 170px;
        }
`
const ImgBlog = styled.img `
    width: 100%;
    height : 35vh;
    border : 0px solid black;
    border-radius: 17px;
    @media (max-width: 770px) {
        width: 28vw;
        height: 22vh;
    @media (max-width: 377px) {
        width: 30vw;
        height: 35vw;
        }
`
 const TextDiv = styled.div `
`

const ArtTitle = styled.p `
    min-width: 90%;
    margin-left: 0.2vw;
    padding: 1vw;
    color: black;
    font-family: 'Montserrat' , Sans serif;
    font-weight: 500;
    font-size: 0.9rem;
    @media (max-width: 770px) {
        font-weight: 500;
        font-size: large;
    @media (max-width: 377px) {
        padding: 1vw;
        margin: 2vw;;
        font-size: small;
        }
`
const ArtText = styled.p `
    min-width: 50%;
    margin-left: 5px;
    padding: 1vw;
    word-wrap: break-word;
    font-family: 'Montserrat' , Sans serif;
    font-weight: 300;
    font-size: 0.9em;
    color: black;
    @media (max-width: 770px) {
        font-size: large;
    @media (max-width: 377px) {
        display:none;
        
        }
`
const ButtonStyle = styled.div `
    margin-top: 20px;
    border: none;
    border-radius: 30px;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    &:hover {
        background-color: #9c6c6c;
    }
    @media (max-width: 770px) {
        margin-left: 6vw;
        &:hover {
            background-color: #9c6c6c;
        }
    @media (max-width: 377px) {
        width: 24vw;
        height: 4.2vh;
        padding: 2vw;
        font-size: small;
        &:hover {
            background-color: #9c6c6c;
        }
    `


const Card = (props) =>{
    return (
            <ContainerBox>
                <CardBox>
                    <ImgBlog src={props.imgsrc} alt="image1"/>
                        <TextDiv>
                            <ArtTitle>
                                {props.title}
                            </ArtTitle>
                            <ArtText>
                                {props.text}
                            </ArtText>
                        </TextDiv>
                </CardBox>
                <a href= {props.link} target="_blank" style={{textDecoration: "none"}}><ButtonStyle>{props.button}</ButtonStyle></a>
            </ContainerBox>  
        )
};

export default Card;