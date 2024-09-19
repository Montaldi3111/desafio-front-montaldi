export function detectCardBrand (cardNumber:string) : string | null {

    // Primero elimino posibles espacios o guiones del número
    const sanitizedCardNumber = cardNumber.replace(/[\s-]/g, '');

    // Expresiones regulares de diferentes tipos de tarjetas
    const cardPatterns: {[key:string]: RegExp} = {
        Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        MasterCard: /^5[1-5][0-9]{14}$/,
        AmericanExpress: /^3[47][0-9]{13}$/,
        Cabal: /^6[0-9]{15}$/,
        Naranja: /^589562[0-9]{10}$/,
        TarjetaShopping: /^279[0-9]{13}$/,
        Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/
    }

    // Itero sobre los patrones para detectar el tipo de tarjeta
    for(const [cardType, pattern] of Object.entries(cardPatterns)) {
        if(pattern.test(sanitizedCardNumber)) {
            return cardType;
        }
    }

    // Si salio del ciclo es porque no pudo detectar la tarjeta
    return null;
}