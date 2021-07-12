import React from 'react';
import styled from 'styled-components';


const ContainerBox = styled.div `

    width: 22vw;
    height: 100vh;
    margin: auto;
    padding: 40px;
`
const CardBox = styled.div `

    width:100%;
    height: 71vh;
    border : 1px solid black;
    border-radius : 17px 17px 17px 17px ;
    box-shadow: 0 4px 8px 0 black;
    background-color: #c5c5c4;

`
const ImgBlog = styled.img `
    width: 100%;
    height : 35vh;
    border : 0px solid black;
    border-radius: 17px;
`
 const TextDiv = styled.div `
    height: 100vh
`

const ArtTitle = styled.p `
    width: 100%;
    padding: 0.2vw;
    word-wrap: break-word;
    color: black;
    font-family: 'Montserrat' , Sans serif;
    font-weight: 500;
`
const ArtText = styled.p `
    width: 100%;
    padding: 0.5vw;
    word-wrap: break-word;
    font-family: 'Montserrat' , Sans serif;
    font-weight: 300;
    font-size: 0.9em;
    color: black;
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