import axios from "axios";
import { useQuery } from "react-query";

export interface Book {
    id: number;
    nome: string;
    description: string;
    image_url: string;
}

export interface WithDataResponse {
    code: number;
    data: Book[];
}

export type AxiosBodyResponse = WithDataResponse;

export const getBooks = async (): Promise<AxiosBodyResponse> => {
    try {
        const { data } = await axios.get("/v1/books");

        return data;
    } catch (err) {
        //@ts-ignore
        throw new Error(err);
    }
};

export const useBooks = () => {
    return useQuery(["books"], () => getBooks());
};
