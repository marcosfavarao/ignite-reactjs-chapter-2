import { useState } from "react";
import Modal from "react-modal";

import incomeImg from "../../common/assets/svgs/income.svg";
import outcomeImg from "../../common/assets/svgs/outcome.svg";
import closeImg from "../../common/assets/svgs/close.svg";

import {
    Container,
    TransactionTypeContainer,
    TransactionTypeButton,
} from "./styles";

interface NewTransactionModalProps {
    isModalOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement("#root");
export const NewTransactionModal = ({
    isModalOpen,
    onRequestClose,
}: NewTransactionModalProps) => {
    const [type, setType] = useState("deposit");

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={onRequestClose}
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar Modal" />
            </button>

            <Container>
                <h2>Cadastrar Transação</h2>

                <input placeholder="Título" />
                <input type="number" placeholder="Valor" />
                <TransactionTypeContainer>
                    <TransactionTypeButton
                        type="button"
                        onClick={() => setType("deposit")}
                        buttonColor={"#33CC95"}
                        isActive={type === "deposit"}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </TransactionTypeButton>

                    <TransactionTypeButton
                        type="button"
                        onClick={() => setType("withdraw")}
                        buttonColor={"#E52E4D"}
                        isActive={type === "withdraw"}
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </TransactionTypeButton>
                </TransactionTypeContainer>
                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
};
