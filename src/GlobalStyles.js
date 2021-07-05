import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-margin-top: 25vh;
    }
    html {
        ${'' /* height: 100vh; */}
        overflow: hidden;
        scroll-behavior: smooth;
        @media (max-width: 1200px){
            font-size: 75%;
        }
    }
    body {
        ${'' /* background: #343A40; */}
        height: 100vh;
        width: 100%;
        overflow-x: hidden;
        background-color: #323144;
        overflow: ;
    }
`
export default GlobalStyles;