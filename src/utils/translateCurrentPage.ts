export function translateCurrentPage (page:string):string {
    switch(page) {
        case 'dashboard':
            return 'Inicio'
        case 'pay':
            return 'Pagar servicios'
        case 'profile':
            return 'Perfil'
        case 'activity':
            return 'Tu actividad'
        case 'charge':
            return 'Cargar dinero'
        case 'cards':
            return 'Tarjetas'
        default:
            return page
    }
}