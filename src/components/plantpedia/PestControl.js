import styled from "styled-components";
import PestIcon from "../plantpedia/icons/pests.png";


const WateringCard=styled.div`
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

const InnerBlackFrame=styled.div`
height:7vh;
width: 200px;
margin-top: 2vh;
background-color: #323144;
border-radius: 0 0 2rem 2rem;
color: white;
font-size: 1.5rem;
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

const ImagePest= styled.img`
width:100px;
height: 11vh;
background-color: white;
border-radius: 50%;
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
margin-left: 6vh;
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

const LinkButton= styled.a`
justify-content: safe center;
display: flex;
`
const TextBox = styled.p`
text-align: center;
margin-top: 20px;

`



const WateringButton = () => {
    return (
        <WateringCard>
            <Section1>
            <Thumbnail>
            <ImagePest src={PestIcon}>

            </ImagePest>


            </Thumbnail>
            </Section1>
            <Section2>
			<LinkButton href="/Pest">
				<InnerBlackFrame>
					<TextBox>Pest Control</TextBox>
				</InnerBlackFrame>
			</LinkButton>
            </Section2>
        </WateringCard>
    );
};
export default WateringButton;