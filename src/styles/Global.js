import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        scrollbar-width: thin;
        scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
    }

    a {
        text-decoration: none;
        color: white;
    }

    ul {
        list-style-type: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
    

    button, link {
        cursor: pointer;
    }

    body {
        scroll-behavior: smooth;
    }

    *::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
}

    *::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 5px;
    }
`

export default GlobalStyles;