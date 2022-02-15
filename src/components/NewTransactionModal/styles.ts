import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        background: #e7e9ee;

        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;

        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        background-color: var(--green);
        color: #fff;

        width: 100%;
        height: 4rem;

        margin-top: 1.5rem;
        padding: 0 1.5rem;

        border: 0;
        border-radius: 0.25rem;
        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.25s;
        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;

    button {
        background-color: transparent;
        height: 4rem;

        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 20px;
            height: 20px;
        }

        span {
            color: var(--text-title);
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
        }

        transition: border-color 0.25s;
        &:hover {
            border-color: ${darken(0.1, "#d7d7d7")};
        }
    }
`;
