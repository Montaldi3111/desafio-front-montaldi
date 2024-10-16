// Funcion para saber que día de la semana es a partir de una fecha ISO ingresada

import { filterByDescription, filterByType } from "./transactionsFilters";

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
    const servicesCompanies = ["netflix", "amazon prime video", "funimation", "peacock",
        "paramount+", "paramount", "mubi", "crunchyroll", "discovery", "discovery+",
        "hulu", "apple tv+", "disney+", "disney", "hbo max"];
        const matchedCompany = servicesCompanies.find(company => filterBy.includes(company));
        if (matchedCompany !== undefined) {
            return filterByDescription(transactions, matchedCompany)
        }
    switch (filterBy) {

        case 'asc-date': // Ordeno de forma ascendente por fecha
            return [...transactions].sort((a, b) => new Date(a.dated).getTime() - new Date(b.dated).getTime());

        case 'desc-date': // Ordeno de forma descendente por fecha
            return [...transactions].sort((a, b) => new Date(b.dated).getTime() - new Date(a.dated).getTime());

        case 'today': // Devuelvo un arreglo con las transacciones hechas en el día
            const todayTransactions = transactions.filter(transaction => {
                const transactionDate = new Date(transaction.dated);
                return transactionDate.getDate() === today.getDate() &&
                    transactionDate.getMonth() === today.getMonth() &&
                    transactionDate.getFullYear() === today.getFullYear();
            });
            return todayTransactions.sort((a, b) => new Date(b.dated).getTime() - new Date(a.dated).getTime())

        case 'yesterday': // Devuelvo un arreglo con las transacciones hechas ayer
            const yesterdayTransactions = transactions.filter(transaction => {
                const transactionDate = new Date(transaction.dated);
                const daysDiff = getDaysDifference(today, transactionDate);
                return daysDiff === 1;
            });
            return yesterdayTransactions.sort((a, b) => new Date(b.dated).getTime() - new Date(a.dated).getTime())

        case '1-week': // Devuelvo un arreglo con las transacciones hechas en la última semana
            const lastWeekTransactions = transactions.filter(transaction => {
                const transactionDate = new Date(transaction.dated);
                const daysDiff = getDaysDifference(today, transactionDate);
                return daysDiff >= 0 && daysDiff <= 7;
            });
            return lastWeekTransactions.sort((a, b) => new Date(b.dated).getTime() - new Date(a.dated).getTime())

        case '2-week': // Devuelvo un arreglo con las transacciones hechas en los últimos 15 días
            const twoWeeksTransactions = transactions.filter(transaction => {
                const transactionDate = new Date(transaction.dated);
                const daysDiff = getDaysDifference(today, transactionDate);
                return daysDiff >= 0 && daysDiff <= 15;
            });
            return twoWeeksTransactions.sort((a, b) => new Date(b.dated).getTime() - new Date(a.dated).getTime())

        case '1-month': // Devuelvo un arreglo con las transacciones hechas en el último mes
            const lastMonthTransactions = transactions.filter(transaction => {
                const transactionDate = new Date(transaction.dated);
                const daysDiff = getDaysDifference(today, transactionDate);
                return daysDiff >= 0 && daysDiff <= 30;
            });
            return lastMonthTransactions.sort((a, b) => new Date(b.dated).getTime() - new Date(a.dated).getTime())

        case '1-year': // Devuelvo un un arreglo con las transacciones hechas en el año
            const lastYearTransactions = transactions.filter(transaction => {
                const transactionDate = new Date(transaction.dated);
                const daysDiff = getDaysDifference(today, transactionDate);
                return daysDiff >= 0 && daysDiff <= 365;
            });
            return lastYearTransactions.sort((a, b) => new Date(b.dated).getTime() - new Date(a.dated).getTime())

        case "transferiu": {
            return filterByType(transactions, filterBy)
        }

        case "deposit": {
            return filterByType(transactions, filterBy)
        }

        default:
            return transactions; // Retorna las transacciones si no se reconoce el filtro
    }
}