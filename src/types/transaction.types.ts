type TransactionType = {
    account_id: number,
    amount: number,
    dated: string,
    description: string,
    destination: string,
    id: number,
    origin: string,
    type: string
}

type TransactionListType = {
    transactions: TransactionType[];
}