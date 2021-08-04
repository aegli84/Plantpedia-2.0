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
                price = '€45 - 1 month subscription'
                button ='Product details'
                
                link = '/PlantBoxOne'
                />
                
            </div>
            <div>
                <CardTemplate 
                image={boxtwo}
                text = "Three is a crowd"
                price = '€45 - 3 months subscription'
                button ='Product details'
            
                link = '/PlantBoxTwo'
                />
            </div>
            <div>
                <CardTemplate 
                image={boxthree}
                text = "Give me Six"
                price = '€45 - 6 months subscription'
                button ='Product details'
                
                link = '/PlantBoxThree'
                />
            </div>
            <div>
                <CardTemplate 
                image={boxfour}
                text = "The One & Only"
                price = '€45 - 1 year subscription'
                button ='Product details'
                
                link = '/PlantBoxFour'
                />
            </div>
        </Container>
    )
}

const Container = styled.div`
    min-height: 90vh; 
    display: flex;
    align-items: center;
    justify-content: center;
`
export default Cards
