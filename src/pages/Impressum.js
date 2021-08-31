import React from "react";
import styled from "styled-components";
import bg from "../assets/bgimg/guidepage.png";





const ExternalFrame = styled.div`
width:100vw;
height: 80vh;
padding-top: 7vh;
padding-bottom: 7vh;
background-image:url(${bg});
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
width:30vw;
padding-top:20px;
height: 55vh;
margin: auto ;
border-radius: 5rem;
box-shadow: 0 0 20px black;
background-color: #918EA4;




@media (max-width: 770px) {
    height: 50vh;
    margin-top:15%;
    width:40vw;



}
@media (max-width: 377px) {
  height: 40vh;
  margin-top:20%;
  width:40vw;


}
`

const Title=styled.h1`
color:white;
text-align:center;
margin-top:15%;
font-size:3rem;

@media (max-width: 770px) {
    font-size:2rem;

}
@media (max-width: 377px) {
    font-size:1rem;


}
`

const DataBox=styled.div`
color:white;
text-align:center;
margin-top:1%;
font-size:1rem;

@media (max-width: 770px) {
    font-size:1.5rem;


}
@media (max-width: 377px) {
    font-size:0.5rem;

}


`



const Impressum = () => {

    return(
        <div>
            <ExternalFrame>
                <InternalFrame>
                    <Title>Imprint</Title>
                    <br/>
                    <DataBox>
                        The services of Plantpedia are provided by:
                        <br/>
                        Nikolaos Dimitriadis
                        <br/>
                        Andreea Egli-Hehl
                        <br/>
                        Sventeriki Maria
                        <br/>
                        <br/>
                        E-mail:
                        <br/>
                        Plantpedia.project@gmail.com
                        <br/>
                        <br/>
                        Address:
                        <br/>
                        Landsberger Allee 176
                        <br/>
                        <br/>
                        Under Licence:
                        <br/>
                        Plantpedia Inc
                    </DataBox>
                </InternalFrame>
            </ExternalFrame>
        </div>
    )

}

export default Impressum;