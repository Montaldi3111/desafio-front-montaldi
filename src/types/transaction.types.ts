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

type TransferenceType = {
    amount: number,
    dated: string,
    destination: string,
    origin: string
}

type PaymentDataType = {
    accountNumber: string;
    account_id: string;
    amount: number;
    cardNumber: string;
    dated: string;
    destination: string;
    origin: string;
}