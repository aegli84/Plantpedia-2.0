
import Video from '../components/Video';
import News from '../components/News';
// import styled from "styled-components";
// import { motion } from 'framer-motion'
// import { titleAnimation, fade, pageAnimation } from '../animations'

const Home = () => {

    return(
        <div >
        
            <Video/> 
            {/* <motion.div variants = {pageAnimation} 
        initial = "hidden" 
        animate = "show">
            <H1 variants = {titleAnimation}>We are Plantpedia</H1>
            <div>
            <P variants = {fade}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia a placeat deserunt commodi labore neque magnam quidem. Natus, molestias aut.</P>
            </div>
            </motion.div> */}
            
            <News/>
            
        </div>
    )

}

// const H1 = styled(motion.h1)`
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     padding-top: 15rem;
//     padding-left: 5rem;
//     color: whitesmoke;
//     font-size: 3.5rem;
//     font-family: 'Montserrat', sans-serif !important;
//     text-shadow: 0  15px 7px black; 
// @media (max-width: 768px) {
//     padding-top: 3rem;
//     text-align: center;
// }

// @media (max-width: 480px) {
//     padding-top: 1.5rem;
//     font-size: 4rem;
//     margin: 1rem;
//     text-align: center;
// }
// `

// const P = styled(motion.p)`
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     color: whitesmoke;
//     padding: 22rem 55rem 15rem 5rem;
//     font-size: 1.6rem;
//     font-weight: 400;
//     font-family: 'Montserrat', sans-serif !important;
// @media (max-width: 768px) {
//     margin: 1.5rem 6rem;
//     font-size: 1.6rem;
// }

// @media (max-width: 480px) {
//     margin: 1rem 2rem;
//     font-size: 1.6rem;
// }
// `
export default Home;

