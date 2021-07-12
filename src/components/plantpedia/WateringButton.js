import styled from "styled-components";
const WateringCard=styled.div`
width:13vw;
height:22vh;
background-color: #725490;
margin: auto;
border-radius: 2rem;
display: flex;
@media (max-width: 770px) {
    grid-template-columns: auto auto;
    width:22vw;
    height:18vh;
}
@media (max-width: 377px) {
    grid-template-columns: auto auto ;
    width:30vw;
    height:14vh;
}
`
const InnerBlackFrame=styled.div`
height:7vh;
width: 14vw;
background-color: #323144;
border-radius: 0 0 2rem 2rem;
margin-top:15vh;
@media (max-width: 770px) {
    grid-template-columns: auto auto;
    width:22vw;
    margin-top:12vh;
}
@media (max-width: 377px) {
    grid-template-columns: auto auto;
    width:30vw;
    height:5vh;
	font-size: 1.2rem;
}
`
const WateringButton = () => {
    return (
        <WateringCard>
            <InnerBlackFrame>
            </InnerBlackFrame>
        </WateringCard>
    );
};
export default WateringButton;