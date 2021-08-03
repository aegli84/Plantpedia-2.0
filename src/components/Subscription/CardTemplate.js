import styled from 'styled-components';
import { Link } from "react-router-dom";

const CardTemplate = ({image, text, button, link}) => {

    return (
        <Container>
            <Card>
                <Img src={image} alt='plant' />
            </Card>
            <Text>
                {text}
            </Text>
            <Link to={link}>
                <Button>{button}</Button>
            </Link>
        </Container>
    )
}

const Container = styled.div `
    width:100%;
    height: 70vh;
    padding: 2rem;
`

const Card = styled.div `
    width:17vw;
    height: 55vh;
    border: .7px solid #e7e7e7;
    border-radius: 2rem;
    box-shadow: 0 4px 8px 0 black;
    &:hover {
        border: 1px solid rgba(245, 245, 245, 0.829);
        box-shadow: 0px 5px 20px #515861;
        transition: all 0.3s;
    }
`
const Img = styled.img `
    width:100%;
    height: 55vh;
    border-radius: 2rem;
    box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    object-fit: cover;
    
`
const Text = styled.div `
    color: whitesmoke;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    font-family: 'Montserrat', sans-serif !important;
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: underline;
`

const Button = styled.button `
    margin-top: 2rem;
    border: none;
    border-radius: 2rem;
    padding: 13px;
    color: white;
    background-color: #83a46f;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif !important;
    transition: all 0.5s;
    text-transform: uppercase;
    &:hover {
        background-color: #7e66a3;
    }
`

export default CardTemplate

