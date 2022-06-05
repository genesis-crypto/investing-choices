import axios from "axios";
import { useQuery } from "react-query";

export interface User {
    id: number;
    nome: string;
    image_url: string;
}

export interface WithDataResponse {
    code: number;
    data: User[];
}

export type AxiosBodyResponse = WithDataResponse;

export const getUsers = async (): Promise<AxiosBodyResponse> => {
    try {
        const { data } = await axios.get("/v1/users");

        return data;
    } catch (err) {
        //@ts-ignore
        throw new Error(err);
    }
};

export const useUsers = () => {
    return useQuery(["users"], () => getUsers());
};
