import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        -webkit-tap-highlight-color: transparent;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    .white-text {
        color: white;
    }
    .black-text {
        color: black;
    }
`;
