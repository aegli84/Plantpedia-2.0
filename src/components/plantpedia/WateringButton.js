import styled from "styled-components";


const WateringCard=styled.div`
width:230px;
height:230px;
background-color: #725490;
margin: auto;
border-radius: 2rem;
display: flex;

@media (max-width: 770px) {
    grid-template-columns: auto auto;
    width:180px;
    height:180px;

}
@media (max-width: 375px) {
    grid-template-columns: auto auto ;
    width:120px;
    height:120px;
    
}
`

const InnerBlackFrame=styled.div`
height:60px;
width: 230px;
background-color: #323144;
border-radius: 0 0 2rem 2rem;
margin-top:170px;
@media (max-width: 770px) {
    grid-template-columns: auto auto;
    width:180px;
    margin-top:130px;


}
@media (max-width: 375px) {
    grid-template-columns: auto auto;
    width:120px;
    height:40px;
    margin-top: 80px;
    z-index: 1;
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