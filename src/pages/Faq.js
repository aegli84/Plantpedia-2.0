import React from 'react';
import styled from "styled-components";
import Faq from 'react-faq-component';

const data = {
  title: "FAQ",
  rows: [
    {
      title: "How will my plants arrive?",
      content: "Our number one priority is that our plants arrive in happy, healthy condition. Some of our plants ship directly potted in our earthenware plants, while others ship in their nursery grow pot placed inside the planter. How each plant ships is noted on its product page.   "
    },
    {
      title: "Why do some plants ship differently?",
      content: "You never know what adventures a plant can get into making its way to your home! Most of our small and medium plants ship in their nursery grow pot to allow for a safe and comfy ride all the way to your doorstep. Allowing plants to stay in their original pot while being shipped helps reduce the risk of stress and shock that could happen if they were to be placed in a new pot before leaving the greenhouse"
    },
    {
      title: "Do I have to repot my plant uppon arrival?",
      content: "The short answer is, no. First, let your plant acclimate to its new environment. Place the plant in the spot you plan to keep it in. Let it settle in for about two weeks. After two weeks, your plant has adjusted - your home’s light levels and temperature differ from a greenhouse! - and you can pot it into its ceramic planter, if you choose. You might notice your plant’s earthenware planter is wider than the plant’s nursery pot. This space is for your plant to grow into, should you choose to repot it. But remember, this is optional: as long as your plant still has room to grow in its nursery grow pot, and looks happy and healthy, you don’t need to lift a finger!"
    },
    {
        title: "The plant I am looking for is not in Plantpedia! What do I do?",
        content: "Worry not! Plantpedia is an ever-growing encyclopedia´. If your plant is not on the list, all you have to do is send us a message via the < Contact us > page with the name of the plant and we will handle the rest!"
      },
      {
        title: "Why does my plant look differently on the website?",
        content: "Live plants and small batch pottery will have variations in color, texture, finish, and size. While we make every effort to display our potted plants as accurately as possible, there may be subtle differences from what is displayed online."
      },
      {
        title: "My order arrived damaged, What do I do?",
        content: "Every plant is fragile and the shipping process is not always kind (or easy). Most of the time we get it right, but sometimes we don’t. When that happens, we fix it – be it a damaged plant or pot due to shipping carrier mishandling. Please inspect your package when you receive your delivery. Should your order arrive damaged, please fill out our contact form (make sure to include a photo) and we’ll get back to you within 2 business days. The form ensures we have what’s needed to help you as soon as possible!        In the unlikely event a plant is received dead on arrival, it will always be replaced"
      },
      {
        title: "How do your subscriptions work?",
        content: "Every month, subscribers receive one new plant and one chic ceramic planter (plant: 6 intch diameter grow pot and planter: 7 intch diameter opening). You can choose between cream and black for your planter color when signing up.The plants included in our subscription program are a mix of those available on thesill.com and speciality plants just for subscribers. We will try our best to provide variety and not repeat the same plant within a 6 month period. Please note planter shapes will repeat.After the first purchase, subscribers are charged on the 10th of every month and receive their subscription within the month.Any first time purchases that occur after the 20th of the month will still receive that month’s plant but will skip the next month’s order and billing cycle."
      },
    {
      title: "What payment options do you offer?",
      content: "We accept all major credit cards, Apple Pay, Google Pay and Afterpay, which allows you to pay in installments."
    }]
}

const styles = {
    titleTextColor: "white",
    rowTitleColor: "white",
    bgColor:"#918EA4",
    titleTextSize:"2rem"
};

const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true,

};

const ExternalDiv = styled.div`
width:100vw;
height: 80vh;
padding-top: 7vh;
padding-bottom: 7vh;
padding-left: 100px;
padding-right: 100px;


`

const Faqs = () => {
      return (
        <ExternalDiv >
          <Faq 
                data={data } 
                styles={styles}
                config={config}
            />
        </ExternalDiv>
      )
    }


export default Faqs