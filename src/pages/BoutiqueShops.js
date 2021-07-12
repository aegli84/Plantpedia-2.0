import React from "react";
import styled from "styled-components";


const ExternalFrame = styled.div`
width:100vw;
height: 100vh;
padding-top: 7vh;
padding-bottom: 7vh;
background-size: cover;
background-repeat:no-repeat;
@media (max-width: 340px) {
    height: 75vh;
}
@media (max-width: 770px) {
    height: 80vh;
}
`
const InternalFrame = styled.div`
width:81vw;
height: 70vh;
margin: auto ;
border-radius: 1rem;
box-shadow: 0 0 20px black;
justify-content: space-around; 
display: grid;
grid-template-columns: auto auto auto;
padding: 10px;


@media (max-width: 770px) {
    grid-template-columns: auto auto;
    height: 70vh;

}
@media (max-width: 375px) {
    grid-template-columns: auto auto ;
    height: 70vh;


}
`

const Maps = styled.iframe`
width: 80vw;
height: 100%;
border-radius: 1rem;

`



const BoutiqueShops = () => {

    return(
        <ExternalFrame>
            <InternalFrame>
            <Maps src="https://www.google.com/maps/d/embed?mid=1XGuiNEAInijDAo5lHWnq90pYvNYZfBpD"></Maps>

            </InternalFrame>
        </ExternalFrame>
    )

}

export default BoutiqueShops;