import styled from "styled-components";
import subspage from '../assets/bgimg/subspage.png'


const Subscription = () => {
    return (
        <Div>
            <H1>Our Plant Subsciption Boxes</H1>
            <P>
                Plants are an intimate part of our lives — we live with them and love them every day — and we want to share this lifestyle with you by carefully curating kits with hardy plants that will ease your anxiety about greenery care. We thoughtfully designed our plant subscription box service as a program that takes you through different levels of plant care
            </P>
        </Div>
    )
}


const Div =styled.div`
    height: 90vh;   
    width: 100vw;
    display: inline-block;
    justify-content: center;
    align-items: center;
    background-image: url(${subspage});
    background-repeat: no-repeat;
    background-size: cover;
`
const H1 = styled.h1`
    text-align: center;
    color: whitesmoke;
    padding-top: 2rem;
    font-size: 3.5rem;
    font-family: 'Raleway', sans-serif !important;
`
const P = styled.p`
    text-align: center;
    color: whitesmoke;
    margin: 0 10rem;
    padding-top: 2rem;
    font-size: 1.2rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif !important;
`
export default Subscription;