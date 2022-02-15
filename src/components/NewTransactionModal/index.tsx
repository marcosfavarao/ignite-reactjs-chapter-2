import Modal from "react-modal";

import incomeImg from "../../common/assets/svgs/income.svg";
import outcomeImg from "../../common/assets/svgs/outcome.svg";
import closeImg from "../../common/assets/svgs/close.svg";

import { Container, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
    isModalOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement("#root");
export const NewTransactionModal = ({
    isModalOpen,
    onRequestClose,
}: NewTransactionModalProps) => {
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
                    <button type="button">
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>

                    <button type="button">
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>
                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
};
