export class ServerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ServerError";
    }
}

export class MissingTokenError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "MissingTokenError";
    }
}

export class RegisterError extends Error {
    constructor(message:string) {
        super(message);
        this.name = "RegisterError";
    }
}

export class AccessDeniedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "AccessDeniedError";
    }
}

export class UserAccountError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "UserAccountError";
    }
}

export class TransactionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "TransactionError";
    }
}

export class TransferenceError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "TransferenceError";
    }
}

export class CardError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "CardError";
    }
}

export class ServiceError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ServiceError";
    }
}