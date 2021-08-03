import boxone from '../../assets/plantimages/plantsmainpage/boxone.jpeg'
import boxtwo from '../../assets/plantimages/plantsmainpage/boxtwo.jpeg'
import boxthree from '../../assets/plantimages/plantsmainpage/boxthree.jpeg'
import boxfour from '../../assets/plantimages/plantsmainpage/boxfour.jpeg'
import CardTemplate from "./CardTemplate"

import styled from 'styled-components';


const Cards = () => {
    return (
        <Container>
            <div>
                <CardTemplate 
                image={boxone}
                text = "Only One"
                button ='GET'
                link = '/PlantBoxOne'
                />
                
            </div>
            <div>
                <CardTemplate 
                image={boxtwo}
                text = "Three is a crowd"
                button ='GET'
                link = '/PlantBoxTwo'
                />
            </div>
            <div>
                <CardTemplate 
                image={boxthree}
                text = "Give me Six"
                button ='GET'
                link = '/PlantBoxThree'
                />
            </div>
            <div>
                <CardTemplate 
                image={boxfour}
                text = "The One & Only"
                button ='GET'
                link = '/PlantBoxFour'
                />
            </div>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 1rem;
    width:100%;
    height: 70vh; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export default Cards
