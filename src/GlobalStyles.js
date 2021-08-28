import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
}

    
    html {
        overflow: auto;
        scroll-behavior: smooth;
        @media (max-width: 1200px){
            font-size: 75%;
        }
        height: auto;
    }
    
    body {
        height: auto;
        width: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
        background-color: #323144;
    }
    
`
export default GlobalStyles;