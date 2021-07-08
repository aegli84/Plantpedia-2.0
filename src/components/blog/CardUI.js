import React from 'react';
import styled from 'styled-components';
import image1 from '../../assets/image1.jpg';
const ContainerBox = styled.div `
    margin: auto;
    padding: 40px;
`
const CardBox = styled.div `
    border : 1px solid whitesmoke;
    
`
const ImgBlog = styled.img `
    width: 10vw;
    height : 20vh;
`
const TextDiv = styled.div `
    width 10vw;

`

const Card = (props) =>{
    return (
            <ContainerBox>
                <CardBox>
                    <ImgBlog src={image1} alt="image1"/>
                    <TextDiv>
                        <h3>Article title</h3>
                        <h4>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </h4>
                    </TextDiv>
                </CardBox>
                <button>Read more..</button>
            </ContainerBox>
    )
};

export default Card;