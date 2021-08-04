import styled from 'styled-components';
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";

const CardTemplate = ({image, text, button, buttonCart, link, price}) => {

    return (
        <>
            <Container>
                <Card>
                    <Img src={image} alt='plant' />
                </Card>
            </Container>
            <Wrapper>
                <Text>{text}</Text>
                
                    {/* <MdAddShoppingCart size ='1.3rem' color='whitesmoke' style ={{marginLeft: '15rem'}}/> */}
                <TextPrice>{price}</TextPrice>
                <Link to={link}>
                    <Button>{button}</Button>
                </Link>
                <Link to={link}>
                    <ButtonCart>{buttonCart}<MdAddShoppingCart size ='1.2rem' color='whitesmoke' /></ButtonCart>
                    
                </Link>
            </Wrapper>
        </>
    )
}

const Container = styled.div `
    height: 50vh;
    /* margin-top: 5rem; */
    
`

const Wrapper = styled.div `
    margin: 2rem ; 
    display: inline-block;
    justify-content: center;
    align-items: center;
`

const Card = styled.div `
    width:17vw;
    height: 55vh;
    border: .7px solid #e7e7e7;
    border-radius: 2rem;
    box-shadow: 0 4px 8px 0 black;
    cursor: pointer;
    margin: 2rem;
    &:hover {
        border: 1px solid rgba(245, 245, 245, 0.829);
        box-shadow: 0px 5px 20px #515861;
        transition: all 0.7s ;
        transform: scale(1.2);
        
    }
`
const Img = styled.img `
    width:100%;
    height: 55vh;
    border-radius: 2rem;
    box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
    overflow: hidden;
    object-fit: cover;
    object-position: center center !important;
    
`
const Text = styled.div `
    color: whitesmoke;
    display: flex;
    justify-content: left;
    text-align: center;
    margin: 2rem  1rem  0 1rem;
    font-family: 'Montserrat', sans-serif !important;
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: underline;
`
const TextPrice = styled.div `
    color: whitesmoke;
    margin-top: .7rem;
    font-family: 'Montserrat', sans-serif !important;
    font-size: 1.1rem;
    font-weight: 300;
    margin: .5rem  0  0 1rem;
`
const Button = styled.button `
    margin-top: 1.2rem;
    border: none;
    border-radius: .8rem;
    padding: .8rem;
    color: white;
    background-color: #83a46f;
    text-align: center;
    cursor: pointer;
    margin-left: auto;
    margin-right:3rem;
    font-size: .8rem;
    font-family: 'Montserrat', sans-serif !important;
    transition: all 0.5s;
    text-transform: uppercase;
    &:hover {
        background-color: #7e66a3;
    }
`
const ButtonCart = styled.button `
    margin-top: 1.2rem;
    border: none;
    border-radius: 5rem;
    padding: .7rem;
    color: white;
    background-color: #7e66a3;
    text-align: center;
    cursor: pointer;
    margin-left: 1rem;
    margin-right:auto;
    font-size: .8rem;
    font-family: 'Montserrat', sans-serif !important;
    transition: all 0.5s;
    text-transform: uppercase;
    &:hover {
        background-color: #83a46f;
    }
`
export default CardTemplate

