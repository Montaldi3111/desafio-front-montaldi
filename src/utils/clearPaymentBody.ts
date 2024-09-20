export function clearBody (data:CompanyPaymentFormData) {
    const newBody = {
        amount: Number(data.amount),
        dated: data.dated,
        destination: data.destination,
        origin: data.origin,
        accountId: data.accountId
    }
    return newBody
}