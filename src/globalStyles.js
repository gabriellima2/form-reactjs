import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        width: 100%;
        height: 100vh;

        color: #f1f1f1;
        font-family: 'Poppins', sans-serif;
        
        background-color: #011728;
    }

    #root {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input {
        border: 1px solid #ccc;
        border-radius: 3px;
        outline: none;
        background: none;
    }

    button {
        border-radius: 3px;
        border: none;
    }

    label {
        background-color: #011728;
    }

    a {
        text-decoration: none;
        color: #27B8E3;
    }
`;
