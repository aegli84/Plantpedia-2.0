import styled from "styled-components";
import {Link } from "react-router-dom";

const PestCard=styled.div`
    width:200px;
    height:22vh;
    background-color: #725490;
    border-radius: 2rem;
    position: relative;
    margin:auto;
@media (max-width: 770px) {
    grid-template-columns: auto auto;
    width:22vw;
    height:20vh;
}
@media (max-width: 377px) {
    grid-template-columns: auto auto ;
    width:30vw;
    height:14vh;
}
`

const Button=styled.button`
    height:7vh;
    width: 200px;
    margin-top: 2vh;
    background-color: #323144;
    border-radius: 0 0 2rem 2rem;
    color: white;
    font-size: 1.5rem;
&:hover {
        background-color: #83a46f;
    }
@media (max-width: 770px) {
    grid-template-columns: auto auto;
    width:22vw;
	font-size: 1.3rem;
}
@media (max-width: 377px) {
    grid-template-columns: auto auto;
    width:30vw;
    height:5vh;
	font-size: 1.2rem;
}
`

const ImagePest= styled.iframe`
    width:100px;
    height: 11vh;
    background-color: white;
    border-radius: 50%;
    pointer-events: none;
    border-style:none;

@media (max-width: 770px) {
    width:14vw;
    
}
@media (max-width: 377px) {
    width:15vw;
    height: 7vh;

}
`

const Thumbnail = styled.div`
    width:100px;
    height: 11vh;
    background-color: white;
    border-radius: 50%;
    margin-top: 2vh;
    margin-left: 51px;
    overflow:hidden;
@media (max-width: 770px) {
    width:14vw;
    height: 10vh;
    margin-left: 4vw;
    
}
@media (max-width: 377px) {
    width:15vw;
    height: 7vh;
    margin-left: 8vw;
    margin-top: 2vh;
}

`

const Section1=styled.div`
    display: flex;
`

const Section2=styled.div`
    margin: auto;
    justify-items: center;
`
const PestButton = () => {
    return (
        <PestCard>
            <Section1>
            <Thumbnail>
                <ImagePest src="https://giphy.com/embed/VCI3WsLi2oF4UX4N8x"></ImagePest>
            </Thumbnail>
            </Section1>
            <Section2>
            <Link to="/Pest">
                    <Button 
                            className = "button"
                            id = "submit" 
                            type = "submit" 
                            value = "submit">
                        Pest Control
                    </Button>
                </Link>
            </Section2>
        </PestCard>
    );
};
export default PestButton;