import { ServerError, ServiceError } from "@/types/errors.types";

const API_URL = "https://digitalmoney.digitalhouse.com/service"


export const getAllServices = async () => {
    try {
        const resp = await fetch(API_URL);
        if(resp.ok) {
            const data = await resp.json();
            return data;
        } else {
            throw new ServiceError("No se pudo obtener los servicios")
        }
    } catch (error) {
        throw new ServerError("Algo malo ha sucedido, intente de nuevo más tarde");
    }
}