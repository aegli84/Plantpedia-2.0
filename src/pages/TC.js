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
width:50vw;
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
font-size:3rem;
text-align:center;


@media (max-width: 770px) {
    font-size:2rem;

}
@media (max-width: 377px) {
    font-size:1rem;


}
`

const DataBox=styled.div`
color:white;
margin-top:1%;
font-size:1rem;
overflow-y:scroll;
height:70%;
width:100%;
text-align:center;
padding-left:10%;
padding-right:10%;

@media (max-width: 770px) {
    font-size:1.5rem;


}
@media (max-width: 377px) {
    font-size:0.5rem;

}


`



const TC = () => {

    return(
        <div>
            <ExternalFrame>
                <InternalFrame>
                    <Title>Terms and Conditions</Title>
                    <br/>
                    <DataBox>
                        Terms and Conditions ("Terms")
                        <br/>
                        Last updated: (16/08/2021)
                        <br/>
                        Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the http://www.PlantPedia.com website (the "Service") operated by PlentPedia.inc  ("us", "we", or "our").
                        <br/>
                        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
                        <br/>
                        By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                        <br/>
                        Purchases
                        <br/>
                        If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your paying information, address, name, date of birth.
                        <br/>
                        The Purchases section is for users that buy online (physical or digital). 
                        <br/>
                        Subscriptions
                        <br/>
                        Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring subscription unless you cancel it before the product is sent to you. 
                        <br/>
                        The Subscriptions section is for private users only.
                        <br/>
                        Content
                        <br/>
                        Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for crediting the creators.
                        <br/>
                        The Content section is for users that allow users to create, edit, share, make content on their websites or apps. 
                        <br/>
                        Links To Other Web Sites
                        <br/>
                        Our Service may contain links to third-party web sites or services that are not owned or controlled by PlantPedia.inc.
                        <br/>
                        Pleantpedia.inc  has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that PlantPedia.inc shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                        <br/>
                        Changes
                        <br/>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30  days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                        <br/>
                        Contact Us
                        <br/>
                        If you have any questions about these Terms, please contact us.

                    </DataBox>
                </InternalFrame>
            </ExternalFrame>
        </div>
    )

}

export default TC;