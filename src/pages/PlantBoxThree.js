import styled from 'styled-components';
import boxpage from '../assets/bgimg/boxpage.png'

const PlantBoxThree = () => {
    return (
        <Div>
            <h1>hello0000</h1>
        </Div>
    )
}

const Div = styled.div`
    height: 110vh;   
    width: 100vw;
    display: inline-block;
    justify-content: center;
    align-items: center;
    background-image: url(${boxpage});
    background-repeat: no-repeat;
    background-size: cover;
`

export default PlantBoxThree
