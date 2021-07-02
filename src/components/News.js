import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Autoplay,Pagination,Navigation } from 'swiper/core';

SwiperCore.use([Autoplay,Pagination,Navigation]);

const News = () => {
    return (
        <Div>
            <Swiper 
            smooth = {true}
            spaceBetween={40} 
            centeredSlides={true} 
            autoplay={{
                "delay": 4500,
                "disableOnInteraction": false
            }} 
            pagination={{
                "clickable": true
                
            }} 
            navigation={true} 
            className="mySwiper"
            >
            <SwiperSlide className="swiper-container">
                <div>
                    <H2>The five 'It' Plants of 2021</H2>
                    <P>Aglaonemas, monsteras, philodendrons, pothos, ZZ plants, and other aroids topped the houseplant popularity lists in 2020 due to their exciting foliage colors, shapes, and ease of care. 
                    </P>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <H2>Whatever title</H2>
                    <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aliquam quas esse accusamus rerum assumenda autem explicabo necessitatibus expedita quidem.</P>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <H2>Whatever title</H2>
                    <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati omnis mollitia sapiente quaerat explicabo voluptatem autem tenetur a animi saepe?</P>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <H2>TGIF, BITCHES!</H2>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at itaque totam harum animi suscipit asperiores, optio ipsam nostrum reiciendis.</P>
                </div>
            </SwiperSlide>
        </Swiper>
        </Div>
    )
}

const Div = styled.div`
    height:40vh;
    width: 100vw;
    background-color: #918EA4;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    text-align: center;
    padding: 7rem;
    margin-top: .2rem;
    .swiper-button-next{
        color: #323144;
    }
    .swiper-button-prev{
        color: #323144;
    }
    .swiper-pagination > .swiper-pagination-bullet {
    opacity: 0.9;
    border: #323144 solid 1.8px;
    background-color: transparent;
    }
    .swiper-pagination > .swiper-pagination-bullet-active {
        background-color: #323144;
    }

@media (max-width: 767px) {
    width: 100vw; 
    height: 75vh;
    padding: 3rem;
    margin-top: .1rem;
    }
@media (max-width: 400px) {
    width: 100vw; 
    height: 40vh;
    padding: .4rem;
    /* .swiper-button-next{
        size: 1rem;
    } */
}
`

const H2 = styled.h2 `
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 3rem;
    color: whitesmoke; 
    padding: 0 4rem 1rem;

@media (max-width: 767px) {
    font-size: 1.7rem;
    padding: 2rem;
}
@media (max-width: 400px) {
    padding: .1rem 1.8rem 1rem 2rem;
    margin-top: 1rem;
    font-size: 1.8rem;
}
`

const P = styled.p `
    margin: 1.7rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;  
    color: whitesmoke;
    padding: 0 4rem 2rem;

@media (max-width: 767px) {
    font-size: 1.2rem;
}
@media (max-width: 400px) {
    padding: .5rem 1.8rem 1rem 2rem;
    font-size: 1rem;
}
`

export default News;
