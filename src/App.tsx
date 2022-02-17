import { useState } from "react";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { TransactionsProvider } from "./TransactionContext";

import { GlobalStyle } from "./common/styles/GlobalStyle";

export const App = () => {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
        useState(false);

    const handleOpenNewTransactionModal = () =>
        setIsNewTransactionModalOpen(true);
    const handleCloseNewTransactionModal = () =>
        setIsNewTransactionModalOpen(false);

    return (
        <TransactionsProvider>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <Dashboard />
            <NewTransactionModal
                isModalOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
            <GlobalStyle />
        </TransactionsProvider>
    );
};
