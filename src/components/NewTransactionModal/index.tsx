import { FormEvent, useState } from "react";
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
    const [title, setTitle] = useState("");
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState("");
    const [type, setType] = useState("deposit");

    const handleCreateNewTransaction = (event: FormEvent) => {
        event.preventDefault();

        console.log({
            title,
            value,
            category,
            type,
        });
    };

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

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder="Título"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={(event) => setValue(Number(event.target.value))}
                />

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

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
};
