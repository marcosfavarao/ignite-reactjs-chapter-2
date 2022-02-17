import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

// Types
interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

// Context Value
export const TransactionsContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);

// Context Component
export const TransactionsProvider = ({
    children,
}: TransactionsProviderProps) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("/transactions").then((response) =>
            setTransactions(response.data.transactions)
        );
    }, []);

    const createTransaction = async (transactionInput: TransactionInput) => {
        const response = await api.post("/transactions", {
            ...transactionInput,
            createdAt: new Date(),
        });
        const { transaction } = response.data;

        setTransactions([...transactions, transaction]);
    };

    return (
        <TransactionsContext.Provider
            value={{ transactions, createTransaction }}
        >
            {children}
        </TransactionsContext.Provider>
    );
};
