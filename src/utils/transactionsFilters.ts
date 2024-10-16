import { filterTransactions } from "./dateFunctions";

// Ordena las transacciones por fecha de manera descendente
export function sortTransactions(transactions: TransactionType[]): TransactionType[] {
    return transactions.sort((a, b) => new Date(b.dated).getTime() - new Date(a.dated).getTime());
}


// Filtra las transacctiones por descripción y las ordena
export function filterByDescription (transactions:TransactionType[], description: string) : TransactionType[] {
    return sortTransactions(transactions.filter(transaction => transaction.description.toLowerCase().includes(description)));
};

// Filtra las transacctiones por tipo y las ordena
export function filterByType(transactions: TransactionType[], type: string): TransactionType[] {
    return sortTransactions(transactions.filter(transaction => transaction.type.toLowerCase().includes(type.toLowerCase())));
}