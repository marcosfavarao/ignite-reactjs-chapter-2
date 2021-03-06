import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --shape: #FFF;

        --red: #E52E4D;
        --blue: #5929CC;
        --green: #33CC95;
        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;
    };

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }

        @media(max-width: 720px) {
            font-size: 87.50%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    };

    body, input, textarea, button, {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    };

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    };

    //App Modals Styles
    .react-modal-close {
        background: transparent;
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        border: 0;

        transition: filter 0.25s;
        &:hover {
            filter: brightness(0.9);
        }
    }

    .react-modal-content {
        background: var(--background);

        width: 100%;
        max-width: 576px;

        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    };

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        inset: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    };
`;
