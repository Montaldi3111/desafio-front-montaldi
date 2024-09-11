
// Me devuelve una fecha en formato legible
export function dateFormatter(isoDate: string):string {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.toLocaleString('es-ES', { month: 'long' });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day} de ${month} ${year} a ${hours}:${minutes} hs`;
}