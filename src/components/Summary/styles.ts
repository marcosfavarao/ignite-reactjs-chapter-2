import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); // Qnty. Colunas, Tamanho entre elas
    gap: 2rem; //Espaçamento de cada um dos itens do grid

    margin-top: -10rem;

    div {
        background: var(--shape);
        color: var(--text-title);

        padding: 1.5rem 2rem;
        border-radius: 0.25rem;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highligh-background {
            background-color: var(--green);
            color: #fff;
        }
    }
`;
