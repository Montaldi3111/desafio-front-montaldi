// Funcion para saber que día de la semana es a partir de una fecha ISO ingresada

export function getDayOfWeek(isoDate: string): string {
    const date = new Date(isoDate);
    const dayOfWeek = date.toLocaleString('es-ES', { weekday: 'long' });

    return dayOfWeek;
}


// Función para transformar una fecha en formato ISO en un formato más legible
export function dateFormatter(isoDate: string): string {
    const date = new Date(isoDate);

    const day = date.getDate();
    const month = date.toLocaleString('es-ES', { month: 'long' });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day} de ${month} ${year} a ${hours}:${minutes} hs`;
}


// Función para calcular la diferencia en días entre 2 transacciones
function getDaysDifference(date1: Date, date2: Date): number {
    const msInDay = 1000 * 60 * 60 * 24; // Milisegundos en un día
    return Math.floor((date1.getTime() - date2.getTime()) / msInDay);
}

// Función para filtrar las transacciones según el criterio de ordenamiento
export function filterTransactions(transactions: TransactionType[], filterBy: string): TransactionType[] {
    const today = new Date();

    switch (filterBy) {

        case 'asc-date': // Ordeno de forma ascendente por fecha
            return [...transactions].sort((a, b) => new Date(a.dated).getTime() - new Date(b.dated).getTime());

        case 'desc-date': // Ordeno de forma descendente por fecha
            return [...transactions].sort((a, b) => new Date(b.dated).getTime() - new Date(a.dated).getTime());

        case 'today': // Devuelvo un arreglo con las transacciones hechas en el día
            transactions.filter(transaction => {
                const transactionDate = new Date(transaction.dated);
                return transactionDate.getDate() === today.getDate() &&
                    transactionDate.getMonth() === today.getMonth() &&
                    transactionDate.getFullYear() === today.getFullYear();
            });
            return [...transactions].sort((a,b) => new Date(b.dated).getTime() - new Date(a.dated).getTime())

        case 'yesterday': // Devuelvo un arreglo con las transacciones hechas ayer
            transactions.filter(transaction => {
                const transactionDate = new Date(transaction.dated);
                const daysDiff = getDaysDifference(today, transactionDate);
                return daysDiff === 1;
            });
            return [...transactions].sort((a,b) => new Date(b.dated).getTime() - new Date(a.dated).getTime())

        case '1-week': // Devuelvo un arreglo con las transacciones hechas en la última semana
            transactions.filter(transaction => {
                const transactionDate = new Date(transaction.dated);
                const daysDiff = getDaysDifference(today, transactionDate);
                return daysDiff >= 0 && daysDiff <= 7;
            });
            return [...transactions].sort((a,b) => new Date(b.dated).getTime() - new Date(a.dated).getTime())

        case '2-week': // Devuelvo un arreglo con las transacciones hechas en los últimos 15 días
            transactions.filter(transaction => {
                const transactionDate = new Date(transaction.dated);
                const daysDiff = getDaysDifference(today, transactionDate);
                return daysDiff >= 0 && daysDiff <= 15;
            });
            return [...transactions].sort((a,b) => new Date(b.dated).getTime() - new Date(a.dated).getTime())

        case '1-month': // Devuelvo un arreglo con las transacciones hechas en el último mes
            transactions.filter(transaction => {
                const transactionDate = new Date(transaction.dated);
                const daysDiff = getDaysDifference(today, transactionDate);
                return daysDiff >= 0 && daysDiff <= 30;
            });
            return [...transactions].sort((a,b) => new Date(b.dated).getTime() - new Date(a.dated).getTime())

        case '1-year': // Devuelvo un un arreglo con las transacciones hechas en el año
            transactions.filter(transaction => {
                const transactionDate = new Date(transaction.dated);
                const daysDiff = getDaysDifference(today, transactionDate);
                return daysDiff >= 0 && daysDiff <= 365;
            });
            return [...transactions].sort((a,b) => new Date(b.dated).getTime() - new Date(a.dated).getTime())

        default:
            return transactions; // Retorna las transacciones si no se reconoce el filtro
    }
}

export function filterAndSortTransactions(transactions: TransactionType[], filterBy: string, sortBy?: string): TransactionType[] {
    const filteredTransactions = filterTransactions(transactions, filterBy); // Filtro transacciones antes de ordenarlas por monto

    if (sortBy === 'amount') {
        return filteredTransactions.sort((a, b) => b.amount - a.amount); // Ordena por monto si es necesario
    }
    // Retorna las transacciones filtradas ya sea ordenadas por monto, sino son ordenadas por el filtro pasado
    return filteredTransactions;
}