import { SERVICE_URL } from "@/constants/api.constants";
import { ServerError, ServiceError } from "@/types/errors.types";



export const getAllServices = async () : Promise<ServiceType[]> => {
    try {
        const resp = await fetch(SERVICE_URL);
        if(resp.ok) {
            const data = await resp.json();
            return data as ServiceType[];
        } else {
            throw new ServiceError("No se pudo obtener los servicios")
        }
    } catch (error) {
        throw new ServerError("Algo malo ha sucedido, intente de nuevo más tarde");
    }
}

// GET Devuelve un servicio según su ID

export const getServiceById = async (serviceId: string) : Promise<ServiceType> => {
    try {
        const resp = await fetch(`${SERVICE_URL}/${serviceId}`);
        if(resp.ok) {
            const data = await resp.json();
            return data;
        } else {
            throw new ServiceError("No se pudo obtener ese servicio")
        }
    } catch (error) {
        throw new ServerError("Algo malo ha sucedido, intente de nuevo más tarde");
    }
}

